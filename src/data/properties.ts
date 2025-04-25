import { Property } from '../types';

export const properties: Property[] = [
  {
    id: 'casa-macorís',
    name: 'Casa Macorís',
    shortDescription: 'A charming colonial home with a private courtyard and pool.',
    description: 'Casa Macorís is a charming colonial house dating from the early 16th century, lovingly restored to preserve its historic character while providing modern comfort. The house features original wooden beams, coral stone walls, and a beautiful courtyard with a private pool.',
    images: [
      'https://images.pexels.com/photos/3754854/pexels-photo-3754854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6957059/pexels-photo-6957059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      'Private courtyard',
      'Swimming pool',
      'Original colonial architecture',
      'Butler service',
      'Complimentary breakfast'
    ],
    price: 'From $350 per night',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4
  },
  {
    id: 'casa-antillana',
    name: 'Casa Antillana',
    shortDescription: 'Elegant colonial house with modern amenities in the heart of the Colonial City.',
    description: 'Casa Antillana combines the charm of colonial-era architecture with contemporary comfort. This spacious home features vaulted ceilings, a lush garden, and elegantly appointed rooms that reflect the rich history of Santo Domingo\'s Colonial City.',
    images: [
      'https://images.pexels.com/photos/6832221/pexels-photo-6832221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6957087/pexels-photo-6957087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      'Interior garden',
      'Terrace',
      'Concierge service',
      'In-room spa treatments',
      'Complimentary breakfast'
    ],
    price: 'From $420 per night',
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6
  },
  {
    id: 'casa-del-árbol',
    name: 'Casa del Árbol',
    shortDescription: 'A luxurious retreat with a stunning central courtyard and private plunge pool.',
    description: 'Casa del Árbol is centered around a majestic tree that gives the property its name. This exceptional home features high ceilings, a private plunge pool, and beautiful indoor-outdoor living spaces that capture the essence of Dominican colonial architecture.',
    images: [
      'https://images.pexels.com/photos/6958289/pexels-photo-6958289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6775267/pexels-photo-6775267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      'Central courtyard with tree',
      'Private plunge pool',
      'Butler service',
      'Outdoor dining area',
      'Complimentary breakfast'
    ],
    price: 'From $390 per night',
    bedrooms: 2,
    bathrooms: 2.5,
    maxGuests: 5
  },
  {
    id: 'casa-calle-19',
    name: 'Casa Calle 19',
    shortDescription: 'Historic elegance with modern comforts in a prime location.',
    description: 'Casa Calle 19 offers a blend of historic charm and contemporary luxury. Located on one of the Colonial City\'s most picturesque streets, this carefully restored home features original architectural elements, stylish furnishings, and a tranquil courtyard.',
    images: [
      'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6480711/pexels-photo-6480711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6775274/pexels-photo-6775274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    features: [
      'Interior courtyard',
      'Rooftop terrace',
      'Concierge service',
      'In-home chef available',
      'Complimentary breakfast'
    ],
    price: 'From $375 per night',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};