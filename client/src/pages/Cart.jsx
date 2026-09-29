import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Cart.css";

function Cart() {
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

  return (
    <main className="cart-page">
      {/* Breadcrumb */}
      <section className="cart-breadcrumb">
        <div className="cart-breadcrumb-content">
          <h1>Shopping Cart</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      <section className="cart-section">
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-title">
              <div>
                <span>CART</span>
                <h2>Your Items</h2>
              </div>

              <p>Products</p>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-item-info">
                  <h3>{item.title}</h3>

                  <div className="item-rating">★★★★★</div>

                  <p className="item-price">${Number(item.price).toFixed(2)}</p>
                </div>

                <div className="quantity-control">
                  <button type="button">−</button>

                  <span>quantity</span>

                  <button type="button">+</button>
                </div>

                <div className="item-total">total</div>

                <button type="button" className="remove-btn">
                  ×
                </button>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/shop">← Continue Shopping</Link>

              <button type="button">Clear Cart</button>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="order-summary">
            <span className="summary-label">ORDER SUMMARY</span>

            <h2>Order Details</h2>

            <div className="summary-row">
              <span>Subtotal</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <strong></strong>
            </div>

            <div className="free-shipping">
              🚚 Free shipping on orders over $100
            </div>

            <div className="coupon">
              <input type="text" placeholder="Coupon code" />

              <button type="button">Apply</button>
            </div>

            <div className="summary-divider"></div>

            <div className="total-row">
              <span>Total</span>
            </div>

            <Link to="/checkout">
              <button type="button" className="checkout-btn">
                Proceed to Checkout →
              </button>
            </Link>

            <div className="secure-checkout">
              🔒 Secure &amp; encrypted checkout
            </div>
          </aside>
        </div>
        {/* )} */}
      </section>
    </main>
  );
}

export default Cart;
