import { ArrowRight, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Counter } from '@/components/Counter';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-accent/20 text-accent-foreground border-accent/30 text-xs sm:text-sm">
            <Star className="mr-1 h-3 w-3" />
            Premium Digital Products
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight px-2">
            Transform Your Business with{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up delay-200 px-4">
            Discover premium digital products, courses, and toolkits designed to accelerate your success. 
            From marketing strategies to business tools - everything you need in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-slide-up delay-300 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 glow-effect w-full sm:w-auto"
              onClick={() => navigate('/products')}
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto animate-slide-up delay-500 px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <Counter target={150} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Digital Products</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                <Counter target={25} suffix="K+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">
                <Counter target={4.9} suffix="★" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};