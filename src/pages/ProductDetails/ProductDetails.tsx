import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { fetchProductById } from '../../api/products';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/products';
import styles from './ProductDetails.module.css';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await fetchProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.skeleton}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent} />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <p>{error || 'Product not found'}</p>
          <button onClick={() => navigate('/')}>Back to shop</button>
        </div>
      </div>
    );
  }

  const fullStars = Math.floor(product.rating);

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <ArrowLeft size={20} /> Back
      </button>

      <div className={styles.product}>
        <div className={styles.imageWrapper}>
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p className={styles.brand}>{product.brand}</p>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < fullStars ? '#fbbf24' : 'none'}
                  color={i < fullStars ? '#fbbf24' : '#cbd5e1'}
                />
              ))}
            </div>
            <span className={styles.ratingValue}>{product.rating}</span>
          </div>
          <div className={styles.price}>
            ${product.price}
            {product.discountPercentage > 0 && (
              <span className={styles.discount}>
                -{product.discountPercentage}%
              </span>
            )}
          </div>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.meta}>
            <span>Category: {product.category}</span>
            <span>Stock: {product.stock} items</span>
          </div>
          <button className={styles.cartBtn} onClick={() => addToCart(product)}>
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
