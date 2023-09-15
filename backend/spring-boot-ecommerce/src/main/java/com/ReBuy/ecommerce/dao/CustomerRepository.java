package com.ReBuy.ecommerce.dao;

import com.ReBuy.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByEmail(String theEmail);
    // behind the scene Spring will execute - Select * from Customer c where c.email = theEmail
    // will return null if not found
}
