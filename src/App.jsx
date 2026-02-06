import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container min-h-screen flex flex-col">
          <Navbar />
          <main className="main-content flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
