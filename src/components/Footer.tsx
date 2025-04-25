import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl mb-4">Casas del XVI</h2>
            <p className="text-gray-300 mb-4">
              A collection of luxury colonial houses in the heart of Santo Domingo's Colonial City.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/experience" className="text-gray-300 hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Calle Padre Billini</p>
              <p>Santo Domingo, Dominican Republic</p>
              <p className="mt-2">+1 (809) 555-1234</p>
              <p className="mt-2">
                <a href="mailto:info@casasdelxvi.com" className="hover:text-white transition-colors">
                  info@casasdelxvi.com
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates and special offers.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full sm:w-auto bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit"
                className="mt-2 sm:mt-0 px-4 py-2 bg-amber-700 hover:bg-amber-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Casas del XVI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;