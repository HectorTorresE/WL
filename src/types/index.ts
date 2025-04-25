export interface Property {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  price: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
}

export interface NavItem {
  label: string;
  href: string;
}