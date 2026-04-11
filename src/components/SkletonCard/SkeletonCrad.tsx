import styles from './SkeletonCard.module.css';

export const SkeletonCard = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.title} />
        <div className={styles.brand} />
        <div className={styles.footer}>
          <div className={styles.price} />
          <div className={styles.button} />
        </div>
      </div>
    </div>
  );
};
