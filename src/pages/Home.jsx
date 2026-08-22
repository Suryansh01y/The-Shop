import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO SHOPZONE</span>
          <h1>Find the best products for you.</h1>
          <p>
            Discover quality products across multiple categories,
            all in one simple shopping experience.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="primary-btn">
              Shop Now
            </Link>
            <Link to="/contact" className="outline-btn">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">🛒</div>
          <div className="floating-card">Fast • Simple • Secure</div>
        </div>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly.</p>
        </div>

        <div className="feature-card">
          <span>🔒</span>
          <h3>Secure Shopping</h3>
          <p>A simple and reliable checkout flow.</p>
        </div>

        <div className="feature-card">
          <span>⭐</span>
          <h3>Quality Products</h3>
          <p>Browse products from different categories.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;