
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Coffee, Beer, Utensils, Cake, Fish, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              
              {/* Breakfast Section */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <Coffee size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Breakfast</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Full English Breakfast</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£12.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Eggs Benedict</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Poached eggs on toasted English muffins with smoked salmon and hollandaise sauce.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£10.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Avocado Toast</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Toasted sourdough with mashed avocado, cherry tomatoes, and feta cheese.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£9.95</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Lunch Section */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <Utensils size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Lunch</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Fish and Chips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Fresh cod in a crispy batter, served with chunky chips and mushy peas.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£14.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Ploughman's Lunch</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A selection of artisanal cheeses, bread, pickles, and chutneys.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£12.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Chicken and Mushroom Pie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A hearty pie filled with chicken, mushrooms, and creamy sauce.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£13.95</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Dinner Section */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <Fish size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Dinner</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Roast Beef</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£17.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Pan-Seared Salmon</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Fresh salmon fillet, pan-seared and served with lemon butter and herbs.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£16.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Lamb Shank</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Braised lamb shank with rosemary and garlic, served with roasted potatoes and carrots.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£18.95</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Desserts Section */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <Cake size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Desserts</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Sticky Toffee Pudding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Warm sponge cake with sticky toffee sauce and vanilla ice cream.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£7.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Trifle</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Layers of sponge cake, fruit, custard, and whipped cream.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£6.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Eccles Cakes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Flaky pastry cakes filled with currants and often topped with a glaze made of icing sugar.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£5.95</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Drinks Section */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <Beer size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Drinks</h2>
                </div>
                <h3 className="text-xl font-bold mb-4 text-restaurant-navy">Beers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>London Pride</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A classic English bitter.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£4.95</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Newcastle Brown Ale</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A rich, malty ale from the north-east.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£5.25</p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg border-restaurant-gold hover:border-2 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle>Bombardier</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A hoppy, golden ale from Bedfordshire.</p>
                      <p className="font-bold text-restaurant-navy mt-4">£4.95</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Events Section */}
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <Calendar size={28} className="text-restaurant-red mr-3" />
                  <h2 className="text-3xl font-bold">Events</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Live Music</h3>
                    <p className="mb-2">
                      Join us for live music performances from local musicians, every Friday evening.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Quiz Night</h3>
                    <p className="mb-2">
                      Test your knowledge and win prizes on our weekly quiz night, every Wednesday.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Sunday Roast</h3>
                    <p className="mb-2">
                      Join us for a traditional Sunday roast with all the trimmings, every Sunday.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="mt-16 text-center bg-restaurant-navy text-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Make a Reservation</h2>
                <p className="mb-6">
                  To make a reservation or inquire about events, please call us:
                </p>
                <div className="inline-block">
                  <a href="tel:01416113188" className="flex items-center justify-center text-restaurant-gold hover:text-gold-700 font-bold text-xl">
                    <Phone size={20} className="mr-2" />
                    0141 611 3188
                  </a>
                </div>
                <div className="mt-4">
                  <Button asChild size="lg" className="bg-restaurant-red hover:bg-red-700 text-white">
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
