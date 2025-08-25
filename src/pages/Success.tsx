import React, { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Example: Add a new order to localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      status: "pending",
      total: localStorage.getItem("lastOrderTotal") ? Number(localStorage.getItem("lastOrderTotal")) : 0,
      items: localStorage.getItem("lastOrderItems") ? JSON.parse(localStorage.getItem("lastOrderItems")) : [],
    };
    if (newOrder.items.length > 0 && newOrder.total > 0) {
      orders.unshift(newOrder);
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.removeItem("lastOrderItems");
      localStorage.removeItem("lastOrderTotal");
    }
  }, []);

  return (
    <div style={{padding: 40, textAlign: 'center'}}>
      <h1 style={{fontSize: 32, color: '#635bff'}}>Payment Successful!</h1>
      <p style={{marginTop: 16}}>Thank you for your purchase. Your order has been placed and will appear in your order history.</p>
      <a href="/orders" style={{marginTop: 24, display: 'inline-block', color: '#635bff', textDecoration: 'underline'}}>Go to Order History</a>
    </div>
  );
}
