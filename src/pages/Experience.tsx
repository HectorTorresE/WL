import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Experience: React.FC = () => {
  return (
    <div>
      <Hero
        title="The Colonial Experience"
        subtitle="Immerse yourself in the rich history and culture of Santo Domingo"
        backgroundImage="https://images.pexels.com/photos/9553962/pexels-photo-9553962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Experience Santo Domingo</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a guest at Casas del XVI, you'll have the opportunity to immerse yourself in the rich history 
              and vibrant culture of Santo Domingo's Colonial City. Our concierge team can arrange a variety of 
              experiences to make your stay truly memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Colonial City Tour"
                className="w-full h-auto rounded mb-6"
              />
              <h3 className="font-serif text-2xl mb-4">Colonial City Tour</h3>
              <p className="text-gray-700 mb-4">
                Explore the oldest European settlement in the Americas with a guided tour of the 
                Colonial City. Visit historic sites such as the First Cathedral of America, 
                Alcázar de Colón, and the ruins of the San Francisco Monastery.
              </p>
              <p className="text-gray-700">
                Our knowledgeable guides will share insights into the rich history of the area, 
                from the arrival of Christopher Columbus to the present day.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/15839977/pexels-photo-15839977/free-photo-of-busy-street-market-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Local Markets"
                className="w-full h-auto rounded mb-6"
              />
              <h3 className="font-serif text-2xl mb-4">Local Markets & Cuisine</h3>
              <p className="text-gray-700 mb-4">
                Discover the flavors of Dominican cuisine with a visit to local markets and 
                food experiences. Sample traditional dishes like mangú, sancocho, and fresh tropical fruits.
              </p>
              <p className="text-gray-700">
                For culinary enthusiasts, we can arrange cooking classes with local chefs to learn 
                the secrets of Dominican cooking, using fresh ingredients from the island.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/16744698/pexels-photo-16744698/free-photo-of-dominican-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Beach Excursions"
                className="w-full h-auto rounded mb-6"
              />
              <h3 className="font-serif text-2xl mb-4">Beach Excursions</h3>
              <p className="text-gray-700 mb-4">
                The Dominican Republic is known for its beautiful beaches. Escape the city for a day 
                trip to pristine beaches like Boca Chica or Juan Dolio, just a short drive from Santo Domingo.
              </p>
              <p className="text-gray-700">
                Enjoy swimming in crystal-clear waters, water sports, or simply relaxing on the white sand 
                beaches with a refreshing tropical drink.
              </p>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cultural Performances"
                className="w-full h-auto rounded mb-6"
              />
              <h3 className="font-serif text-2xl mb-4">Cultural Performances</h3>
              <p className="text-gray-700 mb-4">
                Experience the vibrant music and dance traditions of the Dominican Republic with 
                live performances of merengue, bachata, and other local rhythms.
              </p>
              <p className="text-gray-700">
                We can arrange private performances in your casa or recommend the best venues in 
                the city to experience authentic Dominican culture.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900 text-center">Personalized Experiences</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              At Casas del XVI, we believe in creating unique, personalized experiences for our guests. 
              Here are some of the exclusive services we offer:
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-serif text-xl mb-3">Private Dining</h3>
                <p className="text-gray-700">
                  Enjoy a romantic dinner in the privacy of your casa's courtyard, prepared by our talented chefs. 
                  We can create a custom menu featuring local ingredients and wines for a truly memorable dining experience.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-serif text-xl mb-3">Spa Services</h3>
                <p className="text-gray-700">
                  Relax and rejuvenate with in-house spa treatments. Our therapists offer a range of massages 
                  and treatments using natural Dominican ingredients like cacao, coffee, and tropical fruits.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-sm rounded">
                <h3 className="font-serif text-xl mb-3">Special Occasions</h3>
                <p className="text-gray-700">
                  Celebrating a special occasion? Let us know, and we'll help you create a memorable celebration. 
                  From birthday surprises to anniversary decorations, we'll make your special day even more extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url(https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Experience Casas del XVI?</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Book your stay now and immerse yourself in the rich history and culture of Santo Domingo's Colonial City.
            </p>
            <Link to="/book">
              <Button variant="primary" size="lg" className="bg-amber-700 hover:bg-amber-800">
                Book Your Stay
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;