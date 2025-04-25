import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent. We will get back to you shortly.');
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundImage="https://images.pexels.com/photos/6957053/pexels-photo-6957053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Have questions about our properties or planning a visit to Santo Domingo?
                Our team is here to help with any inquiries you may have.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <address className="not-italic text-gray-700">
                      <p>Calle Padre Billini</p>
                      <p>Santo Domingo, Dominican Republic</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (809) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@casasdelxvi.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="font-serif text-xl mb-4">Opening Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md">
                <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-gray-900">Find Us</h2>
          <div className="h-96 bg-gray-200">
            {/* Here you would typically add a map component */}
            <div className="w-full h-full flex items-center justify-center bg-amber-50">
              <p className="text-gray-700">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;