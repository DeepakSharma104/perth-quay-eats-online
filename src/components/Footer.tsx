
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-custom-dark-brown text-custom-cream">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="hover-scale">
            <h3 className="text-xl font-bold mb-4">Perth Quay</h3>
            <p className="text-sm italic mb-4">The Tasty House</p>
            <div className="flex items-center mt-2">
              <MapPin size={18} className="mr-2 text-custom-gold" />
              <p className="text-sm">Stirling Arcade, Stirling, Stirlingshire, FK8 1AX</p>
            </div>
            <div className="flex items-center mt-2">
              <Phone size={18} className="mr-2 text-custom-gold" />
              <p className="text-sm">0141 611 3188</p>
            </div>
            <div className="flex items-center mt-2">
              <Mail size={18} className="mr-2 text-custom-gold" />
              <p className="text-sm">clearbusinessbyadrian@gmail.com</p>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="hover-scale">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="flex items-start mt-2">
              <Clock size={18} className="mr-2 text-custom-gold mt-1" />
              <p className="text-sm">
                Monday to Thursday: 11am - 10pm<br />
                Friday to Saturday: 11am - 11pm<br />
                Sunday: 10am - 9pm
              </p>
            </div>
            <Link to="/hours" className="text-custom-gold hover:underline mt-4 inline-block text-sm story-link">
              View detailed hours
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="hover-scale">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-custom-gold transition-colors story-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-custom-gold transition-colors story-link">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-custom-gold transition-colors story-link">Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-custom-gold transition-colors story-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-custom-gold transition-colors story-link">Order Online</Link>
              </li>
            </ul>
          </div>
          
          {/* Stay Connected */}
          <div className="hover-scale">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Follow us on social media for updates and special offers.</p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <a href="#" className="w-8 h-8 rounded-full bg-custom-brown flex items-center justify-center hover:bg-custom-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="text-white">f</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-custom-brown flex items-center justify-center hover:bg-custom-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="text-white">i</i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-custom-brown flex items-center justify-center hover:bg-custom-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <i className="text-white">t</i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-custom-brown/20 mt-8 pt-6 text-center text-sm text-custom-cream/70">
          <p>© {new Date().getFullYear()} Perth Quay. Trading since February 2015. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
