import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { getProducts } from "../api/products";
import React from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");
        const data = await getProducts();
        setProducts(data.products || []);
      } catch (err) {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return products;

    return products.filter((product) =>
      `${product.title} ${product.category}`
        .toLowerCase()
        .includes(query)
    );
  }, [products, search]);

  return (
    <section>
      <div className="section-heading">
        <div>
          <span className="eyebrow">SHOP</span>
          <h1>All Products</h1>
        </div>

        <div className="search-box">
          <span>🔎</span>
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading && <Loading />}

      {error && (
        <div className="state-box error-box">
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <div className="state-box">
          <h3>No products found</h3>
          <p>Try searching with another product name or category.</p>
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Shop;