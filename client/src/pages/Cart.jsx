import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <main className="cart-page">
      {/* Breadcrumb */}
      <section className="cart-breadcrumb">
        <div className="cart-breadcrumb-content">
          <h1>Shopping Cart</h1>

          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Cart */}
      <section className="cart-section">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>

            <a href="/shop" className="continue-shopping">
              Continue Shopping →
            </a>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Cart Items */}
            <div className="cart-items">
              <div className="cart-title">
                <div>
                  <span>CART</span>
                  <h2>Your Items</h2>
                </div>

                <p>{cartItems.length} Products</p>
              </div>

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <div className="item-rating">★★★★★</div>

                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="cart-actions">
                <a href="/shop">← Continue Shopping</a>

                <button onClick={() => setCartItems([])}>Clear Cart</button>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="order-summary">
              <span className="summary-label">ORDER SUMMARY</span>

              <h2>Order Details</h2>

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

              <div className="free-shipping">
                🚚 Free shipping on orders over $100
              </div>

              <div className="coupon">
                <input type="text" placeholder="Coupon code" />

                <button>Apply</button>
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <Link to="/checkout">
                <button className="checkout-btn">Proceed to Checkout →</button>
              </Link>

              <div className="secure-checkout">
                🔒 Secure &amp; encrypted checkout
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;
