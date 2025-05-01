
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';

const Hero = () => {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto relative z-10 text-custom-cream">
        <AnimateOnScroll animation="fade-in">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Perth Quay
            </h1>
            <p className="text-lg md:text-xl italic font-serif">
              The Tasty House
            </p>
            <p className="text-lg md:text-xl">
              Traditional British Cuisine with a Modern Twist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="bg-custom-gold hover:bg-amber-500 text-custom-dark-brown">
                <Link to="/menu">
                  View Our Menu
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-custom-brown hover:bg-custom-dark-brown text-custom-cream">
                <Link to="/contact">
                  Book a Table
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
