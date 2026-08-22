import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React from "react";

function Cart() {
  const {
    cart,
    cartCount,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h1>Your cart is empty</h1>
        <p>Add some products to your cart before checking out.</p>
        <Link to="/shop" className="primary-btn">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="section-heading simple-heading">
        <div>
          <span className="eyebrow">SHOPPING CART</span>
          <h1>Your Cart ({cartCount})</h1>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div className="cart-item-info">
                <span className="product-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>

                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-right">
                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartCount}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <Link to="/checkout" className="primary-btn full-btn">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;