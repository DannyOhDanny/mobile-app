import { Link } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import styles from './Cart.module.css';

export const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <ShoppingBag
          size={48}
          className={styles.emptyIcon}
          style={{ margin: '0 auto' }}
        />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items yet.</p>
        <Link to="/catalog" className={styles.shopBtn}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.items}>
          {items.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.image}
              />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p className={styles.price}>${item.price}</p>
                <div className={styles.quantity}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeBtn}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className={styles.itemTotal}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>
              Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
