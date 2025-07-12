import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/Product";

interface SaleSectionProps {
  products: Product[];
}

const SaleSection: React.FC<SaleSectionProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight text-red-600">
            SALE
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Limited time offers on premium pieces - Up to 40% off
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Sale Badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold tracking-wide rounded">
                  SALE
                </span>

                {/* Discount Percentage */}
                {product.originalPrice && (
                  <span className="absolute top-3 right-3 bg-black text-white px-2 py-1 text-xs font-bold tracking-wide rounded">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
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
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {product.category}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-red-600">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
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

export default SaleSection;
