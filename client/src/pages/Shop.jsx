import React from "react";
import "./css/Shop.css";
import { useState } from "react";
import { useEffect } from "react";

function Shop() {
  const [product, setProduct] = useState("No Valid Data");

  useEffect(() => {
    const respose = fetch("http://localhost:3000/products").then((res) =>
      res
        .json()
        .then((data) => setProduct(data))
        .catch((error) => console.error(error)),
    );
  }, [product]);

  return (
    <main className="shop-page">
      {/* Breadcrumb */}
      <section className="shop-breadcrumb">
        <div className="breadcrumb-content">
          <h1>Shop</h1>

          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="shop-products">
        <div className="shop-header">
          <div>
            <span className="shop-label">OUR COLLECTION</span>
            <h2>All Products</h2>
          </div>

          <select className="sort-select">
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="new">Newest</option>
          </select>
        </div>

        <div className="shop-grid">
          {products.map((product) => (
            <div className="shop-product-card" key={product.id}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />

                <span className="sale-badge">SALE</span>

                <button className="wishlist-btn">♡</button>
              </div>

              <div className="shop-product-info">
                <div className="product-rating">★★★★★</div>

                <h3>{product.name}</h3>

                <p className="product-price">{product.price}</p>

                <button className="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom / Pagination */}
      <section className="shop-bottom">
        <button className="pagination active">1</button>
        <button className="pagination">2</button>
        <button className="pagination">3</button>
        <button className="pagination next">Next →</button>
      </section>
    </main>
  );
}

export default Shop;
