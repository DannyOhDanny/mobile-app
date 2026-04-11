import { useState } from 'react';
import { Menu, X, Sparkles, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Sparkles size={28} color="#6366f1" />
          <span>
            Market<span className={styles.accent}>Flow</span>
          </span>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }>
                Main
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <NavLink to="/cart" className={styles.cartLink}>
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </NavLink>
          <button
            className={styles.burger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={() => setIsMenuOpen(false)}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={() => setIsMenuOpen(false)}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={() => setIsMenuOpen(false)}>
                Cart ({totalItems})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
