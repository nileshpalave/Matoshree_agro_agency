import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="All Products"
          marathiTitle="सर्व उत्पादने"
          subtitle="Quality agricultural inputs for better farming"
        />

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-agro-green text-white'
                    : 'bg-white text-gray-700 hover:bg-agro-lighter border border-gray-300'
                }`}
              >
                <span className="text-marathi">{category.marathiName}</span>
                <span className="mx-1">•</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No products found in this category.
            </div>
            <button
              onClick={() => handleCategoryChange('all')}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Products Count */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-8 text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
