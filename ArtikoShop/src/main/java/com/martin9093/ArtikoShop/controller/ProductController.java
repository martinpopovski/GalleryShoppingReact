package com.martin9093.ArtikoShop.controller;

import com.martin9093.ArtikoShop.dto.OrderProductDto;
import com.martin9093.ArtikoShop.model.Product;
import com.martin9093.ArtikoShop.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
public class ProductController {


    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value="")
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping(value = "/{id}")
    public Product findByIds(@Valid @PathVariable @NotNull @DecimalMin("0") Long id) {
        return productService.getProduct(id);
    }

}
