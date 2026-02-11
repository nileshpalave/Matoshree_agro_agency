import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hello, I want to order ${product.name} from मातोश्री.`;
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    // Show success message
    const button = e.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.classList.add('bg-green-600');
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-600');
    }, 1500);
  };

  return (
    <div className="product-card card group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <Link to={`/products/${product.id}`}>
        <div className="product-card__body p-4">
          {/* Category Badge and Best Seller */}
          <div className="product-card__header flex justify-between items-start mb-3">
            <span className="product-category bg-agro-light text-white text-xs px-2 py-1 rounded-full uppercase font-semibold">
              {product.category}
            </span>
            {product.bestSeller && (
              <span className="product-badge product-badge--bestseller bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Best Seller
              </span>
            )}
          </div>

          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image w-full h-40 object-cover rounded-lg mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy0xNiBoLTE2IHRleHQtYWdyby1ncmVlbiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBkPSJNNCAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg0em0xMiAxMkg0bDQtOCAzIDYgMi00IDMgNnoiIGNsaXBSdWxlPSJldmVub2RkIiAvPjwvc3ZnPg==';
            }}
          />

          {/* Product Name */}
          <h3 className="product-name font-bold text-lg text-agro-green mb-2 group-hover:text-agro-light transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="product-description text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          
          {/* Marathi Description */}
          <p className="product-description-marathi text-gray-500 text-sm mb-3 line-clamp-2 text-marathi">
            {product.marathiDescription}
          </p>

          {/* Price */}
          <div className="product-price flex items-center justify-between mb-4">
            <div className="price-container">
              <span className="price-amount text-2xl font-bold text-agro-green">₹{product.price}</span>
              <span className="price-unit text-gray-500 text-sm ml-2">/{product.unit}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions flex gap-2">
            <button 
              onClick={handleAddToCart}
              className="btn-add-cart flex-1 bg-agro-green text-white py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleWhatsAppOrder}
              className="btn-whatsapp flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              WhatsApp
            </button>
          </div>

          {/* View Details Link */}
          <div className="product-details-link mt-3 text-center">
            <span 
              className="link-view-details text-agro-green hover:text-agro-light font-medium text-sm transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = `/products/${product.id}`;
              }}
            >
              View details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
