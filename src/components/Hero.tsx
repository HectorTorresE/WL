import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-900 mt-4"
            >
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
      
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;