
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="page-header">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Get in touch with Perth Quay for reservations, feedback, or inquiries.
            </p>
          </div>
        </div>
        
        {/* Contact Content */}
        <section className="section-padding bg-restaurant-cream">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-restaurant-navy text-white rounded-full">
                          <MapPin size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p className="text-gray-700">
                          Stirling Arcade, Stirling,<br />
                          Stirlingshire, FK8 1AX
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-restaurant-navy text-white rounded-full">
                          <Phone size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-gray-700">
                          <a href="tel:01416113188" className="hover:text-restaurant-red">
                            0141 611 3188
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-restaurant-navy text-white rounded-full">
                          <Mail size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-gray-700 break-words">
                          <a href="mailto:clearbusinessbyadrian@gmail.com" className="hover:text-restaurant-red">
                            clearbusinessbyadrian@gmail.com
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-2 bg-restaurant-navy text-white rounded-full">
                          <Clock size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Opening Hours</h3>
                        <p className="text-gray-700">
                          7 days a week<br />
                          1:00 PM to 11:00 PM
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <ContactForm />
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* This would be replaced with an actual map integration */}
                <div className="h-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-6">
                    <MapPin size={48} className="text-restaurant-red mx-auto mb-4" />
                    <p className="text-xl font-bold">Perth Quay</p>
                    <p className="text-gray-700">
                      Stirling Arcade, Stirling, Stirlingshire, FK8 1AX
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Stirling+Arcade,+Stirling,+Stirlingshire,+FK8+1AX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-restaurant-red hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 text-center p-8 bg-restaurant-navy text-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Book a Table</h2>
              <p className="text-lg mb-6">
                For reservations and large group bookings, please call us directly.
              </p>
              <a 
                href="tel:01416113188" 
                className="inline-block px-8 py-3 bg-restaurant-red hover:bg-red-700 text-white rounded-lg font-bold transition-colors"
              >
                Call Now: 0141 611 3188
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
