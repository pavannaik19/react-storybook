import React from "react";
import "./CustomerOrder.css";

const CustomerOrder = () => {
  return (
    <div className="order-container">
      <div className="search-bar">
        <input type="text" placeholder="Find food or beverages" />
        <button>🔍</button>
      </div>

      <div className="customer-info">
        <h2>Customer Information</h2>
        <div className="c1">
        <div class="input-box">
        <label>Customer name</label>
        <input type="text" value="Emir Abiyyu" readonly></input>
    </div>
        </div>
        <div className="c1">
        <p><strong>Number of person:</strong> 12 Person Table <button>➖</button> <button>➕</button></p></div>
      </div>

      <div className="current-order">
        <h2>Current Order</h2>
        <div className="order-scroll">
        <div className="order-item">
          <img src="gyoza.jpg" alt="Japanese Chicken Gyoza" />
          <p>Japanese Chicken Gyoza <br /><strong>Rp 81.700,00</strong></p>
        </div>
        <div className="order-item">
          <img src="avocado.jpg" alt="Amazing Avocado" />
          <p>2pcs of Amazing Avocado <br /><strong>Rp 68.000,00</strong></p>
        </div>
        <div className="order-item">
          <img src="kidsmeal.jpg" alt="Healthy Kids Meal" />
          <p>Healthy Kids Meal <br /><strong>Rp 85.000,00</strong></p>
        </div>
        <div className="order-item">
          <img src="krosang.jpg" alt="Krosang" />
          <p>Krosang Thats It</p>
        </div>
        </div>
      </div>

      <div className="payment-summary">
        <h2>Payment Summary</h2>
        <p><strong>Subtotal:</strong> Rp 1.200.000,00</p>
        <p><strong>Discount Sales:</strong> Rp 0,00</p>
        <p><strong>Tax:</strong> Rp 28.000,00</p>
        <hr />
        <h3><strong>Total:</strong> Rp 1.228.000,00</h3>
      </div>

      <button className="order-button">Order Now</button>
    </div>
  );
};

export default CustomerOrder;
