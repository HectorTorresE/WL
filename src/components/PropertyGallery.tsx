import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  name: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, name }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${name} - ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </button>
          
          <img
            src={images[currentImageIndex]}
            alt={`${name} - ${currentImageIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;