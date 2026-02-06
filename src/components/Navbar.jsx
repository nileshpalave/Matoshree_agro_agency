import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="site-top-bar bg-agro-green text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="site-contact-info flex flex-wrap gap-4 items-center">
            <span className="contact-item flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Mandve, Giravi, Solapur
            </span>
            <span className="contact-item flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              9130061948
            </span>
            <span className="contact-item flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              WhatsApp: 9130061948
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="site-navigation bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="nav-header flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="nav-logo flex items-center gap-2">
              <div className="logo-icon w-10 h-10 bg-agro-green rounded-full flex items-center justify-center text-white font-bold">
                MA
              </div>
              <span className="logo-text font-bold text-xl text-agro-green">Matoshree Agro Agencies</span>
            </Link>

            {/* Desktop Menu */}
            <div className="nav-menu-desktop hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={`nav-link font-medium transition-colors ${isActive('/') ? 'nav-link--active text-agro-green' : 'text-gray-700 hover:text-agro-green'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link font-medium transition-colors ${isActive('/about') ? 'nav-link--active text-agro-green' : 'text-gray-700 hover:text-agro-green'}`}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className={`nav-link font-medium transition-colors ${isActive('/products') || isActive('/products/') ? 'nav-link--active text-agro-green' : 'text-gray-700 hover:text-agro-green'}`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link font-medium transition-colors ${isActive('/contact') ? 'nav-link--active text-agro-green' : 'text-gray-700 hover:text-agro-green'}`}
              >
                Contact
              </Link>
              <button className="nav-cart-button bg-agro-light text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Cart
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="nav-mobile-toggle md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="nav-menu-mobile md:hidden py-4 border-t">
              <div className="nav-menu-mobile__list flex flex-col gap-3">
                <Link 
                  to="/" 
                  className={`nav-link-mobile font-medium px-2 py-1 rounded ${isActive('/') ? 'nav-link-mobile--active bg-agro-lighter text-agro-green' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`nav-link-mobile font-medium px-2 py-1 rounded ${isActive('/about') ? 'nav-link-mobile--active bg-agro-lighter text-agro-green' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/products" 
                  className={`nav-link-mobile font-medium px-2 py-1 rounded ${isActive('/products') || isActive('/products/') ? 'nav-link-mobile--active bg-agro-lighter text-agro-green' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/contact" 
                  className={`nav-link-mobile font-medium px-2 py-1 rounded ${isActive('/contact') ? 'nav-link-mobile--active bg-agro-lighter text-agro-green' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className="nav-cart-button-mobile bg-agro-light text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
