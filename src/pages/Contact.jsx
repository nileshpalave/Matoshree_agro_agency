import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to inquire about products at Matoshree Agro Agencies.";
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+919130061948', '_self');
  };

  const handleGoogleMaps = () => {
    const mapsUrl = "https://maps.google.com/?q=Matoshree+Agro+Agencies+Mandve+Giravi+Solapur";
    window.open(mapsUrl, '_blank');
  };

  const handleEmailContact = () => {
    window.open('mailto:info@matoshreeagroagencies.com', '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Us"
          marathiTitle="आमच्याशी संपर्क साधा"
          subtitle="Get in touch with Matoshree Agro Agencies for quality agricultural products and expert guidance"
          centered={true}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone/WhatsApp Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-agro-green">Phone / WhatsApp</h3>
                    <p className="text-gray-600">Call or message us anytime</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-agro-green">9130061948</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={handlePhoneCall}
                        className="bg-agro-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call
                      </button>
                      <button 
                        onClick={handleWhatsAppContact}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-agro-lighter rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-agro-green">Shop Address</h3>
                    <p className="text-gray-600">Visit us at our store</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <address className="text-gray-700 not-italic">
                    <strong>Matoshree Agro Agencies</strong><br />
                    Shop No 1, Mandve, Giravi<br />
                    Solapur, Maharashtra 413111<br />
                    India
                  </address>
                  <button 
                    onClick={handleGoogleMaps}
                    className="w-full bg-agro-light text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Get Directions on Google Maps
                  </button>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-agro-lighter rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-agro-green">Business Hours</h3>
                    <p className="text-gray-600">When you can visit us</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Saturday</span>
                    <span className="font-medium text-agro-green">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium text-agro-green">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-3 p-3 bg-agro-lighter rounded-lg">
                    <p className="text-sm text-agro-green font-medium text-marathi">
                      आणखी माहितीसाठी कृपया आधी फोन करा
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Please call before visiting for more information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Additional Info */}
            <div className="space-y-6">
              {/* Quick Contact Options */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg text-agro-green mb-4">Quick Contact Options</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={handleWhatsAppContact}
                    className="flex items-center gap-3 p-4 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-green-600">WhatsApp</div>
                      <div className="text-sm text-gray-600">Fast response for orders and queries</div>
                    </div>
                  </button>

                  <button 
                    onClick={handlePhoneCall}
                    className="flex items-center gap-3 p-4 border-2 border-agro-green rounded-lg hover:bg-agro-lighter transition-colors group"
                  >
                    <div className="w-10 h-10 bg-agro-green rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-agro-green">Phone Call</div>
                      <div className="text-sm text-gray-600">Direct conversation with experts</div>
                    </div>
                  </button>

                  <button 
                    onClick={handleGoogleMaps}
                    className="flex items-center gap-3 p-4 border-2 border-agro-light rounded-lg hover:bg-agro-lighter transition-colors group"
                  >
                    <div className="w-10 h-10 bg-agro-light rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-agro-light">Visit Store</div>
                      <div className="text-sm text-gray-600">See products in person</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Services Offered */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg text-agro-green mb-4">Our Products & Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Fertilizers (खते)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Water Soluble Fertilizers (द्रावणीय खते)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Insecticides (कीटकनाशक)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Fungicides (बुरशीनाशक)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Weedicides (वनस्पतीनाशक)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-agro-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Plant Growth Promoters (वनस्पती वाढ प्रवर्तक)</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-agro-green text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Need Urgent Assistance?</h3>
                <p className="text-agro-lighter mb-4">
                  For urgent agricultural advice or product requirements, don't hesitate to reach out to us immediately.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handlePhoneCall}
                    className="bg-white text-agro-green px-4 py-2 rounded-lg font-semibold hover:bg-agro-lighter transition-colors"
                  >
                    Call Now
                  </button>
                  <button 
                    onClick={handleWhatsAppContact}
                    className="bg-agro-light text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
