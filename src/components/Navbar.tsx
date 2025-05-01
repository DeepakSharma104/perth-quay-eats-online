
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-restaurant-navy text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold">Perth Quay</span>
          <span className="hidden md:block ml-2 text-xs italic text-restaurant-cream">The Tasty House</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-restaurant-gold transition-colors">Home</Link>
          <Link to="/hours" className="hover:text-restaurant-gold transition-colors">Opening Hours</Link>
          <Link to="/about" className="hover:text-restaurant-gold transition-colors">About Us</Link>
          <Link to="/menu" className="hover:text-restaurant-gold transition-colors">Menu</Link>
          <Link to="/contact" className="hover:text-restaurant-gold transition-colors">Contact</Link>
        </nav>

        {/* Order Button - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-restaurant-red hover:bg-red-700 text-white">
            Order Online
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-restaurant-navy">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="block px-4 py-2 hover:bg-restaurant-gold/20 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hours" 
              className="block px-4 py-2 hover:bg-restaurant-gold/20 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Opening Hours
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 hover:bg-restaurant-gold/20 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/menu" 
              className="block px-4 py-2 hover:bg-restaurant-gold/20 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 hover:bg-restaurant-gold/20 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-restaurant-red hover:bg-red-700 text-white mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
