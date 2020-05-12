package com.martin9093.ArtikoShop.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Product name is required.")
    @Basic(optional = false)
    private String title;

    private String author;

    private String description;
    @Column(name="inCart")
    private boolean inCart;

    private String img;

    private BigDecimal price;

    public Product() {
    }

    public Product(Long id, @NotNull(message = "Product name is required.") String title, String author, String description, boolean inCart, BigDecimal price, String img) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.inCart = inCart;
        this.price = price;
        this.img = img;
    }

    public Long getId(){
        return this.id;
    }

    public Integer getPrice(){
        return this.price.intValueExact();
    }

    public void setCart(boolean inCart){
        this.inCart=inCart;
    }


}
