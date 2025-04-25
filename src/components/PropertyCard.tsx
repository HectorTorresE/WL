import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-80 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl mb-2">{property.name}</h3>
          <div className="flex space-x-4 text-sm mb-2">
            <span>{property.bedrooms} Bedrooms</span>
            <span>•</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span>•</span>
            <span>Up to {property.maxGuests} Guests</span>
          </div>
          <p className="font-medium">{property.price}</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-700 mb-4">{property.shortDescription}</p>
        <Link 
          to={`/properties/${property.id}`}
          className="inline-flex items-center text-amber-800 hover:text-amber-900 transition-colors"
        >
          View Details <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;