import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
