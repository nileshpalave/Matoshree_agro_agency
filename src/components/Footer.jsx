import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer bg-agro-green text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Matoshree Agro Agencies Section */}
          <div className="footer-section footer-section--about">
            <h3 className="footer-title text-xl font-bold mb-4">Matoshree Agro Agencies</h3>
            <ul className="footer-links footer-links--products space-y-2 text-sm">
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>खते (Fertilizers)</span>
              </li>
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>द्रावणीय खते (Water Soluble Fertilizers)</span>
              </li>
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>कीटकनाशक (Insecticides)</span>
              </li>
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>बुरशीनाशक (Fungicides)</span>
              </li>
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>वनस्पतीनाशक (Weedicides)</span>
              </li>
              <li className="footer-link-item flex items-center gap-2">
                <span className="link-bullet text-agro-light">•</span>
                <span>वनस्पती वाढ प्रवर्तक (Plant Growth Promoters)</span>
              </li>
            </ul>
            <p className="footer-tagline mt-4 text-sm text-agro-lighter">
              दर्जेदार उत्पादने आणि विश्वसनीय मार्गदर्शन
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-section--links">
            <h3 className="footer-title text-xl font-bold mb-4">Quick Links</h3>
            <ul className="footer-links footer-links--quick space-y-2">
              <li className="footer-link-item">
                <Link to="/" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/cart" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/checkout" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  Checkout
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact" className="footer-link text-agro-lighter hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-section--contact">
            <h3 className="footer-title text-xl font-bold mb-4">Contact</h3>
            <div className="contact-info space-y-3 text-sm">
              <div className="contact-item contact-item--phone flex items-center gap-2">
                <svg className="w-4 h-4 text-agro-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="contact-details">
                  <p className="contact-label">Mobile / WhatsApp</p>
                  <p className="contact-value font-semibold">9130061948</p>
                </div>
              </div>
              
              <div className="contact-item contact-item--address flex items-start gap-2">
                <svg className="w-4 h-4 text-agro-light mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="contact-details">
                  <p className="contact-label">Address</p>
                  <p className="contact-address text-agro-lighter">
                    Shop No 1, Matoshree Agro Agencies,<br />
                    Mandve, Giravi, Solapur,<br />
                    Maharashtra 413111
                  </p>
                </div>
              </div>

              <div className="contact-action pt-2">
                <a 
                  href="https://maps.google.com/?q=Matoshree+Agro+Agencies+Mandve+Giravi+Solapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-link inline-flex items-center gap-2 bg-agro-light text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom border-t border-agro-light mt-8 pt-6 text-center">
          <p className="copyright text-sm text-agro-lighter">
            © {currentYear} Matoshree Agro Agencies. All rights reserved.
          </p>
          <p className="tagline text-xs text-agro-lighter mt-2">
            Designed for farmers. Made in Maharashtra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
