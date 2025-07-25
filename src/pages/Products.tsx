import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Search, Filter, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             product.category.toLowerCase() === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('name');
    setSearchParams({});
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'all';

  return (
    <div className="min-h-screen py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Digital <span className="gradient-text">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Browse our complete collection of premium digital products designed to accelerate your success
          </p>
        </div>

        {/* Filters and Search */}
        <div className="glass-card p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[160px] lg:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[160px] lg:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="whitespace-nowrap w-full sm:w-auto"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                  Category: {selectedCategory}
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                  Search: "{searchTerm}"
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-muted-foreground text-sm">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredAndSortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base px-4">
              Try adjusting your search criteria or clearing the filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};