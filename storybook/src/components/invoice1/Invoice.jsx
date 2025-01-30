import React from "react";
import "./Invoice.css";

const Invoice = () => {
  return (
    <div className="bottom-right-container">
      <div className="sub-heading">Invoice</div>
      <div className="coloum-contants">
        <div className="coloum-contant">
          <img src="/images/vegetableburger.png" alt="" />
          <div className="side-info">
            <div className="sub-heading">Vegetable Burger</div>
            <div className="price-heading">
              <a href="">$25</a>
            </div>
          </div>
        </div>
        <div className="coloum-contant">
          <img src="/images/meatburger.png" alt="" />
          <div className="side-info">
            <div className="sub-heading">Meat Burger</div>
            <div className="price-heading">
              <a href="">$28</a>
            </div>
          </div>
        </div>
        <div className="coloum-contant">
          <img src="/images/cheeseburger.png" alt="" />
          <div className="side-info">
            <div className="sub-heading">Cheese Burger</div>
            <div className="price-heading">
              <a href="">$32</a>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-container">
        <div className="payment-heading">Payment Summary</div>
        <div className="sub-total">
          <div className="payment-name">Sub Total</div>
          <div className="payment-price">$85</div>
        </div>
        <div className="sub-total">
          <div className="payment-name">Tax</div>
          <div className="payment-price">-$6</div>
        </div>
        <div className="payment-sub-heading">
          <div className="payment-name">Total Payment</div>
          <div className="payment-price">$79</div>
        </div>
        <div className="payment-method">Payment Method</div>
        <div className="payment-Images">
          <div className="img-row">
            <img src="/images/bird.png" alt="" />
            <img src="/images/paypal.png" alt="" />
          </div>
          <div className="img-row">
            <img src="/images/sdfc.png" alt="" />
            <img src="/images/visa.png" alt="" />
          </div>
        </div>
      </div>
      <div className="payment-button">
        <button>Place an Order Now</button>
      </div>
    </div>
  );
};

export default Invoice;