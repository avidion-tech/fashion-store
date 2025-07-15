"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import CheckoutModal from "@/components/CheckoutModal";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const {
    cartItems,
    updateQuantity,
    removeItem,
    getCartItemsCount,
    getCartTotal,
  } = useCart();

  const subtotal = getCartTotal();
  const cartItemsCount = getCartItemsCount();

  const handleRemoveItem = (index: number) => {
    removeItem(index);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    console.log("checkout clicked");
    setOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-semibold mb-6">
                  Shopping Cart ({cartItems.length} items)
                </h1>

                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Start shopping to add items to your cart
                    </p>
                    <Button
                      onClick={() => navigate("/")}
                      className="bg-black hover:bg-gray-800"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="relative gap-3 flex flex-col lg:flex-row lg:items-center lg:space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="w-24 h-32 bg-gray-100 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2 ">
                          <h3 className="font-medium text-lg">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 uppercase tracking-wide">
                            {item.product.category} • {item.product.subcategory}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {item.size} | Color: {item.color}
                          </p>
                          <p className="text-lg font-semibold">
                            ₹{item.product.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between md:gap-5 items-center w-full md:w-auto">
                          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center space-y-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3 border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    index,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                                className="p-2 hover:bg-gray-100 rounded-l-lg"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(index, item.quantity + 1)
                                }
                                className="p-2 hover:bg-gray-100 rounded-r-lg"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => handleRemoveItem(index)}
                              className="absolute -top-1 right-3 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                         
                            <p className="text-lg font-semibold">
                              ₹
                              {(
                                item.product.price * item.quantity
                              ).toLocaleString("en-IN")}
                            </p>
                         
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItemsCount} items)</span>
                      <span>₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>
                        ₹{Math.round(subtotal * 0.18).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>
                        ₹{Math.round(subtotal * 1.18).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleCheckout}
                      className="w-full bg-black hover:bg-gray-800 text-white py-3"
                      size="lg"
                    >
                      Proceed to Checkout
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        Free shipping on orders over ₹2,000
                      </p>
                      <p className="text-sm text-gray-500">
                        30-day return policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
      <CheckoutModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CartPage;
