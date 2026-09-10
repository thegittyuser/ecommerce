import { Link } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const categories = [
    {
      title: "Electronics",
      description: "Discover the latest gadgets and smart technology.",
      icon: "💻",
    },
    {
      title: "Fashion",
      description: "Upgrade your style with modern trends.",
      icon: "👕",
    },
    {
      title: "Home & Living",
      description: "Beautiful essentials for a comfortable home.",
      icon: "🏠",
    },
    {
      title: "Beauty",
      description: "Premium products for your everyday routine.",
      icon: "✨",
    },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Fast & Reliable Delivery",
      description: "Get your orders delivered safely and on time.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description: "Your payments and personal information are protected.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "Shop confidently with our simple return policy.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our support team is always ready to help.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">✨ New Collection Available</span>

          <h1>
            Everything You Need.
            <br />
            <span>All in One Place.</span>
          </h1>

          <p>
            Discover quality products, unbeatable deals, and a seamless shopping
            experience designed just for you.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Shop Now →
            </Link>

            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-trust">
            <span>✓ Quality Products</span>
            <span>✓ Best Prices</span>
            <span>✓ Fast Delivery</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-card">
            <span>🔥</span>
            <strong>Trending Products</strong>
            <small>Shop our latest arrivals</small>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="section-header">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>

          <Link to="/shop" className="view-all">
            View All →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link to="/shop" className="category-card" key={category.title}>
              <div className="category-icon">{category.icon}</div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <span className="category-link">Explore Category →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <span className="promo-label">LIMITED TIME OFFER</span>

          <h2>Get up to 40% OFF</h2>

          <p>Save more on selected products while the offer lasts.</p>

          <Link to="/shop" className="btn btn-light">
            Shop the Sale →
          </Link>
        </div>

        <div className="promo-decoration">%</div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header centered">
          <span className="section-label">WHY CHOOSE US</span>
          <h2>Shopping Made Simple</h2>
          <p>
            Everything we do is designed to make your shopping experience
            better.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <span className="section-label">STAY UPDATED</span>

          <h2>Get the Latest Deals</h2>

          <p>
            Subscribe to our newsletter and be the first to know about new
            products, exclusive offers, and special discounts.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
