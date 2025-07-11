
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, X } from 'lucide-react';

interface ProductFiltersProps {
  category: string;
  subcategories: string[];
  selectedSubcategory: string;
  selectedPriceRange: string;
  selectedSize: string;
  selectedColor: string;
  sortBy: string;
  onSubcategoryChange: (subcategory: string) => void;
  onPriceRangeChange: (range: string) => void;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  category,
  subcategories,
  selectedSubcategory,
  selectedPriceRange,
  selectedSize,
  selectedColor,
  sortBy,
  onSubcategoryChange,
  onPriceRangeChange,
  onSizeChange,
  onColorChange,
  onSortChange,
  onClearFilters
}) => {
  const priceRanges = [
    { label: 'Under ₹1,000', value: '0-1000' },
    { label: '₹1,000 - ₹3,000', value: '1000-3000' },
    { label: '₹3,000 - ₹7,000', value: '3000-7000' },
    { label: '₹7,000+', value: '7000+' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Navy', 'Grey', 'Brown', 'Blue', 'Red', 'Green'];

  const hasActiveFilters = selectedSubcategory || selectedPriceRange || selectedSize || selectedColor;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          {/* Filters */}
          <div className="flex flex-wrap items-center space-x-4 space-y-2 md:space-y-0">
            {/* Mobile Filters Toggle */}
            <div className="md:hidden w-full">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Filters
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  {/* Mobile filter content */}
                  <div className="grid grid-cols-2 gap-4">
                    {subcategories.length > 0 && (
                      <Select value={selectedSubcategory || "all-categories"} onValueChange={(value) => onSubcategoryChange(value === "all-categories" ? "" : value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-categories">All {category}</SelectItem>
                          {subcategories.map((sub) => (
                            <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    
                    <Select value={selectedPriceRange || "all-prices"} onValueChange={(value) => onPriceRangeChange(value === "all-prices" ? "" : value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-prices">All Prices</SelectItem>
                        {priceRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedSize || "all-sizes"} onValueChange={(value) => onSizeChange(value === "all-sizes" ? "" : value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-sizes">All Sizes</SelectItem>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedColor || "all-colors"} onValueChange={(value) => onColorChange(value === "all-colors" ? "" : value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-colors">All Colors</SelectItem>
                        {colors.map((color) => (
                          <SelectItem key={color} value={color}>{color}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-4">
              {subcategories.length > 0 && (
                <Select value={selectedSubcategory || "all-categories"} onValueChange={(value) => onSubcategoryChange(value === "all-categories" ? "" : value)}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All {category}</SelectItem>
                    {subcategories.map((sub) => (
                      <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              
              <Select value={selectedPriceRange || "all-prices"} onValueChange={(value) => onPriceRangeChange(value === "all-prices" ? "" : value)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-prices">All Prices</SelectItem>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSize || "all-sizes"} onValueChange={(value) => onSizeChange(value === "all-sizes" ? "" : value)}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sizes">All Sizes</SelectItem>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedColor || "all-colors"} onValueChange={(value) => onColorChange(value === "all-colors" ? "" : value)}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-colors">All Colors</SelectItem>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>{color}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onClearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Sort */}
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
