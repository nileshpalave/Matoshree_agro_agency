import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const displayTestimonials = testimonials.slice(0, 3);

  const handleWhatsAppOrder = () => {
    const message = "Hello, I want to place an order with Matoshree Agro Agencies.";
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleMaps = () => {
    const mapsUrl = "https://maps.google.com/?q=Matoshree+Agro+Agencies+Mandve+Giravi+Solapur";
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agro-lighter to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Main Hero Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green mb-6 text-marathi">
                उच्च दर्जाचे Fertilizers for Better Crop Yield
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Mandve, Giravi, Solapur - Your trusted partner for quality agricultural inputs
              </p>
              <p className="text-gray-600 mb-8">
                Providing premium quality Fertilizers, Water Soluble Fertilizers, Insecticides, 
                Fungicides, Weedicides, and Plant Growth Promoters with expert guidance for 
                maximum crop yield.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Genuine & Branded Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Soil & Crop Specific Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">WhatsApp वरून सोपी Order प्रक्रिया</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products" 
                  className="btn-primary text-center"
                >
                  Shop Products
                </Link>
                <button 
                  onClick={handleWhatsAppOrder}
                  className="btn-secondary text-center"
                >
                  WhatsApp Order
                </button>
              </div>
            </div>

            {/* Highlights Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-agro-green mb-2">Healthy Crop Canopy</h3>
                  <p className="text-sm text-gray-600 text-marathi">
                    योग्य अन्नद्रव्यांमुळे आरोग्यदायी पिके आणि चांगले उत्पादन
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-agro-green mb-2">Solapur Climate Ready</h3>
                  <p className="text-sm text-gray-600 text-marathi">
                    सोलापूरच्या हवामानानुसार उत्तम उत्पादने
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-agro-green mb-2">40+ Products</h3>
                  <p className="text-sm text-gray-600">
                    Fertilizers & Agro Inputs
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-agro-green mb-2">Multi-Crop Support</h3>
                  <p className="text-sm text-gray-600">
                    Cereals • Oilseeds • Horticulture
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-agro-green mb-2">WhatsApp सेवा</h3>
                  <p className="text-sm text-gray-600">
                    Orders • Photos • Queries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            marathiTitle="फीचर्ड प्रॉडक्ट्स"
            subtitle="लोकप्रिय उत्पादने - मागणीत असलेली उत्पादने"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products" 
              className="btn-primary inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            marathiTitle="शेतकऱ्यांचा विश्वास"
            subtitle="विश्वासू ग्राहकांचे अनुभव"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-agro-lighter">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Matoshree Agro Agencies?"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-agro-green mb-2">
                  Shop No 1, Matoshree Agro Agencies
                </h3>
                <p className="text-gray-600">
                  Mandve, Giravi, Solapur, Maharashtra 413111
                </p>
                <p className="text-agro-green font-semibold mt-2">
                  Serving Farmers in and around Solapur
                </p>
              </div>
              
              <div className="text-gray-700 text-center text-marathi">
                <p className="mb-4">
                  आम्ही शेतकऱ्यांना त्यांच्या शेतजमिनी, पाण्याच्या उपलब्धता, हवामान आणि पिकांनुसार 
                  योग्य मार्गदर्शन देतो. यामध्ये इनपुट प्लॅनिंग, माती चाचणी, खते, सूक्ष्म पोषकद्रव्ये, 
                  वनस्पती वाढ प्रवर्तक आणि पिक संरक्षण वेळापत्रकाचा समावेश असतो.
                </p>
                <p className="text-sm text-gray-600">
                  We provide farmers with proper guidance based on their soil type, water availability, 
                  climate and crops. This includes input planning, soil testing, fertilizers, micronutrients, 
                  plant growth promoters and crop protection schedules.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="btn-primary text-center"
              >
                Read Our Story
              </Link>
              <button 
                onClick={handleGoogleMaps}
                className="btn-secondary text-center"
              >
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
