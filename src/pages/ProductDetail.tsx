import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Download, 
  Star, 
  Check, 
  Monitor, 
  Smartphone, 
  FileText,
  HardDrive
} from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen py-8 px-4 lg:px-6">
      <div className="container mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg glass-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop`;
                }}
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                  {product.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9 (127 reviews)</span>
              </div>
            </div>

            {/* Product Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <HardDrive className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">File Size</div>
                  <div className="text-xs text-muted-foreground">{product.fileSize}</div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <FileText className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">Format</div>
                  <div className="text-xs text-muted-foreground">{product.format}</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-price-color">${product.price}</span>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Instant Download</div>
                  <div className="text-sm text-cart-accent font-medium">✓ Available Now</div>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity mb-4"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="w-full border-primary/30 hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Buy Now & Download
              </Button>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-cart-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Compatibility */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Compatibility:</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility?.map((platform, index) => (
                  <Badge key={index} variant="outline" className="flex items-center space-x-1">
                    {platform === 'Windows' && <Monitor className="h-3 w-3" />}
                    {platform === 'Mac' && <Monitor className="h-3 w-3" />}
                    {platform === 'Mobile' && <Smartphone className="h-3 w-3" />}
                    {platform === 'All Devices' && <Monitor className="h-3 w-3" />}
                    <span>{platform}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Additional Info */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Product Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">File Format:</span>
                    <span>{product.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Download Size:</span>
                    <span>{product.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>Personal & Commercial Use</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support:</span>
                    <span>Email Support Included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};