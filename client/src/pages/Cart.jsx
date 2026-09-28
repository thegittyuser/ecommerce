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

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && Number(item.quantity) > 1
          ? { ...item, quantity: Number(item.quantity) - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0,
  );

  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 10;

  const total = subtotal + shipping;

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

      {/* Cart */}
      <section className="cart-section">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your Cart is Empty</h2>

            <p>Looks like you haven't added anything to your cart yet.</p>

            <Link to="/shop" className="continue-shopping">
              Continue Shopping →
            </Link>
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
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.title}</h3>

                    <div className="item-rating">★★★★★</div>

                    <p className="item-price">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                  </div>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.title}`}
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="cart-actions">
                <Link to="/shop">← Continue Shopping</Link>

                <button type="button" onClick={clearCart}>
                  Clear Cart
                </button>
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

                <button type="button">Apply</button>
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Total</span>

                <strong>${total.toFixed(2)}</strong>
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
        )}
      </section>
    </main>
  );
}

export default Cart;
