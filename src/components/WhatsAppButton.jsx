const WhatsAppButton = () => {
  const handleWhatsAppChat = () => {
    const message = "Hello, I'm interested in products from Matoshree Agro Agencies.";
    const whatsappUrl = `https://wa.me/919130061948?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      className="whatsapp-button fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        className="whatsapp-icon w-6 h-6" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
      
      {/* Tooltip */}
      <span className="whatsapp-tooltip absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
        <span className="tooltip-arrow absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></span>
      </span>
    </button>
  );
};

export default WhatsAppButton;
