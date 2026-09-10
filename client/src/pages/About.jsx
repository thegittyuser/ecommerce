import "./css/About.css";

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our store and what we stand for.</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Welcome to Our Store</h2>

          <p>
            We are an ecommerce store focused on providing high-quality products
            at affordable prices. Our goal is to make online shopping simple,
            convenient, and enjoyable.
          </p>

          <p>
            From electronics and fashion to home essentials and beauty products,
            we carefully select products that offer great value to our
            customers.
          </p>

          <p>
            Customer satisfaction is at the heart of everything we do. We are
            constantly improving our services to provide a better shopping
            experience.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Us?</h3>

          <ul>
            <li>High-quality products</li>
            <li>Affordable prices</li>
            <li>Fast and reliable delivery</li>
            <li>Secure payments</li>
            <li>Friendly customer support</li>
            <li>Easy returns</li>
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a trusted online shopping platform where
          customers can easily find the products they love at prices they can
          afford.
        </p>
      </section>
    </div>
  );
}

export default About;
