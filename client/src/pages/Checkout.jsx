import React, { useState } from "react";
import "./css/Checkout.css";

const cartItems = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: 79.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Classic Watch",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 59.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
];

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    orderNotes: "",

    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    termsAccepted: false,
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle payment method
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      },

      shippingAddress: {
        country: formData.country,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
      },

      orderNotes: formData.orderNotes,

      paymentMethod,

      products: cartItems,

      pricing: {
        subtotal,
        shipping,
        total,
      },
    };

    console.log("ORDER DATA:", orderData);

    // Later send this to your MERN backend:
    // axios.post("http://localhost:5000/api/orders", orderData);
  };

  return (
    <main className="checkout-page">
      {/* Breadcrumb */}
      <section className="checkout-breadcrumb">
        <div className="checkout-breadcrumb-content">
          <h1>Checkout</h1>

          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/cart">Cart</a>
            <span>/</span>
            <span>Checkout</span>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section className="checkout-section">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {/* Billing Details */}
          <div className="checkout-card">
            <div className="checkout-heading">
              <span>CHECKOUT</span>
              <h2>Billing Details</h2>
            </div>

            {/* First + Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  First Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Last Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                required
              />
            </div>

            {/* Country */}
            <div className="form-group">
              <label>
                Country <span>*</span>
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
              </select>
            </div>

            {/* Address */}
            <div className="form-group">
              <label>
                Address <span>*</span>
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House number and street name"
                required
              />
            </div>

            {/* City + Postal Code */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  City <span>*</span>
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Postal Code <span>*</span>
                </label>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal code"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div className="form-group">
              <label>Order Notes</label>

              <textarea
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                rows="4"
                placeholder="Notes about your order, e.g. special delivery instructions..."
              ></textarea>
            </div>
          </div>

          {/* Payment */}
          <div className="checkout-card payment-card">
            <div className="checkout-heading">
              <span>PAYMENT</span>
              <h2>Payment Method</h2>
            </div>

            {/* Card Payment */}
            <label
              className={`payment-option ${
                paymentMethod === "card" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethod}
              />

              <div className="payment-option-content">
                <div className="payment-title">
                  <strong>Credit / Debit Card</strong>
                  <span>💳</span>
                </div>

                {paymentMethod === "card" && (
                  <div className="card-fields">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="Card number"
                      maxLength="19"
                    />

                    <div className="form-row">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM / YY"
                        maxLength="5"
                      />

                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        maxLength="4"
                      />
                    </div>

                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Name on card"
                    />
                  </div>
                )}
              </div>
            </label>

            {/* Cash On Delivery */}
            <label
              className={`payment-option ${
                paymentMethod === "cash" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethod}
              />

              <div className="payment-option-content">
                <div className="payment-title">
                  <strong>Cash on Delivery</strong>
                  <span>💵</span>
                </div>

                {paymentMethod === "cash" && (
                  <p className="payment-description">
                    Pay with cash when your order is delivered.
                  </p>
                )}
              </div>
            </label>
          </div>

          {/* Terms */}
          <label className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />

            <span>
              I agree to the <a href="/terms">Terms &amp; Conditions</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </span>
          </label>

          {/* Submit */}
          <button type="submit" className="place-order-btn">
            Place Order — ${total.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <aside className="checkout-summary">
          <div className="summary-header">
            <span>YOUR ORDER</span>
            <h2>Order Summary</h2>
          </div>

          <div className="checkout-items">
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-item-image">
                  <img src={item.image} alt={item.name} />

                  <span className="item-quantity">{item.quantity}</span>
                </div>

                <div className="checkout-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>

                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong>
              {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
            </strong>
          </div>

          <div className="summary-divider"></div>

          <div className="checkout-total">
            <span>Total</span>

            <strong>${total.toFixed(2)}</strong>
          </div>

          <div className="secure-payment">
            <span>🔒</span>

            <div>
              <strong>Secure Checkout</strong>
              <p>Your payment information is encrypted and secure.</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
