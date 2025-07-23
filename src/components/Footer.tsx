import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">SynergyX Store</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your premier destination for digital products that accelerate business success. 
              Quality, innovation, and excellence in every download.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <Facebook size={16} className="text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <Twitter size={16} className="text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <Instagram size={16} className="text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <Linkedin size={16} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                All Products
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shopping Cart
              </Link>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                About Us
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Contact
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Help Center
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Download Issues
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Refund Policy
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Terms of Service
              </div>
              <div className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                Privacy Policy
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@synergyxstore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Digital Commerce Hub, USA</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-xs text-muted-foreground">
                ✓ 24/7 Customer Support
              </div>
              <div className="text-xs text-muted-foreground">
                ✓ Instant Download Delivery
              </div>
              <div className="text-xs text-muted-foreground">
                ✓ 30-Day Money Back Guarantee
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 SynergyX Store. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms
            </div>
            <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy
            </div>
            <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Cookies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};