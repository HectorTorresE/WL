import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`text-sm uppercase tracking-wider hover:text-amber-700 transition-colors ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Link to="/" className="relative z-10 mx-4">
            <h1 className={`font-serif text-2xl md:text-3xl ${isScrolled ? 'text-amber-900' : 'text-white'}`}>
              Casas del XVI
            </h1>
          </Link>

          <div className="flex-1 flex justify-end">
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.slice(3).map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`text-sm uppercase tracking-wider hover:text-amber-700 transition-colors ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/book"
                    className={`text-sm uppercase tracking-wider hover:text-amber-700 transition-colors ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    Book Now
                  </Link>
                </li>
                <li>
                  <div className="flex space-x-2">
                    <button 
                      className={`text-sm uppercase tracking-wider hover:text-amber-700 transition-colors ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      EN
                    </button>
                    <span className={isScrolled ? 'text-gray-800' : 'text-white'}>|</span>
                    <button 
                      className={`text-sm uppercase tracking-wider hover:text-amber-700 transition-colors ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      ES
                    </button>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <ul className="flex flex-col space-y-6 mt-16">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-gray-800 text-xl uppercase tracking-wider hover:text-amber-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/book"
                className="text-gray-800 text-xl uppercase tracking-wider hover:text-amber-700"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </li>
            <li>
              <div className="flex space-x-4">
                <button className="text-gray-800 text-xl uppercase tracking-wider hover:text-amber-700">
                  EN
                </button>
                <span className="text-gray-800">|</span>
                <button className="text-gray-800 text-xl uppercase tracking-wider hover:text-amber-700">
                  ES
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;