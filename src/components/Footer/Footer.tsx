import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Your genuine shopping experience</p>
        <p className={styles.copy}>MarketFlow © 2024</p>
      </div>
    </footer>
  );
};
