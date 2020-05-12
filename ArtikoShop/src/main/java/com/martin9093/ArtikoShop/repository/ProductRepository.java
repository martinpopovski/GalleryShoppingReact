package com.martin9093.ArtikoShop.repository;

import com.martin9093.ArtikoShop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
