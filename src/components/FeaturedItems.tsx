
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const featuredItems = [
  {
    id: 1,
    name: "Fish and Chips",
    description: "Fresh cod in a crispy batter, served with chunky chips and mushy peas.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Roast Beef Sunday Lunch",
    description: "Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Full English Breakfast",
    description: "Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

const FeaturedItems = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu Highlights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy our most popular dishes, crafted with fresh local ingredients and traditional British recipes with a modern twist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-restaurant-gold text-restaurant-navy hover:bg-restaurant-gold hover:text-white">
                  <Link to="/menu">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-restaurant-navy hover:bg-blue-900 text-white">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
