import React from "react";
import "./css/Shop.css";

const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Classic Watch",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 5,
    name: "Casual T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
  },
  {
    id: 8,
    name: "Travel Bag",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
];

function Shop() {
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
