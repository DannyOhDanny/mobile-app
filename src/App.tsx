import { HashRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';
import { Cart } from './pages/Cart/Cart';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
