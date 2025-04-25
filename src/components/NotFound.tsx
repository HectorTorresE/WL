import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="font-serif text-6xl text-amber-800 mb-4">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Page Not Found</h2>
        <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;