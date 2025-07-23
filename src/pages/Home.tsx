import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular digital products that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => navigate('/products')}
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 lg:px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop by <span className="gradient-text">Category</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Course', 'Toolkit', 'Guide', 'Bundle'].map((category) => (
              <div 
                key={category}
                className="glass-card p-6 text-center hover:glow-effect transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/products?category=${category.toLowerCase()}`)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {category.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category}s
                </h3>
                <p className="text-muted-foreground text-sm">
                  {products.filter(p => p.category === category).length} products
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};