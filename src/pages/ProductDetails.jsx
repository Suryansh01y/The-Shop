import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";
import React from "react";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        setError("Product could not be found.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="state-box error-box">
        <h2>{error}</h2>
        <Link to="/shop" className="primary-btn">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="details-page">
      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <div className="details-card">
        <div className="details-image-wrap">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div className="details-content">
          <span className="product-category">{product.category}</span>
          <h1>{product.title}</h1>

          <div className="rating large-rating">
            ★ {product.rating?.toFixed(1) || "4.0"}
          </div>

          <p className="details-price">${product.price.toFixed(2)}</p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-meta">
            <span>Brand: {product.brand || "ShopZone"}</span>
            <span>Stock: {product.stock}</span>
            <span>Discount: {product.discountPercentage}%</span>
          </div>

          <button
            className="primary-btn add-large-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;