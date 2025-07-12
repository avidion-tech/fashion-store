
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/Product';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title = "NEW ARRIVALS",
  subtitle = "Discover our latest collection of premium fashion pieces"
}) => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4 rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium tracking-wide">
                    NEW
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-medium tracking-wide">
                    SALE
                  </span>
                )}
                
                {/* Hover Image */}
                {/* {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )} */}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.subcategory || product.category}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
