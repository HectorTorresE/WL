import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Properties: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Colonial Houses"
        subtitle="Discover our collection of meticulously restored 16th century homes"
        backgroundImage="https://images.pexels.com/photos/6775265/pexels-photo-6775265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Luxurious Colonial Living</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each of our houses offers a unique experience, combining historic architecture with modern comforts. 
              From private courtyards and plunge pools to personalized butler service, 
              our properties provide an authentic yet luxurious colonial experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6957059/pexels-photo-6957059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Premium Amenities"
                className="w-full h-auto rounded"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Premium Amenities</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                All of our properties include a range of premium amenities to ensure a comfortable and luxurious stay:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Daily housekeeping and turndown service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Complimentary breakfast served in your house or courtyard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Dedicated butler and concierge service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>High-speed WiFi throughout the property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Luxury bath amenities and plush robes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-2">•</span>
                  <span>Access to shared facilities including the lounge and pool</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;