import React, { useState, useEffect } from "react";
import "./css/Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  // 1. Fixed the response typo and fetch chain nesting
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // 2. Updated to accept a product parameter and stringify it properly
  const addCart = async (product) => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST", // Fixed: Added quotes around POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Fixed: Pass actual product data
      });
      const data = await response.json();
      if (data.ok) {
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="shop-page">
      {/* Breadcrumb */}
      <section className="shop-breadcrumb">
        <div className="breadcrumb-content">
          <h1>Shop</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Shop</span>
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
          {/* Fixed parameter name to singular 'product' for clarity */}
          {products.map((product) => (
            <div className="shop-product-card" key={product.id}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.title} />
                <span className="sale-badge">SALE</span>
                <button className="wishlist-btn">♡</button>
              </div>
              <div className="shop-product-info">
                <div className="product-rating">★★★★★</div>
                <h3>{product.title}</h3>
                <p className="product-price">{product.price}</p>
                {/* 3. Fixed: Passed an arrow function callback instead of invoking it directly */}
                <button
                  className="add-cart-btn"
                  onClick={() => addCart(product)}
                >
                  Add to Cart
                </button>
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
