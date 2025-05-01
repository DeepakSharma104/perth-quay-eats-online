
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar, Utensils, Music, Coffee, Beer } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpeningHours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="page-header">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Opening Hours</h1>
            <p className="text-xl">
              Perth Quay is open 7 days a week to serve you delicious British cuisine.
            </p>
          </div>
        </div>
        
        {/* Opening Hours Content */}
        <section className="section-padding bg-restaurant-cream">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-xl border-restaurant-gold border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <Clock size={36} className="text-restaurant-red mr-3" />
                    <h2 className="text-2xl font-bold">Regular Opening Hours</h2>
                  </div>
                  
                  <div className="space-y-4 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                        <p className="font-bold">Monday to Thursday:</p>
                        <p className="text-xl">11:00 AM - 10:00 PM</p>
                      </div>
                      <div className="p-4">
                        <p className="font-bold">Friday to Saturday:</p>
                        <p className="text-xl">11:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <p className="font-bold">Sunday:</p>
                      <p className="text-xl">10:00 AM - 9:00 PM</p>
                    </div>
                    
                    <div className="py-4 border-t border-gray-200 mt-6">
                      <p className="text-gray-600">
                        Our kitchen serves food until 9:30 PM daily (8:30 PM on Sundays).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <Calendar size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-2xl font-bold">Special Hours & Events</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Sunday Roast</h3>
                    <p className="mb-2">
                      Every Sunday we serve our traditional Sunday Roast from 12:00 PM until 8:00 PM.
                    </p>
                    <p className="text-restaurant-red font-medium">
                      Booking recommended to avoid disappointment.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Quiz Night</h3>
                    <p className="mb-2">
                      Join us every Wednesday evening from 7:00 PM for our popular Quiz Night.
                    </p>
                    <p className="text-restaurant-red font-medium">
                      Teams of up to 6 people. £2 entry per person.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Live Music</h3>
                    <p className="mb-2">
                      Enjoy live music performances from local musicians every Friday from 8:00 PM.
                    </p>
                    <p className="text-restaurant-red font-medium">
                      No cover charge. Kitchen open until regular closing time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <Utensils size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-2xl font-bold">Our Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Online Ordering</h3>
                    <p>Order your favorite dishes from the comfort of your own home and have them delivered or ready for pickup.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Reservations</h3>
                    <p>Book a table in advance to ensure a smooth and hassle-free dining experience.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Takeout</h3>
                    <p>Enjoy our delicious food from the comfort of your own home.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Delivery</h3>
                    <p>Get our dishes delivered right to your doorstep.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Catering</h3>
                    <p>Let us handle the food for your next event or party.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Private Dining</h3>
                    <p>Book our private room for special occasions or events.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Events</h3>
                    <p>Host your next event or party with us, and let us take care of the food and atmosphere.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Loyalty Program</h3>
                    <p>Join our loyalty program and earn rewards and discounts.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Gift Cards</h3>
                    <p>Purchase gift cards for friends and family.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Party Platters</h3>
                    <p>Order large quantities of our dishes for your next gathering or event.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Meal Plans</h3>
                    <p>Sign up for our meal plans and enjoy our food at a discounted rate.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Dietary Options</h3>
                    <p>We offer gluten-free, vegan, and other options to cater to your dietary needs.</p>
                  </div>
                </div>
              </div>

              {/* Special Services Section */}
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <Coffee size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-2xl font-bold">Special Features</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <Music size={40} className="text-restaurant-gold mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Live Music</h3>
                    <p>Enjoy live performances from local musicians every Friday evening.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <Coffee size={40} className="text-restaurant-gold mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Outdoor Seating</h3>
                    <p>Enjoy your meal in our comfortable outdoor patio area.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <Beer size={40} className="text-restaurant-gold mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Happy Hour</h3>
                    <p>Special deals on drinks Monday-Thursday, 4PM-6PM.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <Coffee size={40} className="text-restaurant-gold mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Kids Menu</h3>
                    <p>Special menu options for our younger guests.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <Coffee size={40} className="text-restaurant-gold mb-3" />
                    <h3 className="text-lg font-bold mb-2 text-restaurant-navy">Pet-Friendly</h3>
                    <p>Pets are welcome in our outdoor seating area.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center bg-restaurant-navy text-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Holiday Hours</h2>
                <p className="mb-6">
                  Please note that our opening hours may vary during public holidays and special occasions. 
                  We recommend checking our social media or calling ahead to confirm our opening times during holiday periods.
                </p>
                <div className="inline-block">
                  <p className="font-bold">For the latest updates:</p>
                  <p className="text-lg mt-2">
                    Call us:
                    <a 
                      href="tel:01416113188" 
                      className="ml-2 text-restaurant-gold hover:underline"
                    >
                      0141 611 3188
                    </a>
                  </p>
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

export default OpeningHours;
