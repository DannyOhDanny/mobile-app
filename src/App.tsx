import { HashRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Catalog } from './pages/Catalog/Catalog';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
