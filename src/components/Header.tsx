
import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('/')}>
            <h1 className="text-2xl font-bold tracking-tight">AUREL</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/category/new')}
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide transition-colors"
            >
              NEW IN
            </button>
            <button 
              onClick={() => handleNavigation('/category/women')}
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide transition-colors"
            >
              WOMEN
            </button>
            <button 
              onClick={() => handleNavigation('/category/men')}
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide transition-colors"
            >
              MEN
            </button>
            <button 
              onClick={() => handleNavigation('/category/accessories')}
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide transition-colors"
            >
              ACCESSORIES
            </button>
            <button 
              onClick={() => handleNavigation('/category/sale')}
              className="text-gray-900 hover:text-gray-600 font-medium tracking-wide transition-colors"
            >
              SALE
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCartClick} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <button 
                onClick={() => handleNavigation('/category/new')}
                className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                NEW IN
              </button>
              <button 
                onClick={() => handleNavigation('/category/women')}
                className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                WOMEN
              </button>
              <button 
                onClick={() => handleNavigation('/category/men')}
                className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                MEN
              </button>
              <button 
                onClick={() => handleNavigation('/category/accessories')}
                className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                ACCESSORIES
              </button>
              <button 
                onClick={() => handleNavigation('/category/sale')}
                className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                SALE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
