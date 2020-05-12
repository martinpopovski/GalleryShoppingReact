package com.martin9093.ArtikoShop.dto;


//items in cart
public class OrderProductDto {

    private Integer id;
    private Integer count;

    public OrderProductDto(Integer id, Integer count) {
        this.id = id;
        this.count = count;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return count;
    }

    public void setQuantity(Integer count) {
        this.count = count;
    }


}
