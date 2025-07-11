import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductFilters from '@/components/ProductFilters';
import Cart from '@/components/Cart';
import { 
  getProductsByCategory, 
  getNewArrivals, 
  getSaleItems, 
  getSubcategories,
  filterProducts,
  sortProducts
} from '@/data/products';
import { Product, CartItem } from '@/types/Product';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  console.log('CategoryPage - Current category:', category);
  
  // State for filters and cart
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Get products based on category
  const allProducts = useMemo(() => {
    if (!category) return [];
    
    console.log('Getting products for category:', category);
    
    let products = [];
    switch (category) {
      case 'new':
        products = getNewArrivals();
        break;
      case 'sale':
        products = getSaleItems();
        break;
      default:
        products = getProductsByCategory(category);
        break;
    }
    
    console.log('Found products:', products.length);
    return products;
  }, [category]);

  // Get subcategories for the current category
  const subcategories = useMemo(() => {
    if (!category) return [];
    const subs = getSubcategories(category);
    console.log('Subcategories for', category, ':', subs);
    return subs;
  }, [category]);

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = filterProducts(allProducts, {
      subcategory: selectedSubcategory,
      priceRange: selectedPriceRange,
      size: selectedSize,
      color: selectedColor
    });
    
    console.log('Filtered products:', filtered.length);
    return sortProducts(filtered, sortBy);
  }, [allProducts, selectedSubcategory, selectedPriceRange, selectedSize, selectedColor, sortBy]);

  // Cart functions
  const handleAddToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.product.id === item.product.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }

    toast({
      title: "Added to cart",
      description: `${item.product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Redirecting to checkout... (Demo)",
    });
  };

  const handleClearFilters = () => {
    setSelectedSubcategory('');
    setSelectedPriceRange('');
    setSelectedSize('');
    setSelectedColor('');
  };

  const handleProductClick = (product: Product) => {
    console.log('Navigating to product:', product.id);
    navigate(`/product/${product.id}`);
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 'women':
        return "Women's Collection";
      case 'men':
        return "Men's Collection";
      case 'accessories':
        return 'Accessories';
      case 'new':
        return 'New Arrivals';
      case 'sale':
        return 'Sale';
      default:
        return 'Products';
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Category Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light mb-4 tracking-tight">{getCategoryTitle()}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium pieces
          </p>
        </div>
      </div>

      {/* Filters */}
      <ProductFilters
        category={category}
        subcategories={subcategories}
        selectedSubcategory={selectedSubcategory}
        selectedPriceRange={selectedPriceRange}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        sortBy={sortBy}
        onSubcategoryChange={setSelectedSubcategory}
        onPriceRangeChange={setSelectedPriceRange}
        onSizeChange={setSelectedSize}
        onColorChange={setSelectedColor}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
      />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or browse all products</p>
            <button
              onClick={handleClearFilters}
              className="text-blue-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
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
                      <span className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 text-xs font-medium">
                        SALE
                      </span>
                    )}
                    
                    {/* Hover Image */}
                    {product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}
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
                      <span className="font-medium">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <Footer />
    </div>
  );
};

export default CategoryPage;
