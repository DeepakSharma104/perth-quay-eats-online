
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Calendar, Users, Coffee, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OpeningHours = () => {
  const specialHours = [
    {
      date: 'December 24th',
      hours: '11:00 AM - 6:00 PM',
    },
    {
      date: 'December 25th',
      hours: 'Closed',
    },
    {
      date: 'December 31st',
      hours: '11:00 AM - 10:00 PM',
    },
    {
      date: 'January 1st',
      hours: '12:00 PM - 10:00 PM',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="page-header">
          <div className="container mx-auto text-center">
            <AnimateOnScroll animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Opening Hours</h1>
              <p className="text-xl">
                Join us 7 days a week for delicious British cuisine
              </p>
            </AnimateOnScroll>
          </div>
        </div>
        
        {/* Hours Content */}
        <section className="section-padding bg-custom-cream">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <AnimateOnScroll animation="slide-in" delay={200}>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Regular Hours</h2>
                  
                  <Card className="mb-4 border-t-4 border-t-custom-gold shadow-lg">
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-custom-brown text-custom-cream rounded-full">
                          <Clock size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-custom-brown">Monday to Thursday</h3>
                        <p className="text-custom-dark-brown text-lg">11:00 AM - 10:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4 border-t-4 border-t-custom-gold shadow-lg">
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-custom-brown text-custom-cream rounded-full">
                          <Clock size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-custom-brown">Friday to Saturday</h3>
                        <p className="text-custom-dark-brown text-lg">11:00 AM - 11:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-t-4 border-t-custom-gold shadow-lg">
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-custom-brown text-custom-cream rounded-full">
                          <Clock size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-custom-brown">Sunday</h3>
                        <p className="text-custom-dark-brown text-lg">10:00 AM - 9:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="scale-in" delay={400}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Restaurant Interior" 
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll animation="fade-in" delay={600}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-custom-dark-brown">Holiday Special Hours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {specialHours.map((special, index) => (
                    <Card 
                      key={index} 
                      className="hover-scale bg-gradient-to-br from-white to-custom-cream border-custom-gold border"
                    >
                      <CardContent className="p-6 text-center">
                        <Calendar size={28} className="mx-auto mb-3 text-custom-brown animate-float" />
                        <h3 className="font-bold mb-2 text-custom-brown">{special.date}</h3>
                        <p className="text-custom-dark-brown">{special.hours}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Services Section */}
            <AnimateOnScroll animation="fade-in" delay={800}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-custom-dark-brown">Our Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover-scale border-custom-gold border">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-custom-gold text-custom-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                        <Utensils size={28} />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-custom-brown">Dine In</h3>
                      <p className="text-custom-dark-brown">
                        Enjoy our cuisine in our warm and welcoming restaurant.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale border-custom-gold border">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-custom-gold text-custom-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                        <Coffee size={28} />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-custom-brown">Takeaway</h3>
                      <p className="text-custom-dark-brown">
                        Order your favorite dishes to enjoy at home.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale border-custom-gold border">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-custom-gold text-custom-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users size={28} />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-custom-brown">Private Events</h3>
                      <p className="text-custom-dark-brown">
                        Let us host your special events and celebrations.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale border-custom-gold border">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-custom-gold text-custom-dark-brown rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar size={28} />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-custom-brown">Catering</h3>
                      <p className="text-custom-dark-brown">
                        We provide catering services for your offsite events.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Call to Action */}
            <AnimateOnScroll animation="scale-in" delay={1000}>
              <div className="text-center p-10 bg-gradient-to-br from-custom-brown to-custom-dark-brown text-custom-cream rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Visit Us?</h2>
                <p className="text-lg mb-6">
                  Join us for a delicious meal or make a reservation for your next visit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-custom-gold hover:bg-amber-500 text-custom-dark-brown">
                    <Link to="/menu">View Our Menu</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-custom-dark-brown">
                    <Link to="/contact">Make a Reservation</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OpeningHours;
