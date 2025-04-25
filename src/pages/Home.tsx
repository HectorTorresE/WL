import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Testimonial from '../components/Testimonial';
import Button from '../components/ui/Button';
import { properties } from '../data/properties';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Experience Colonial Luxury in Santo Domingo"
        subtitle="A collection of meticulously restored 16th century colonial homes in the heart of the Colonial City"
        backgroundImage="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Explore Our Properties"
        buttonLink="/properties"
      />
      
      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">A Unique Hospitality Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Casas del XVI offers a unique collection of luxury homes in Santo Domingo's Colonial City. 
              Our meticulously restored houses combine colonial charm with modern luxury, 
              creating an unparalleled hospitality experience that takes you back to the 16th century.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-amber-800">
                About Casas del XVI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
      
      {/* Featured Properties */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-gray-900">Our Colonial Houses</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our collection of beautifully restored colonial homes, each with its own unique character and history.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="primary">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Experience Santo Domingo</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Immerse yourself in the rich history and vibrant culture of Santo Domingo's Colonial City, 
                a UNESCO World Heritage site and the oldest European settlement in the Americas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our concierge team will help you explore the city's historic sites, local cuisine, 
                and cultural landmarks to create a truly memorable experience.
              </p>
              <Link 
                to="/experience" 
                className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium transition-colors"
              >
                Discover More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Colonial City Experience" 
                className="w-full h-auto rounded"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Local Experience" 
                  className="w-48 h-48 object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-gray-900">Guest Testimonials</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Read what our guests have to say about their experience at Casas del XVI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="An absolutely magical experience. The beautifully restored colonial home transported us back in time while offering all modern luxuries."
              author="Sofia & James"
              position="New York, USA"
            />
            <Testimonial 
              quote="The staff were exceptional and the property was stunning. Our stay at Casa Macorís was the highlight of our trip to the Dominican Republic."
              author="Carlos Mendez"
              position="Madrid, Spain"
            />
            <Testimonial 
              quote="A perfect blend of history and luxury. The attention to detail in the restoration is remarkable, and the service was impeccable."
              author="Marie Dupont"
              position="Paris, France"
            />
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url(https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Book Your Colonial Experience</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Experience the charm of colonial Santo Domingo with a stay at one of our luxury properties.
              Book directly for our best rates and exclusive benefits.
            </p>
            <Link to="/book">
              <Button variant="primary" size="lg" className="bg-amber-700 hover:bg-amber-800">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;