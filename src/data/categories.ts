import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'electronics-audio',
    name: 'Electronics & Audio',
    slug: 'electronics-audio',
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    description: 'Wireless noise-cancelling headphones, high-fidelity earbuds, and portable Bluetooth speakers.',
    itemCount: 42,
    popularBrands: ['Sony', 'Bose', 'Apple', 'Marshall', 'JBL']
  },
  {
    id: 'smartphones-tablets',
    name: 'Smartphones & Tablets',
    slug: 'smartphones-tablets',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
    description: 'Flagship smartphones, iPads, Android tablets, and premium tech accessories at outlet rates.',
    itemCount: 38,
    popularBrands: ['Apple', 'Samsung', 'Google', 'Xiaomi']
  },
  {
    id: 'computing-gaming',
    name: 'Computing & Gaming',
    slug: 'computing-gaming',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
    description: 'Laptops, gaming consoles, 4K curved monitors, mechanical keyboards, and PC hardware.',
    itemCount: 51,
    popularBrands: ['Dell', 'Lenovo', 'ASUS', 'Logitech', 'Razer']
  },
  {
    id: 'smart-home',
    name: 'Smart Home & Lighting',
    slug: 'smart-home',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80',
    description: 'Smart ambient lighting starter kits, smart security cams, thermostats, and mesh Wi-Fi.',
    itemCount: 29,
    popularBrands: ['Philips Hue', 'Ring', 'Google Nest', 'TP-Link']
  },
  {
    id: 'kitchen-appliances',
    name: 'Kitchen & Coffee',
    slug: 'kitchen-appliances',
    icon: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
    description: 'Bean-to-cup espresso machines, air fryers, multi-cookers, and precision blenders.',
    itemCount: 47,
    popularBrands: ['DeLonghi', 'Ninja', 'KitchenAid', 'Sage / Breville', 'Philips']
  },
  {
    id: 'floorcare-vacuums',
    name: 'Floorcare & Vacuums',
    slug: 'floorcare-vacuums',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    description: 'Cordless stick vacuum cleaners, robot mop vacuums, and steam cleaners.',
    itemCount: 33,
    popularBrands: ['Dyson', 'Roborock', 'Shark', 'iRobot', 'Dreame']
  },
  {
    id: 'power-tools',
    name: 'Power Tools & DIY',
    slug: 'power-tools',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80',
    description: '18V cordless drill kits, angle grinders, circular saws, and laser measure tools.',
    itemCount: 36,
    popularBrands: ['Bosch Professional', 'Makita', 'DeWalt', 'Milwaukee', 'Kärcher']
  },
  {
    id: 'smartwatches-wearables',
    name: 'Smartwatches & Fitness',
    slug: 'smartwatches-wearables',
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    description: 'GPS multisport smartwatches, fitness trackers, and optical heart rate monitors.',
    itemCount: 24,
    popularBrands: ['Garmin', 'Apple Watch', 'Samsung Galaxy', 'Fitbit']
  },
  {
    id: 'tvs-home-cinema',
    name: 'TVs & Home Cinema',
    slug: 'tvs-home-cinema',
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80',
    description: 'OLED 4K Smart TVs, Dolby Atmos soundbars, and ultra-short throw laser projectors.',
    itemCount: 21,
    popularBrands: ['LG', 'Samsung', 'Sonos', 'TCL', 'Hisense']
  },
  {
    id: 'outdoor-garden',
    name: 'Outdoor & Garden Living',
    slug: 'outdoor-garden',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    description: 'High-pressure washers, robotic lawn mowers, solar generators, and BBQ grills.',
    itemCount: 19,
    popularBrands: ['Kärcher', 'Gardena', 'EcoFlow', 'Weber', 'Worx']
  }
];
