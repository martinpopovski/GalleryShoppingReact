package com.martin9093.ArtikoShop.controller;


import com.martin9093.ArtikoShop.dto.OrderProductDto;
import com.martin9093.ArtikoShop.exception.ResourceNotFoundException;
import com.martin9093.ArtikoShop.model.Order;
import com.martin9093.ArtikoShop.model.OrderProduct;
import com.martin9093.ArtikoShop.model.OrderStatus;
import com.martin9093.ArtikoShop.service.OrderProductService;
import com.martin9093.ArtikoShop.service.OrderService;
import com.martin9093.ArtikoShop.service.ProductService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    ProductService productService;
    OrderService orderService;
    OrderProductService orderProductService;

    public OrderController(ProductService productService, OrderService orderService, OrderProductService orderProductService) {
        this.productService = productService;
        this.orderService = orderService;
        this.orderProductService = orderProductService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> list() {
        return this.orderService.getAllOrders();
    }

    @PostMapping(value="/makeOrder")
    public ResponseEntity<Order> create(@Valid @RequestBody List<OrderProductDto> form){



       // validateProductsExistence(form);
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
        order = this.orderService.create(order);

        List<OrderProduct> orderProducts = new ArrayList<>();
       for (OrderProductDto dto : form) {
           System.out.println(dto.getId());
           System.out.println(dto.getQuantity());

            orderProducts.add(orderProductService.create(new OrderProduct(order, productService.getProduct(
                    dto.getId()), dto.getQuantity()) ));

        }

        order.setOrderProducts(orderProducts);

        this.orderService.update(order);

        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/orders/{id}")
                .buildAndExpand(order.getId())
                .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);
        // uri da se sredi
        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);

    }

    private void validateProductsExistence(List<OrderProductDto> orderProducts) {
        List<OrderProductDto> list = orderProducts
                .stream()
                .filter(op -> Objects.isNull(productService.getProduct(op
                        .getId())))
                .collect(Collectors.toList());

        if (!CollectionUtils.isEmpty(list)) {
            new ResourceNotFoundException("Product not found");
        }
    }
//promeneta logika da vrakja id namesto cel produkt so fetch
    //ne se koristi klasata
    public static class OrderForm {

        private List<OrderProductDto> productOrders;

        public List<OrderProductDto> getProductOrders() {
            return productOrders;
        }

        public void setProductOrders(List<OrderProductDto> productOrders) {
            this.productOrders = productOrders;
        }
    }

}
