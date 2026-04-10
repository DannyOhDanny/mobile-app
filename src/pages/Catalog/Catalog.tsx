import { useState, useEffect } from 'react';
import { Filter, Grid3x3, List, X } from 'lucide-react';
import { useProducts } from '../../hooks/useProducts';
import { Card } from '../../components/Card/Card';
import styles from './Catalog.module.css';

export const Catalog = () => {
  const { products, loading, categories, activeCategory, setActiveCategory } =
    useProducts();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<
    'default' | 'price_asc' | 'price_desc' | 'rating'
  >('default');
  const [visibleCount, setVisibleCount] = useState(12);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    const saved = localStorage.getItem('catalog_view_mode');
    return saved === 'grid' || saved === 'list' ? saved : 'grid';
  });

  useEffect(() => {
    localStorage.setItem('catalog_view_mode', viewMode);
  }, [viewMode]);

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const filteredProducts = products
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setSortBy('default');
    setActiveCategory('');
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.controls}>
        <button
          className={styles.filterBtn}
          onClick={() => setIsFilterOpen(true)}>
          <Filter size={20} />
          <span>Filters</span>
          {(priceRange[0] > 0 ||
            priceRange[1] < 2000 ||
            sortBy !== 'default' ||
            activeCategory) && <span className={styles.filterBadge} />}
        </button>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => handleViewModeChange('grid')}>
            <Grid3x3 size={20} />
          </button>
          <button
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => handleViewModeChange('list')}>
            <List size={20} />
          </button>
        </div>
      </div>

      {isFilterOpen && (
        <div
          className={styles.filterOverlay}
          onClick={() => setIsFilterOpen(false)}
        />
      )}
      <div
        className={`${styles.filterDrawer} ${isFilterOpen ? styles.open : ''}`}>
        <div className={styles.filterHeader}>
          <h3>Filters</h3>
          <button onClick={() => setIsFilterOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.filterContent}>
          <div className={styles.filterGroup}>
            <label>Category</label>
            <select
              value={activeCategory || ''}
              onChange={e => setActiveCategory(e.target.value || '')}
              className={styles.select}>
              <option value="">All categories</option>
              {categories
                .filter(c => c !== 'Все')
                .map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>
              Цена: ${priceRange[0]} — ${priceRange[1]}
            </label>
            <div className={styles.priceRange}>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[0]}
                onChange={e =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={e =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </div>
          </div>
          <div className={styles.filterGroup}>
            <label>Sorting</label>
            <select
              value={sortBy}
              onChange={e =>
                setSortBy(
                  e.target.value as
                    | 'default'
                    | 'price_asc'
                    | 'price_desc'
                    | 'rating'
                )
              }
              className={styles.select}>
              <option value="default">By default</option>
              <option value="price_asc">Price: min</option>
              <option value="price_desc">Price: max</option>
              <option value="rating">By rating</option>
            </select>
          </div>
          <button className={styles.resetBtn} onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard} />
          ))}
        </div>
      ) : (
        <>
          <div className={`${styles.results} ${styles[viewMode]}`}>
            {displayedProducts.map(product => (
              <Card key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
          {hasMore && (
            <button className={styles.loadMore} onClick={loadMore}>
              More
            </button>
          )}
          {displayedProducts.length === 0 && (
            <div className={styles.empty}>No items found 😔</div>
          )}
        </>
      )}
    </div>
  );
};
