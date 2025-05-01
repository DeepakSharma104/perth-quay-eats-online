
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="page-header">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">
              Learn more about Perth Quay and our passion for delicious British cuisine.
            </p>
          </div>
        </div>
        
        {/* About Content */}
        <section className="section-padding bg-restaurant-cream">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  Welcome to Perth Quay, where food, passion, and community come together. 
                  Our story began in February 2015 with a simple idea: to share delicious, 
                  homemade-style British cuisine with our neighbors and friends.
                </p>
                <p className="text-lg mb-4">
                  Founded by Mr. Adrian Venoin, Perth Quay quickly became known as "The Tasty House" 
                  among locals, a nickname that reflects our commitment to serving delicious food in a 
                  warm and welcoming environment.
                </p>
                <p className="text-lg">
                  Over the years, we've grown from a small local eatery to a beloved dining destination, 
                  but our core values remain the same – quality ingredients, traditional recipes with a 
                  modern twist, and exceptional service that makes every guest feel at home.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-4">
                  We aim to create a warm and inviting space where everyone feels at home. Our chefs are dedicated 
                  to crafting dishes that not only taste amazing but also use only the freshest ingredients, sourced 
                  locally whenever possible.
                </p>
                <p className="text-lg">
                  At Perth Quay, we're not just serving meals – we're creating experiences, preserving traditions, 
                  and bringing people together through the universal language of good food.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-restaurant-navy rounded-full flex items-center justify-center">
                  <Users size={40} className="text-white" />
                </div>
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-4">
                  Meet our talented team of chefs, servers, and managers who work together to bring you 
                  an exceptional dining experience. Led by owner Adrian Venoin, our team combines years 
                  of culinary expertise with a passion for hospitality.
                </p>
                <p className="text-lg">
                  From our head chef who crafts each recipe with precision and creativity, to our friendly 
                  front-of-house staff who ensure your visit is perfect from start to finish, every team 
                  member plays a vital role in the Perth Quay family.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-restaurant-red">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Quality</h3>
                  <p>
                    We're committed to serving only the best. Our ingredients are carefully selected, 
                    our recipes perfected, and our standards high.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-restaurant-gold">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p>
                    We believe in supporting local businesses and events. Perth Quay is proud to be 
                    an active part of our local community.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-restaurant-navy">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Hospitality</h3>
                  <p>
                    We strive to make every guest feel welcome and valued. Our service is as important 
                    to us as the food we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 pb-8 border-l-2 border-restaurant-gold">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-restaurant-gold"></div>
                  <h3 className="text-xl font-bold mb-2">February 2015</h3>
                  <p className="mb-0">Perth Quay opens its doors in Stirling Arcade</p>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-restaurant-gold">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-restaurant-gold"></div>
                  <h3 className="text-xl font-bold mb-2">2017</h3>
                  <p className="mb-0">Expanded our menu to include more traditional British dishes</p>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-restaurant-gold">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-restaurant-gold"></div>
                  <h3 className="text-xl font-bold mb-2">2019</h3>
                  <p className="mb-0">Introduced our popular Sunday Roast and weekly events</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-restaurant-gold"></div>
                  <h3 className="text-xl font-bold mb-2">Today</h3>
                  <p className="mb-0">Continuing to serve the best of British cuisine to our valued customers</p>
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

export default About;
