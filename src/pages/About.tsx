import React from 'react';
import Hero from '../components/Hero';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Casas del XVI"
        subtitle="A unique collection of historic colonial houses"
        backgroundImage="https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Casas del XVI is a unique collection of houses dating back to the 16th century colonial era, 
              located in the heart of Santo Domingo's Colonial City - the first European settlement in the Americas 
              and a UNESCO World Heritage site.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Each of our houses has been meticulously restored and designed to preserve their original 
              architecture and historical significance, while providing the comfort and amenities expected by today's travelers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our mission is to offer guests an authentic experience of Dominican colonial life, 
              combined with the highest standards of luxury hospitality.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6480693/pexels-photo-6480693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Colonial Architecture"
                className="w-full h-auto rounded"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Colonial Heritage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Colonial City of Santo Domingo, founded in 1496, represents the oldest European 
                urban settlement in the Americas. Its grid pattern became the model for almost all town 
                planners in the New World.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The houses of Casas del XVI are prime examples of the colonial architecture of this era, 
                featuring characteristic elements such as coral stone walls, wooden beams, interior courtyards, 
                and beautiful period details that have been carefully preserved.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By staying at Casas del XVI, guests become part of this living history, experiencing 
                the authentic atmosphere of colonial Santo Domingo while enjoying modern luxury.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">The Casas del XVI Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              What sets Casas del XVI apart is our commitment to providing an authentic 
              yet luxurious experience. From our dedicated butlers to our carefully curated 
              activities, every aspect of your stay is designed to immerse you in the rich 
              culture and history of Santo Domingo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 font-serif text-2xl">1</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Personalized Service</h3>
              <p className="text-gray-700">
                Each house comes with a dedicated butler who will attend to your every need, 
                from arranging transportation to organizing private dining experiences.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 font-serif text-2xl">2</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Curated Experiences</h3>
              <p className="text-gray-700">
                Our concierge team can arrange exclusive cultural experiences, 
                from private tours of historic sites to cooking classes featuring local cuisine.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 font-serif text-2xl">3</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Authentic Luxury</h3>
              <p className="text-gray-700">
                We believe luxury is in the details. From handcrafted furniture to locally sourced amenities, 
                every aspect of our houses reflects our commitment to authenticity and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;