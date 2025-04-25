import React, { useState } from 'react';
import Button from './ui/Button';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    property: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    // Here you would typically handle the form submission to a backend
    alert('Booking request submitted. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      property: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md">
      <h3 className="font-serif text-2xl mb-6 text-center">Book Your Stay</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">
            Property
          </label>
          <select
            id="property"
            name="property"
            value={formData.property}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Select a property</option>
            <option value="casa-macorís">Casa Macorís</option>
            <option value="casa-antillana">Casa Antillana</option>
            <option value="casa-del-árbol">Casa del Árbol</option>
            <option value="casa-calle-19">Casa Calle 19</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
            Check In
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
            Check Out
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        ></textarea>
      </div>
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Request Booking
      </Button>
    </form>
  );
};

export default BookingForm;