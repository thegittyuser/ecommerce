import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({
      username: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Have a question? We'd love to hear from you.</p>
      </section>

      <section className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            If you have questions about an order, product, delivery, or anything
            else, feel free to contact us.
          </p>

          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>123 Main Street, Pakistan</p>
          </div>

          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>support@example.com</p>
          </div>

          <div className="contact-item">
            <h3>🕐 Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="username"
            placeholder="Your Name"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
