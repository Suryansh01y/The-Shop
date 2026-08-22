import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React from "react";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h3 className="product-title">{product.title}</h3>

        <div className="rating">
          ★ {product.rating?.toFixed(1) || "4.0"}
        </div>

        <p className="product-price">${product.price.toFixed(2)}</p>

        <div className="card-actions">
          <Link
            to={`/product/${product.id}`}
            className="outline-btn card-btn"
          >
            View Details
          </Link>

          <button
            className="primary-btn card-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;