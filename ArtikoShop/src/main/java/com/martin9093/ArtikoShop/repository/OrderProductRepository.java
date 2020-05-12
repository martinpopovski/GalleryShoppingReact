package com.martin9093.ArtikoShop.repository;

import com.martin9093.ArtikoShop.model.OrderProduct;
import com.martin9093.ArtikoShop.model.OrderProductPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, OrderProductPK> {
}
