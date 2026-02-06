const SectionTitle = ({ title, subtitle, marathiTitle, centered = false }) => {
  return (
    <div className={`section-title mb-8 ${centered ? 'section-title--centered text-center' : ''}`}>
      {marathiTitle && (
        <h2 className="section-title__marathi text-3xl md:text-4xl font-bold text-agro-green mb-2 text-marathi">
          {marathiTitle}
        </h2>
      )}
      {title && (
        <h2 className="section-title__english text-2xl md:text-3xl font-bold text-agro-green mb-2">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="section-title__subtitle text-gray-600 text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
