
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { CartItem } from '@/types/Product';
import { useCart } from '@/contexts/CartContext';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      return;
    }

    const cartItem: CartItem = {
      product,
      quantity,
      size: selectedSize,
      color: selectedColor
    };

    addToCart(cartItem);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                {product.category} • {product.subcategory}
              </p>
              <h1 className="text-3xl font-light mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-medium">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 text-xs font-medium rounded">
                    SALE
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <Select onValueChange={setSelectedColor}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <Select onValueChange={(value) => setQuantity(parseInt(value))}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-black hover:bg-gray-800 text-white py-3"
                size="lg"
                disabled={!selectedSize || !selectedColor}
              >
                ADD TO CART
              </Button>
              
              {/* <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div> */}
            </div>

            {/* Product Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-sm">Free shipping on orders over ₹2,000</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-600" />
                <span className="text-sm">30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-sm">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
