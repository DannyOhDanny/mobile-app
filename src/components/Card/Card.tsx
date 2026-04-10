import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/products';
import styles from './Card.module.css';

interface CardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const Card = ({ product, viewMode = 'grid' }: CardProps) => {
  const { addToCart } = useCart();
  const {
    thumbnail,
    title,
    price,
    rating,
    brand,
    discountPercentage = 0
  } = product;

  const hasDiscount = discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? (price * (1 - discountPercentage / 100)).toFixed(2)
    : price;
  const originalPrice = hasDiscount ? price : null;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} size={14} fill="currentColor" color="#fbbf24" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            size={14}
            fill="none"
            color="#fbbf24"
            strokeWidth={1.5}
          />
        );
      } else {
        stars.push(<Star key={i} size={14} fill="none" color="#cbd5e1" />);
      }
    }
    return stars;
  };

  if (viewMode === 'list') {
    return (
      <div className={`${styles.card} ${styles.listCard}`}>
        {hasDiscount && (
          <div className={styles.discountBadge}>-{discountPercentage}%</div>
        )}
        <div className={styles.listImage}>
          <img src={thumbnail} alt={title} loading="lazy" />
        </div>
        <div className={styles.listContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.brand}>{brand}</p>
          <div className={styles.priceRating}>
            <div className={styles.priceBlock}>
              {hasDiscount ? (
                <>
                  <span className={styles.discountedPrice}>
                    ${discountedPrice}
                  </span>
                  <span className={styles.originalPrice}>${originalPrice}</span>
                </>
              ) : (
                <span className={styles.price}>${price}</span>
              )}
            </div>
            <div className={styles.ratingBlock}>
              <div className={styles.stars}>{renderStars()}</div>
              <span className={styles.ratingValue}>{rating}</span>
            </div>
          </div>
          <button
            className={styles.listCartBtn}
            onClick={() => addToCart(product)}>
            <ShoppingCart size={18} /> Add
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.card}>
      {hasDiscount && (
        <div className={styles.discountBadge}>-{discountPercentage}%</div>
      )}
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={title} loading="lazy" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.brand}>{brand}</p>
        <div className={styles.footer}>
          <div className={styles.priceRating}>
            <div className={styles.priceBlock}>
              {hasDiscount ? (
                <>
                  <span className={styles.discountedPrice}>
                    ${discountedPrice}
                  </span>
                  <span className={styles.originalPrice}>${originalPrice}</span>
                </>
              ) : (
                <span className={styles.price}>${price}</span>
              )}
            </div>
            <div className={styles.ratingBlock}>
              <div className={styles.stars}>{renderStars()}</div>
              <span className={styles.ratingValue}>{rating}</span>
            </div>
          </div>
          <button
            className={styles.cartBtn}
            onClick={() => addToCart(product)}
            aria-label="add to cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};
