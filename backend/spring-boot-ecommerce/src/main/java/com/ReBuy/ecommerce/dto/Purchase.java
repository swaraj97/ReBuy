package com.ReBuy.ecommerce.dto;

import com.ReBuy.ecommerce.entity.Address;
import com.ReBuy.ecommerce.entity.Customer;
import com.ReBuy.ecommerce.entity.Order;
import com.ReBuy.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
