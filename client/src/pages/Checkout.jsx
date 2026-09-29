import React, { useEffect, useState } from "react";
import "./css/Checkout.css";

function Checkout() {
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
    termsAccepted: false,
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/fetchcart");
      const data = await response.json();

      if (data.ok) {
        setCartItems(data.cartItem);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

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

      paymentMethod: "cash",

      products: cartItems,

      pricing: {
        subtotal,
        shipping,
        total,
      },
    };

    console.log("ORDER DATA:", orderData);
  };

  return (
    <main className="checkout-page">
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

      <section className="checkout-section">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {/* Billing Details */}
          <div className="checkout-card">
            <div className="checkout-heading">
              <span>CHECKOUT</span>
              <h2>Billing Details</h2>
            </div>

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

            <div className="payment-option selected">
              <div className="payment-option-content">
                <div className="payment-title">
                  <strong>Cash on Delivery</strong>
                  <span>💵</span>
                </div>

                <p className="payment-description">
                  Pay with cash when your order is delivered.
                </p>
              </div>
            </div>
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
            {cartItems.map((item) => {
              const quantity = Number(item.quantity || 1);
              const itemTotal = Number(item.price || 0) * quantity;

              return (
                <div className="checkout-item" key={item.id}>
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.title} />

                    <span className="item-quantity">{quantity}</span>
                  </div>

                  <div className="checkout-item-info">
                    <h3>{item.title}</h3>
                    <p>${Number(item.price || 0).toFixed(2)}</p>
                  </div>

                  <strong>${itemTotal.toFixed(2)}</strong>
                </div>
              );
            })}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <strong>
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
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
              <p>Your order information is secure.</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
