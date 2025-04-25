import React from 'react';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import { properties } from '../data/properties';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Book: React.FC = () => {
  return (
    <div>
      <Hero
        title="Book Your Stay"
        subtitle="Experience luxury colonial living in Santo Domingo"
        backgroundImage="https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Reserve Your Colonial Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Book your stay at one of our meticulously restored colonial houses and 
              immerse yourself in the rich history of Santo Domingo's Colonial City. 
              Our dedicated staff will ensure an unforgettable luxury experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6">
                <h3 className="font-serif text-xl mb-6">Our Properties</h3>
                
                <div className="space-y-6">
                  {properties.map((property) => (
                    <div key={property.id} className="flex items-start">
                      <img 
                        src={property.images[0]} 
                        alt={property.name} 
                        className="w-20 h-20 object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium mb-1">{property.name}</h4>
                        <p className="text-sm text-gray-700 mb-2">{property.shortDescription}</p>
                        <Link 
                          to={`/properties/${property.id}`}
                          className="inline-flex items-center text-sm text-amber-800 hover:text-amber-900 transition-colors"
                        >
                          View Details <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-amber-50 p-6 mt-6">
                <h3 className="font-serif text-xl mb-4">Booking Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>Check-in time: 3:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>Check-out time: 12:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>50% deposit required to confirm booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>Free cancellation up to 7 days before arrival</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-2">•</span>
                    <span>All rates include breakfast and butler service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;