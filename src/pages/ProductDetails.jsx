import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order ${product.name} (${product.unit}) from मातोश्री.`;
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Show success feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.classList.add('bg-green-600');
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-600');
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-agro-green hover:text-agro-light">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/products" className="text-agro-green hover:text-agro-light">
                Products
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy0zMiBoLTMyIHRleHQtYWdyby1ncmVlbiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBkPSJNCAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg0em0xMiAxMkg0bDQtOCAzIDYgMi00IDMgNnoiIGNsaXBSdWxlPSJldmVub2RkIiAvPjwvc3ZnPg==';
                }}
              />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-agro-light text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                  {product.category}
                </span>
                {product.bestSeller && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Seller
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-agro-green mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-agro-green">₹{product.price}</span>
                <span className="text-gray-500 text-lg ml-2">/{product.unit}</span>
              </div>

              {/* Descriptions */}
              <div className="mb-6">
                <p className="text-gray-700 text-lg mb-3">
                  {product.description}
                </p>
                <p className="text-gray-600 text-marathi">
                  {product.marathiDescription}
                </p>
              </div>

              {/* Usage Information */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-agro-green mb-2">Usage Guidance</h3>
                <p className="text-gray-700">
                  {product.usage}
                </p>
              </div>

              {/* Application Rate */}
              <div className="mb-6">
                <h3 className="font-bold text-lg text-agro-green mb-2">Application Rate</h3>
                <p className="text-gray-700">
                  {product.applicationRate}
                </p>
              </div>

              {/* Supported Crops */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-agro-green mb-2">Supported Crops</h3>
                <div className="flex flex-wrap gap-2">
                  {product.crops.map((crop, index) => (
                    <span 
                      key={index}
                      className="bg-agro-lighter text-agro-green px-3 py-1 rounded-full text-sm"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  WhatsApp Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-xl text-agro-green mb-4">Product Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-agro-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">High quality formulation for maximum effectiveness</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-agro-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Suitable for Solapur climate conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-agro-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Expert guidance available</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-xl text-agro-green mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              Our agricultural experts are here to help you choose the right products for your crops.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Phone/WhatsApp:</strong> 9130061948
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> Shop No 1, Matoshree Agro Agencies, Mandve, Giravi, Solapur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
