import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const handleGoogleMaps = () => {
    const mapsUrl = "https://maps.google.com/?q=Matoshree+Agro+Agencies+Mandve+Giravi+Solapur";
    window.open(mapsUrl, '_blank');
  };

  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to know more about Matoshree Agro Agencies.";
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Matoshree Agro Agencies"
          marathiTitle="मतोश्री अग्रो एजन्सीविषयी"
          centered={true}
        />

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-agro-green rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                MA
              </div>
              <h2 className="text-2xl font-bold text-agro-green mb-4">Matoshree Agro Agencies</h2>
              <p className="text-gray-600 text-lg">
                Shop No 1, Mandve, Giravi, Solapur, Maharashtra 413111
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-marathi">
                मतोश्री अग्रो एजन्सी ही मांडवे, गिरावी, सोलापूर येथे स्थित एक विश्वसनीय कृषि इनपुट पुरवठादार आहे. 
                आम्ही शेतकऱ्यांना दर्जेदार खते, कीटकनाशक, बुरशीनाशक, वनस्पतीनाशक आणि वनस्पती वाढ प्रवर्तक 
                पुरवतो. आमचा मुख्य उद्देश शेतकऱ्यांना योग्य मार्गदर्शन देऊन त्यांचे उत्पादन वाढवणे आणि आर्थिक 
                स्थिती सुधारणे आहे.
              </p>

              <p className="text-gray-700 mb-6">
                Matoshree Agro Agencies is a trusted agricultural input supplier located in Mandve, Giravi, Solapur. 
                We provide farmers with quality fertilizers, insecticides, fungicides, weedicides, and plant growth promoters. 
                Our main objective is to increase farmers' yields and improve their financial condition by providing proper guidance.
              </p>

              <h3 className="text-xl font-bold text-agro-green mb-4">Our Experience</h3>
              <p className="text-gray-700 mb-6">
                With years of experience in agro advisory services, we understand the specific needs of farmers in the Solapur region. 
                Our team is well-versed with local soil conditions, climate patterns, and crop requirements. We provide personalized 
                recommendations based on soil testing, water availability, and crop selection.
              </p>

              <h3 className="text-xl font-bold text-agro-green mb-4">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-agro-green">Soil Testing & Analysis</h4>
                    <p className="text-gray-600 text-sm">Comprehensive soil health assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-agro-green">Crop-Specific Guidance</h4>
                    <p className="text-gray-600 text-sm">Tailored solutions for each crop</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-agro-green">Quality Products</h4>
                    <p className="text-gray-600 text-sm">Genuine and branded agricultural inputs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-agro-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-agro-green">WhatsApp Support</h4>
                    <p className="text-gray-600 text-sm">Easy ordering and quick assistance</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-agro-green mb-4">Serving Farmers Around Solapur</h3>
              <p className="text-gray-700 mb-6 text-marathi">
                आम्ही सोलापूर जिल्ह्यातील शेतकऱ्यांना गेली अनेक वर्ष सेवा देत आहोत. मांडवे, गिरावी आणि आसपासच्या गावांतील 
                शेतकरी आमच्या दर्जेदार उत्पादनांसाठी आणि विश्वसनीय सेवेंसाठी आम्हाला ओळखतात. आमचे ग्राहक आमच्या 
                प्रामाणिकपणाचे आणि उत्तम सेवेचे कौतुक करतात.
              </p>

              <p className="text-gray-700 mb-6">
                We have been serving farmers in the Solapur district for many years. Farmers from Mandve, Giravi, and 
                surrounding villages recognize us for our quality products and reliable service. Our customers appreciate 
                our honesty and excellent service.
              </p>

              <h3 className="text-xl font-bold text-agro-green mb-4">Trust and Guidance Focus</h3>
              <p className="text-gray-700">
                At Matoshree Agro Agencies, we believe in building long-term relationships with farmers based on trust, 
                transparency, and mutual growth. Our guidance focuses on sustainable farming practices that improve soil health 
                and increase productivity while being environmentally conscious.
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-agro-green mb-4">Visit Our Shop</h3>
              <p className="text-gray-600 mb-4">
                Come visit us for personalized agricultural guidance and quality products.
              </p>
              <button 
                onClick={handleGoogleMaps}
                className="btn-secondary w-full"
              >
                Get Directions
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-agro-green mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Have questions? Reach out to us via WhatsApp for quick assistance.
              </p>
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
              >
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-agro-green mb-4 text-center">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/products" 
                className="text-center p-4 bg-agro-lighter rounded-lg hover:bg-agro-light transition-colors"
              >
                <svg className="w-8 h-8 text-agro-green mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span className="text-sm font-medium">Products</span>
              </Link>
              
              <Link 
                to="/contact" 
                className="text-center p-4 bg-agro-lighter rounded-lg hover:bg-agro-light transition-colors"
              >
                <svg className="w-8 h-8 text-agro-green mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm font-medium">Contact</span>
              </Link>
              
              <button 
                onClick={handleWhatsAppContact}
                className="text-center p-4 bg-agro-lighter rounded-lg hover:bg-agro-light transition-colors"
              >
                <svg className="w-8 h-8 text-agro-green mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
              
              <button 
                onClick={handleGoogleMaps}
                className="text-center p-4 bg-agro-lighter rounded-lg hover:bg-agro-light transition-colors"
              >
                <svg className="w-8 h-8 text-agro-green mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Maps</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
