export type Restaurant = {
  id: number;
  name: string;
  category: string;
  time: string;
  rating: number;
  price: string;
  image: string;
  address: string;
  description: string;
};

export const categories = [
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burgers', emoji: '🍔' },
  { name: 'Kebab', emoji: '🌯' },
  { name: 'Sushi', emoji: '🍣' },
  { name: 'Healthy', emoji: '🥗' },
  { name: 'Coffee', emoji: '☕' },
  { name: 'Essentials', emoji: '🛒' },
  { name: 'Parcel', emoji: '📦' },
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Mallow Pizza Hub',
    category: 'Pizza',
    time: '20-30 min',
    rating: 4.8,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    address: 'Shortcastle Street, Mallow',
    description: 'Fresh pizza, classic toppings and quick delivery around the centre.',
  },
  {
    id: 2,
    name: 'Shortcastle Grill',
    category: 'Burgers',
    time: '25-35 min',
    rating: 4.7,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    address: 'Town Centre, Mallow',
    description: 'Premium burgers, loaded fries, and local favourites.',
  },
  {
    id: 3,
    name: 'Sushi Mallow',
    category: 'Sushi',
    time: '30-40 min',
    rating: 4.9,
    price: '€€€',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    address: 'Mallow Town Centre',
    description: 'Fresh sushi, rice bowls and healthy choices delivered fast.',
  },
  {
    id: 4,
    name: 'Coffee Corner',
    category: 'Coffee',
    time: '15-20 min',
    rating: 4.6,
    price: '€',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    address: 'Main Street, Mallow',
    description: 'Coffee, breakfast and light bites for the whole day.',
  },
  {
    id: 5,
    name: 'Green Bowl',
    category: 'Healthy',
    time: '20-30 min',
    rating: 4.8,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    address: 'Mallow West',
    description: 'Salads, wraps and fresh plates for a lighter approach to food.',
  },
  {
    id: 6,
    name: 'Parcel Mallow',
    category: 'Parcel',
    time: '30-60 min',
    rating: 4.7,
    price: '€€',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    address: 'Delivery zones across Mallow',
    description: 'Fast local parcel, document and essential delivery support.',
  },
];
