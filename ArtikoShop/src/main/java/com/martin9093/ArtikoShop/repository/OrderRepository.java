package com.martin9093.ArtikoShop.repository;

import com.martin9093.ArtikoShop.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
