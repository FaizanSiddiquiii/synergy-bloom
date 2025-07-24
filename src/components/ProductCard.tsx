import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card 
      className="group glass-card hover:glow-effect transition-all duration-500 cursor-pointer overflow-hidden hover:scale-[1.02] h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop`;
          }}
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <Badge variant="secondary" className="bg-accent/90 text-accent-foreground text-xs">
            {product.category}
          </Badge>
        </div>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">4.9</span>
        </div>
      </div>

      <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-price-color">
            ${product.price}
          </span>
          <div className="text-xs text-muted-foreground">
            {product.fileSize}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          size="sm"
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 text-sm"
        >
          <ShoppingCart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};