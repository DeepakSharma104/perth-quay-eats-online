
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedItems from '@/components/FeaturedItems';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Introduction Section */}
        <section className="section-padding bg-restaurant-cream">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Traditional British Cuisine with a Modern Twist
                </h2>
                <p className="text-lg mb-6">
                  At Perth Quay, we're passionate about serving up delicious, authentic British dishes with a contemporary flair. 
                  From hearty pub classics to elegant fine dining options, our menu is designed to showcase the best of British cuisine.
                </p>
                <p className="text-lg mb-6">
                  Our restaurant is a family-run establishment with a love for traditional British cooking. 
                  Our chefs use only the freshest, locally-sourced ingredients to create dishes that are both familiar and exciting.
                </p>
                <Button asChild className="bg-restaurant-navy hover:bg-blue-900 text-white">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu Items */}
        <FeaturedItems />

        {/* Services Section */}
        <section className="section-padding bg-restaurant-navy text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg max-w-3xl mx-auto">
                At Perth Quay, we offer a range of services to enhance your dining experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-restaurant-gold text-restaurant-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Dine In</h3>
                <p className="text-white/80">
                  Enjoy our delicious food in our warm and welcoming restaurant environment.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-restaurant-gold text-restaurant-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Takeaway</h3>
                <p className="text-white/80">
                  Order your favorite dishes and pick them up to enjoy at home.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-restaurant-gold text-restaurant-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Delivery</h3>
                <p className="text-white/80">
                  Have our delicious meals delivered right to your doorstep.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-restaurant-gold text-restaurant-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Catering</h3>
                <p className="text-white/80">
                  Let us cater your next event with our delicious British cuisine.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-restaurant-red hover:bg-red-700 text-white">
                <Link to="/contact">Contact Us for More Information</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-restaurant-gold text-restaurant-navy">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Perth Quay?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for a delicious meal or order online for delivery and takeaway.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-restaurant-navy hover:bg-blue-900 text-white">
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button asChild size="lg" className="bg-restaurant-red hover:bg-red-700 text-white">
                <a href="tel:01416113188">Call Us: 0141 611 3188</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
