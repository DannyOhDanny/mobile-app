import axios from 'axios';
import type { Product } from '../types/products';

const API_BASE = 'https://dummyjson.com';

export const fetchProducts = async (limit = 30): Promise<Product[]> => {
  const res = await axios.get(
    `${API_BASE}/products?limit=${limit}&select=title,description,price,rating,thumbnail,category,brand`
  );
  return res.data.products;
};

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await axios.get(
    `${API_BASE}/products/category/${encodeURIComponent(category)}?select=title,description,price,rating,thumbnail,category,brand`
  );
  return res.data.products;
};

export const fetchCategories = async (): Promise<string[]> => {
  const res = await axios.get<{ slug: string; name: string; url: string }[]>(
    `${API_BASE}/products/categories`
  );
  return res.data.map(cat => cat.name);
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get(`${API_BASE}/products/${id}`);
  return res.data;
};
