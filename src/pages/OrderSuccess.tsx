import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Home, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 px-4 lg:px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-cart-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Order <span className="gradient-text">Complete!</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your purchase. Your digital products are ready for download.
          </p>

          <Badge variant="secondary" className="bg-cart-accent/20 text-cart-accent">
            Order #SX-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </Badge>
        </div>

        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Check your email</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent download links and purchase receipts to your email address.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Download your products</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the download links in your email to access your digital products instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Lifetime access</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll have lifetime access to re-download your products anytime.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Need help?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Download Issues</h4>
                <p className="text-muted-foreground">
                  If you have trouble downloading your products, check your spam folder or contact support.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technical Support</h4>
                <p className="text-muted-foreground">
                  For technical questions about your products, our support team is here to help 24/7.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="outline" className="flex-1">
                Contact Support
              </Button>
              <Button variant="outline" className="flex-1">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <Button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Thank you for choosing SynergyX Store! We hope you enjoy your digital products.
          </p>
        </div>
      </div>
    </div>
  );
};