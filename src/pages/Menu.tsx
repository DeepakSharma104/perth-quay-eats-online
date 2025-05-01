
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="page-header">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl">
              Discover our traditional British cuisine with a modern twist.
            </p>
          </div>
        </div>
        
        {/* Menu Content */}
        <section className="section-padding bg-restaurant-cream">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-12 rounded-lg shadow-xl border-2 border-restaurant-gold">
                <h2 className="text-3xl font-bold mb-6">Menu Coming Soon</h2>
                
                <p className="text-lg mb-8">
                  We're currently updating our online menu to ensure we showcase our delicious dishes in the best possible way.
                </p>
                
                <p className="text-lg mb-8">
                  In the meantime, please visit us in person or contact us to learn about our current menu offerings and daily specials.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-bold mb-2">Call us for more information:</p>
                    <a href="tel:01416113188" className="flex items-center justify-center text-restaurant-red hover:text-red-700 font-bold text-xl">
                      <Phone size={20} className="mr-2" />
                      0141 611 3188
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-2">Or visit our restaurant at:</p>
                    <p className="text-lg">
                      Stirling Arcade, Stirling, Stirlingshire, FK8 1AX
                    </p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button asChild size="lg" className="bg-restaurant-navy hover:bg-blue-900 text-white">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
