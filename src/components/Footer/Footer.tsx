import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.brand}>
              Market<span className={styles.accent}>Flow</span>
            </h3>
            <p className={styles.description}>
              Your genuine shopping experience. Quality products, fast delivery,
              and secure payments.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Shop</h4>
            <ul className={styles.list}>
              <li>
                <span className={styles.link}>All Products</span>
              </li>
              <li>
                <span className={styles.link}>Categories</span>
              </li>
              <li>
                <span className={styles.link}>New Arrivals</span>
              </li>
              <li>
                <span className={styles.link}>Best Sellers</span>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Support</h4>
            <ul className={styles.list}>
              <li>
                <span className={styles.link}>Help Center</span>
              </li>
              <li>
                <span className={styles.link}>Returns & Refunds</span>
              </li>
              <li>
                <span className={styles.link}>Shipping Info</span>
              </li>
              <li>
                <span className={styles.link}>FAQs</span>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={16} />
                <span>support@marketflow.com</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>123 Commerce St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Your genuine shopping experience</p>
          <p className={styles.copyright}>MarketFlow © 2024</p>
        </div>
      </div>
    </footer>
  );
};
