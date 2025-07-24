import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm sm:text-lg font-bold text-white">S</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text truncate">SynergyX Store</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
            >
              Products
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              {itemCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center p-0 bg-cart-accent text-white text-[10px] sm:text-xs"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 sm:h-10 sm:w-10">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};