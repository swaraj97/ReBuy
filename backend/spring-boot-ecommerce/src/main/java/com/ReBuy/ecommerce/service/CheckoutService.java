package com.ReBuy.ecommerce.service;

import com.ReBuy.ecommerce.dto.PaymentInfo;
import com.ReBuy.ecommerce.dto.Purchase;
import com.ReBuy.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}