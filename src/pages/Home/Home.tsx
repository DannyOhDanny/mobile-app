import { useProducts } from '../../hooks/useProducts';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loader } from '../../components/Loader/Loader';
import styles from './Home.module.css';

export const Home = () => {
  const {
    products,
    loading,
    categories,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory
  } = useProducts();

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Shop online</h1>
        <p>Your trusted online marketplace for quality goods worldwide</p>
      </div>

      <div className={styles.controls}>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search by brand or product name..."
        />
        <div className={styles.categoriesWrapper}>
          <div className={styles.categories}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : products.length === 0 ? (
        <div className={styles.empty}>No items found 😔</div>
      ) : (
        <div className={styles.grid}>
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
