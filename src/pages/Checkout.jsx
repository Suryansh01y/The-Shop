import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React from "react";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();

  function handlePlaceOrder() {
    alert("Demo order placed successfully!");
    clearCart();
  }

  return (
    <section className="checkout-page">
      <div className="section-heading simple-heading">
        <div>
          <h1>Checkout</h1>
          <p>You can access this page because you are logged in.</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="state-box">
          <h2>No items to checkout</h2>
          <p>Your cart is currently empty.</p>
          <Link to="/shop" className="primary-btn">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="checkout-card">
          <h2>Order Review</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.title} × {item.quantity}
              </span>
              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            className="primary-btn full-btn"
            onClick={handlePlaceOrder}
          >
            Place Demo Order
          </button>
        </div>
      )}
    </section>
  );
}

export default Checkout;