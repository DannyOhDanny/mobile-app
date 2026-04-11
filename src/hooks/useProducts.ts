import { useEffect, useState, useCallback } from 'react';
import {
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories
} from '../api/products';
import type { Product } from '../types/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await fetchCategories();
        setCategories(['All', ...cats]);
      } catch (err) {
        console.error(err);
      }
    };
    loadCategories();
  }, []);

  const loadProducts = useCallback(async (category: string) => {
    setLoading(true);
    try {
      let data: Product[];
      if (!category || category === 'All') {
        data = await fetchProducts(30);
      } else {
        data = await fetchProductsByCategory(category);
      }
      setProducts(data);
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts('');
  }, [loadProducts]);

  const handleCategoryChange = useCallback(
    (category: string) => {
      setActiveCategory(category.toLocaleLowerCase());
      loadProducts(category);
      setSearchTerm('');
    },
    [loadProducts]
  );

  const filteredBySearch = searchTerm.trim()
    ? products.filter(
        p =>
          p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.brand?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return {
    products: filteredBySearch,
    loading,
    categories,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory: handleCategoryChange
  };
};
