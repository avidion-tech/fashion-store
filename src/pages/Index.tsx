
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import ProductGrid from '@/components/ProductGrid';
import BestSellers from '@/components/BestSellers';
import SaleSection from '@/components/SaleSection';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { getNewArrivals, getSaleItems, getBestSellers } from '@/data/products';
import { CartItem } from '@/types/Product';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const newArrivals = getNewArrivals().slice(0, 6);
  const saleItems = getSaleItems();
  const bestSellers = getBestSellers();

  const handleAddToCart = (item: CartItem) => {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.product.id === item.product.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
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
    console.log('Checkout items:', cartItems);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      {/* Promotional Banner */}
      {/* <Banner 
        title="NEW SEASON"
        subtitle="SPRING 2024"
        description="Fresh styles for the season ahead. Discover contemporary pieces that define modern elegance."
        buttonText="SHOP NOW"
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
        textColor="text-white"
        onButtonClick={() => console.log('Shop now clicked')}
      /> */}

      {/* New Arrivals */}
      <ProductGrid products={newArrivals} />

      {/* Best Sellers */}
      <BestSellers products={bestSellers} />

      {/* Mid Banner */}
      <Banner 
        title="EXCLUSIVE OFFERS"
        description="Sign up for our newsletter and get 15% off your first order plus early access to sales."
        buttonText="SUBSCRIBE"
        backgroundColor="bg-black"
        textColor="text-white"
        onButtonClick={() => toast({ title: "Newsletter", description: "Newsletter signup coming soon!" })}
      />

      {/* Sale Section */}
      <SaleSection products={saleItems} />

      {/* Final Banner */}
      <Banner 
        title="LUXURY REDEFINED"
        description="Experience premium quality with timeless design. Every piece tells a story of craftsmanship and elegance."
        backgroundColor="bg-gray-100"
        textColor="text-gray-900"
      />

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

export default Index;
