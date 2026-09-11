import React from "react";
import "./css/Home.css";

const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: "$79.99",
    oldPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Classic Watch",
    price: "$129.99",
    oldPrice: "$159.99",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: "$59.99",
    oldPrice: "$79.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: "$89.99",
    oldPrice: "$119.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    text: "Amazing products and super fast delivery. I absolutely love shopping here!",
  },
  {
    name: "Michael Brown",
    text: "The quality is excellent and the prices are very reasonable. Highly recommended.",
  },
  {
    name: "Emily Davis",
    text: "Great shopping experience. The website is easy to use and my order arrived quickly.",
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-small-title">WELCOME TO SHOPZONE</span>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p>
            Discover premium products at amazing prices. Find everything you
            need in one place.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn primary-btn">
              Shop Now
            </a>

            <a href="#sale" className="btn secondary-btn">
              View Sale
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <span>🚚</span>
          <div>
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
        </div>

        <div className="feature">
          <span>🔒</span>
          <div>
            <h3>Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>
        </div>

        <div className="feature">
          <span>↩️</span>
          <div>
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>

        <div className="feature">
          <span>💬</span>
          <div>
            <h3>24/7 Support</h3>
            <p>We're here to help</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Featured Products</h2>
          <p>Explore our most popular products</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <span className="product-badge">SALE</span>

                <button className="wishlist">♡</button>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <div className="rating">★★★★★</div>

                <div className="price">
                  <span className="current-price">{product.price}</span>

                  <span className="old-price">{product.oldPrice}</span>
                </div>

                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="sale-section" id="sale">
        <div className="sale-content">
          <span>LIMITED TIME OFFER</span>

          <h2>
            Big Sale.
            <br />
            Up To 50% Off.
          </h2>

          <p>
            Don't miss our biggest sale of the season. Grab your favorite
            products before they're gone.
          </p>

          <button className="sale-btn">Shop Sale →</button>
        </div>

        <div className="sale-discount">
          <strong>50%</strong>
          <span>OFF</span>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <div className="section-heading">
          <span>TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
          <p>Thousands of happy customers shop with us every day.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">★★★★★</div>

              <p>"{review.text}"</p>

              <div className="review-user">
                <div className="avatar">{review.name.charAt(0)}</div>

                <div>
                  <h4>{review.name}</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-info">
          <span>GET IN TOUCH</span>

          <h2>
            Have a question?
            <br />
            We'd love to hear from you.
          </h2>

          <p>
            Our support team is always ready to help. Send us a message and
            we'll get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div>
              <span>📧</span>
              <p>support@shopzone.com</p>
            </div>

            <div>
              <span>📞</span>
              <p>+1 234 567 890</p>
            </div>

            <div>
              <span>📍</span>
              <p>123 Market Street, New York</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message →</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
