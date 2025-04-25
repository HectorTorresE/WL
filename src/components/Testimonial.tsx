import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position }) => {
  return (
    <div className="bg-gray-50 p-8 text-center">
      <blockquote className="font-serif text-xl md:text-2xl text-gray-800 italic mb-6">
        "{quote}"
      </blockquote>
      <div className="text-gray-600">
        <p className="font-medium">{author}</p>
        {position && <p className="text-sm">{position}</p>}
      </div>
    </div>
  );
};

export default Testimonial;