import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyById } from '../data/properties';
import { Property } from '../types';
import PropertyGallery from '../components/PropertyGallery';
import BookingForm from '../components/BookingForm';
import Button from '../components/ui/Button';
import { ArrowLeft, Bed, Bath, Users } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProperty = getPropertyById(id);
      setProperty(foundProperty || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-6">Property Not Found</h1>
          <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button variant="primary">Return to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header image */}
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${property.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <Link to="/properties" className="inline-flex items-center text-white mb-4 hover:text-amber-300 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to Properties
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl">{property.name}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Property details */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Bed size={20} className="text-amber-800 mr-2" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="text-amber-800 mr-2" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-amber-800 mr-2" />
                  <span>Up to {property.maxGuests} Guests</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {property.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-serif text-xl mb-4">Features & Amenities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-700 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-4">Property Gallery</h3>
                <PropertyGallery 
                  images={property.images} 
                  name={property.name} 
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Booking form */}
            <div className="sticky top-24">
              <div className="bg-amber-50 p-4 mb-6 text-center">
                <p className="text-lg font-medium text-amber-900">{property.price}</p>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;