
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

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
                    <p className="text-xl font-bold">Open 7 days a week</p>
                    <p className="text-3xl font-bold text-restaurant-navy">1:00 PM to 11:00 PM</p>
                    
                    <div className="py-4 border-t border-b border-gray-200 mt-6">
                      <p className="text-gray-600">
                        Our kitchen serves food until 9:30 PM daily.
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
                      Every Sunday we serve our traditional Sunday Roast from 1:00 PM until 8:00 PM.
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
