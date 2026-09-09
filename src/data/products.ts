import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-sony-wh1000xm5',
    sku: 'SNY-XM5-BLK',
    title: 'Sony WH-1000XM5 Wireless Active Noise-Cancelling Headphones',
    brand: 'Sony',
    categoryId: 'electronics-audio',
    categoryName: 'Electronics & Audio',
    price: 249,
    originalMSRP: 419,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 318,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 6,
    featured: true,
    dealOfTheDay: true,
    badge: 'DEAL OF THE DAY',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Industry-leading noise canceling with two processors and 8 microphones for unprecedented quiet. Crystal clear hands-free calling with 4 beamforming microphones and advanced audio signal processing.',
    keyFeatures: [
      'Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)',
      'Ultra-comfortable, lightweight design with soft fit leather',
      'Multipoint connection allows you to quickly switch between devices',
      'Intuitive touch control settings to pause play skip tracks and control volume'
    ],
    specifications: {
      'Battery Life': '30 hours (ANC on)',
      'Charging Port': 'USB-C Fast Charge',
      'Weight': '250 grams',
      'Bluetooth Version': '5.2 with LDAC support',
      'Warranty': '24 Months European Manufacturer Warranty'
    },
    variants: [
      { id: 'v-black', name: 'Color', value: 'Midnight Black' },
      { id: 'v-silver', name: 'Color', value: 'Platinum Silver' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Venlo Overstock Lot #849',
    reviews: [
      {
        id: 'r1',
        userName: 'Lars van den Berg',
        userCountry: 'Netherlands',
        rating: 5,
        date: '2026-03-02',
        title: 'Insane discount, arrived in 24 hours!',
        comment: 'Factory sealed box with original Sony seal intact. Saved €170 compared to retail stores in Amsterdam. Sound quality is astonishing.',
        verifiedPurchase: true
      },
      {
        id: 'r2',
        userName: 'Stefan Meier',
        userCountry: 'Germany',
        rating: 5,
        date: '2026-02-28',
        title: 'Perfect condition, top tier ANC',
        comment: 'I use them on the train to Frankfurt daily. Completely eliminates engine roar. Fast delivery from Venlo.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-delonghi-magnifica',
    sku: 'DLG-MAG-S',
    title: 'DeLonghi Magnifica S Automatic Bean-to-Cup Espresso Machine',
    brand: 'DeLonghi',
    categoryId: 'kitchen-appliances',
    categoryName: 'Kitchen & Coffee',
    price: 279,
    originalMSRP: 489,
    discountPercentage: 43,
    rating: 4.9,
    reviewCount: 420,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Freshly ground coffee beans at the touch of a button. Features traditional manual milk frother for velvety cappuccinos and caffe lattes, customized coffee strength, and removable brewing unit.',
    keyFeatures: [
      'Integrated silent grinder with 13 adjustable settings',
      'Thermoblock system maintains water at optimal brewing temperature',
      'Pre-brewing aroma system extracts rich crema and bold flavor',
      'Automatic descaling, cleaning and rinsing programs'
    ],
    specifications: {
      'Pump Pressure': '15 bar',
      'Water Tank Capacity': '1.8 Liters',
      'Bean Container': '250 grams',
      'Power Consumption': '1450 Watts',
      'Dimensions': '23.8 x 43.0 x 35.1 cm'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Venlo Major Retail Overstock',
    reviews: [
      {
        id: 'r3',
        userName: 'Camille Laurent',
        userCountry: 'France',
        rating: 5,
        date: '2026-03-01',
        title: 'Best espresso machine for the money',
        comment: 'Authentic Italian espresso with incredible crema every morning. Very easy to clean.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-apple-ipad-air-m2',
    sku: 'APL-IPA-M2-128',
    title: 'Apple iPad Air 11-inch (M2 Chip, Liquid Retina Display, 128GB Wi-Fi)',
    brand: 'Apple',
    categoryId: 'smartphones-tablets',
    categoryName: 'Smartphones & Tablets',
    price: 499,
    originalMSRP: 699,
    discountPercentage: 29,
    rating: 4.9,
    reviewCount: 189,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: true,
    badge: 'APPLE CLEARANCE',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Blazing-fast Apple M2 chip brings breakthrough performance to iPad Air. Featuring a stunning 11-inch Liquid Retina display with P3 wide color and True Tone, landscape 12MP front camera, and Wi-Fi 6E.',
    keyFeatures: [
      'Apple M2 chip with 8-core CPU and 9-core GPU',
      '11-inch Liquid Retina display with antireflective coating',
      'Supports Apple Pencil Pro and Magic Keyboard',
      'All-day battery life with USB-C connector'
    ],
    specifications: {
      'Processor': 'Apple M2 Chip',
      'Display': '11" Liquid Retina (2360x1640)',
      'Storage': '128 GB',
      'Weight': '462 grams',
      'Operating System': 'iPadOS'
    },
    variants: [
      { id: 'v-spacegray', name: 'Color', value: 'Space Gray' },
      { id: 'v-starlight', name: 'Color', value: 'Starlight' },
      { id: 'v-blue', name: 'Color', value: 'Blue' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'EU Distributor Overstock Batch #112',
    reviews: [
      {
        id: 'r4',
        userName: 'Matteo Rossi',
        userCountry: 'Italy',
        rating: 5,
        date: '2026-02-25',
        title: 'Authentic sealed Apple box, super fast!',
        comment: 'Checked serial on Apple website, full 1-year global Apple warranty + 2 years EU statutory. Incredible deal.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-dyson-v15-detect',
    sku: 'DYS-V15-ABS',
    title: 'Dyson V15 Detect Absolute Cordless Vacuum Cleaner with Laser Illumination',
    brand: 'Dyson',
    categoryId: 'floorcare-vacuums',
    categoryName: 'Floorcare & Vacuums',
    price: 469,
    originalMSRP: 799,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 254,
    condition: 'Pristine Open Box',
    inStock: true,
    stockCount: 3,
    featured: true,
    badge: 'ONLY 3 LEFT',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Dyson’s most powerful intelligent cordless vacuum. Laser reveals invisible dust on hard floors. An acoustic piezo sensor measures and counts microscopic dust particles, automatically increasing suction power when needed.',
    keyFeatures: [
      'Up to 60 minutes of fade-free run time',
      'Laser Slim Fluffy cleaner head reveals microscopic dust',
      'Digital Motorbar cleaner head de-tangles hair automatically',
      'LCD screen displays scientific proof of a deep clean in real time'
    ],
    specifications: {
      'Suction Power': '240 AW (Air Watts)',
      'Bin Volume': '0.77 Liters',
      'Charge Time': '4.5 Hours',
      'Weight': '3.1 kg',
      'Filtration': '99.99% down to 0.3 microns'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Venlo Central Outlet Batch',
    reviews: [
      {
        id: 'r5',
        userName: 'Emma Nilsson',
        userCountry: 'Sweden',
        rating: 5,
        date: '2026-03-03',
        title: 'Unbelievable vacuum. Completely like new.',
        comment: 'Item was open-box but looks 100% brand new with all attachments sealed in plastic. Saved over €300.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-bosch-18v-drill-set',
    sku: 'BSH-GSB-18V-KIT',
    title: 'Bosch Professional 18V Combi Drill & Impact Driver Twin Pack with 2x 4.0Ah ProCORE',
    brand: 'Bosch Professional',
    categoryId: 'power-tools',
    categoryName: 'Power Tools & DIY',
    price: 189,
    originalMSRP: 349,
    discountPercentage: 46,
    rating: 4.9,
    reviewCount: 165,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 8,
    featured: false,
    badge: 'PRO TOOL DEAL',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Heavy duty brushless cordless combi drill (GSB 18V-55) paired with high-torque impact driver in durable L-BOXX carrying case with two ProCORE18V high-density batteries and fast charger.',
    keyFeatures: [
      'Brushless motor ensures longer lifetime and higher battery efficiency',
      'All-metal 13mm Roehm chuck for rigorous masonry and metal drilling',
      'Includes 2x ProCORE 18V 4.0Ah high-performance compact batteries',
      'Packed in official stackable Bosch L-BOXX system'
    ],
    specifications: {
      'Voltage': '18 Volts',
      'Max Torque': '55 Nm (Combi) / 200 Nm (Impact)',
      'Chuck Capacity': '1.5 - 13 mm',
      'Battery System': 'Bosch Professional 18V Alliance'
    },
    warrantyMonths: 36,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Hardware Lot #09',
    reviews: [
      {
        id: 'r6',
        userName: 'Janusz Kowalski',
        userCountry: 'Poland',
        rating: 5,
        date: '2026-02-18',
        title: 'Super solid Bosch gear',
        comment: 'Genuine Bosch blue professional line. Shipped from Venlo to Poznan in 2 days. Batteries hold full charge.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-garmin-fenix-7x',
    sku: 'GRM-FNX-7X-SLR',
    title: 'Garmin Fēnix 7X Solar Multisport GPS Smartwatch with Power Glass',
    brand: 'Garmin',
    categoryId: 'smartwatches-wearables',
    categoryName: 'Smartwatches & Fitness',
    price: 439,
    originalMSRP: 799,
    discountPercentage: 45,
    rating: 4.8,
    reviewCount: 142,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'OUTLET SPECIAL',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ultimate rugged outdoor GPS watch with Power Glass solar charging lens, built-in LED flashlight, preloaded TopoActive Europe maps, multi-GNSS tracking, and 24/7 health monitoring.',
    keyFeatures: [
      'Solar powered battery gives up to 37 days in smartwatch mode',
      'Built-in multi-LED flashlight with variable intensities and red safety light',
      'Advanced training metrics including VO2 max, recovery advisor, stamina',
      'Garmin Pay contactless payments and offline music storage'
    ],
    specifications: {
      'Case Size': '51 mm',
      'Lens Material': 'Power Glass Solar',
      'Water Rating': '10 ATM (100 meters)',
      'Connectivity': 'Bluetooth, ANT+, Wi-Fi'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Sporting Retail Overstock #44',
    reviews: [
      {
        id: 'r7',
        userName: 'Markus Lindqvist',
        userCountry: 'Finland',
        rating: 5,
        date: '2026-02-14',
        title: 'Phenomenal battery life',
        comment: 'Lasts for over 3 weeks between charges. The built-in flashlight is surprisingly handy on trail runs.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-philips-hue-starter-kit',
    sku: 'PHL-HUE-E27-4K',
    title: 'Philips Hue White and Color Ambiance Starter Kit (4x E27 Bulbs + Hue Bridge + Smart Switch)',
    brand: 'Philips Hue',
    categoryId: 'smart-home',
    categoryName: 'Smart Home & Lighting',
    price: 119,
    originalMSRP: 199,
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 210,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 12,
    featured: false,
    badge: 'POPULAR',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Transform your home with 16 million vibrant colors and warm-to-cool white light. Sync your lights with movies, gaming, and music, or set automated circadian sleep routines.',
    keyFeatures: [
      'Includes 4x E27 1100 Lumen Color Bulbs, 1x Hue Bridge, and 1x Wireless Dimmer Switch',
      'Compatible with Apple HomeKit, Google Assistant, Amazon Alexa, and Matter',
      'Create personalized lighting scenes and scheduled wake-up routines',
      'Expandable to up to 50 lights and accessories on a single Hue Bridge'
    ],
    specifications: {
      'Fitting': 'E27 Edison Screw',
      'Brightness': '1100 Lumens per bulb',
      'Colors': '16 Million + Tunable White (2000K-6500K)',
      'Protocol': 'Zigbee + Bluetooth + Matter'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Consumer Electronics Liquidation #201',
    reviews: [
      {
        id: 'r8',
        userName: 'Sophie Martin',
        userCountry: 'Belgium',
        rating: 5,
        date: '2026-03-04',
        title: 'Seamless setup with HomeKit',
        comment: 'Replaced all living room bulbs. The colors are rich and vibrant, bridge paired immediately.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-marshall-stanmore-iii',
    sku: 'MSH-STM-III-BRN',
    title: 'Marshall Stanmore III Bluetooth Home Speaker with Immersive Stereo Sound',
    brand: 'Marshall',
    categoryId: 'electronics-audio',
    categoryName: 'Electronics & Audio',
    price: 239,
    originalMSRP: 399,
    discountPercentage: 40,
    rating: 4.8,
    reviewCount: 98,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: false,
    badge: 'ICONIC DESIGN',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The legendary heavyweight of the Marshall home line-up. Re-engineered with an even wider soundstage that delivers expansive Marshall signature sound that fills any room.',
    keyFeatures: [
      'Outward-angled tweeters and updated waveguides deliver consistently solid sound',
      'Dynamic Loudness adjusts tonal balance to ensure music sounds brilliant at every volume',
      'Bluetooth 5.2 and 3.5 mm auxiliary input + RCA input for record players',
      'Iconic vintage rock-and-roll styling with brass analog control knobs'
    ],
    specifications: {
      'Power Output': '80 Watts Class D',
      'Frequency Range': '45–20,000 Hz',
      'Inputs': '3.5mm, RCA, Bluetooth 5.2',
      'Dimensions': '350 x 203 x 188 mm',
      'Weight': '4.25 kg'
    },
    variants: [
      { id: 'v-black', name: 'Color', value: 'Black' },
      { id: 'v-cream', name: 'Color', value: 'Vintage Cream' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'European Audio Warehouse Liquidation',
    reviews: [
      {
        id: 'r9',
        userName: 'Oliver Davies',
        userCountry: 'United Kingdom',
        rating: 5,
        date: '2026-02-27',
        title: 'Superb room-filling sound and look',
        comment: 'Looks incredible on the sideboard and the bass punch is remarkable. Arrived securely packed.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-samsung-galaxy-s24-plus',
    sku: 'SMG-S24P-256',
    title: 'Samsung Galaxy S24+ 5G (256GB, 12GB RAM, Galaxy AI Enabled, Onyx Black)',
    brand: 'Samsung',
    categoryId: 'smartphones-tablets',
    categoryName: 'Smartphones & Tablets',
    price: 649,
    originalMSRP: 1049,
    discountPercentage: 38,
    rating: 4.9,
    reviewCount: 215,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'FLAGSHIP SALE',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Elevate your smartphone experience with Galaxy AI. Features a brilliant 6.7" QHD+ Dynamic AMOLED 2X 120Hz display, 50MP triple camera system with generative photo editing, and armor aluminum frame.',
    keyFeatures: [
      'Galaxy AI: Circle to Search with Google, Live Translate, and Note Assist',
      '6.7-inch QHD+ display with 2600 nits peak outdoor brightness',
      'Massive 4900mAh battery with 45W super-fast wired charging',
      '7 years of Android OS and security updates'
    ],
    specifications: {
      'Display': '6.7" Dynamic AMOLED 2X 120Hz',
      'Camera': '50MP Main + 12MP Ultra-Wide + 10MP 3x Telephoto',
      'Storage': '256 GB UFS 4.0',
      'RAM': '12 GB',
      'Water Resistance': 'IP68'
    },
    variants: [
      { id: 'v-black', name: 'Color', value: 'Onyx Black' },
      { id: 'v-grey', name: 'Color', value: 'Marble Gray' },
      { id: 'v-violet', name: 'Color', value: 'Cobalt Violet' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Carrier Overstock Clearance #882',
    reviews: [
      {
        id: 'r10',
        userName: 'Daniel Becker',
        userCountry: 'Germany',
        rating: 5,
        date: '2026-03-05',
        title: 'Original EU stock, dual SIM, brilliant',
        comment: 'Completely sealed in factory shrink wrap. Saved €400 off standard German retail price. Circle to search is magic.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-ninja-foodi-dual-zone',
    sku: 'NNJ-AF400EU',
    title: 'Ninja Foodi MAX DualZone 9.5L Air Fryer with 2 Independent Cooking Drawers',
    brand: 'Ninja',
    categoryId: 'kitchen-appliances',
    categoryName: 'Kitchen & Coffee',
    price: 149,
    originalMSRP: 269,
    discountPercentage: 45,
    rating: 4.9,
    reviewCount: 380,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 7,
    featured: false,
    badge: 'KITCHEN FAVORITE',
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Cook 2 different foods in 2 ways, and finish both at the exact same time with the SYNC function. Extra-large 9.5L capacity easily feeds 8+ people or cooks a whole 2kg roast chicken in each drawer.',
    keyFeatures: [
      '2 independent cooking zones with custom temperatures and timers',
      '6 versatile cooking functions: Air Fry, Max Crisp, Roast, Bake, Reheat, Dehydrate',
      'Up to 75% faster than standard European fan ovens with 75% less fat',
      'Dishwasher-safe non-stick crisper plates and drawers'
    ],
    specifications: {
      'Capacity': '9.5 Liters (2x 4.75L)',
      'Wattage': '2470 Watts',
      'Temperature Range': '40°C to 240°C',
      'Weight': '8.8 kg'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Housewares Wholesale Clearance Lot #51',
    reviews: [
      {
        id: 'r11',
        userName: 'Laura Janssen',
        userCountry: 'Netherlands',
        rating: 5,
        date: '2026-02-20',
        title: 'Replaced our oven completely',
        comment: 'Chips and salmon cooked simultaneously, finished at the exact same second. Incredible value on this shop.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-karcher-k5-power-control',
    sku: 'KRC-K5-PWR',
    title: 'Kärcher K 5 Power Control High Pressure Washer (145 Bar with G 160 Q Gun)',
    brand: 'Kärcher',
    categoryId: 'outdoor-garden',
    categoryName: 'Outdoor & Garden Living',
    price: 219,
    originalMSRP: 369,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 112,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: false,
    badge: 'SPRING DEAL',
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'For effortless cleaning of patios, driveways, cars, and garden stone walls. Water-cooled motor provides superior reliability and long service life. Integrated Plug "n" Clean detergent system.',
    keyFeatures: [
      'Power Control spray gun with manual pressure level display',
      'Vario Power Jet lance and Dirt Blaster rotary nozzle included',
      'Water-cooled induction motor for maximum endurance',
      'Telescopic handle made of high-grade aluminum'
    ],
    specifications: {
      'Max Pressure': '145 Bar',
      'Flow Rate': '500 L/h',
      'Area Performance': '40 m²/h',
      'Hose Length': '10 meters'
    },
    warrantyMonths: 36,
    freeShippingEligible: true,
    sourceLot: 'Hardware Distribution Overstock',
    reviews: [
      {
        id: 'r12',
        userName: 'Christoph Wagner',
        userCountry: 'Austria',
        rating: 5,
        date: '2026-03-02',
        title: 'Cleaned a 60m² terrace in under an hour',
        comment: 'Plenty of power to blast away years of moss and grime. Arrived well packed in original yellow box.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-lg-oled-55-c3',
    sku: 'LG-OLED55C3-4K',
    title: 'LG 55-inch OLED evo C3 4K Smart TV with α9 Gen6 AI Processor & Dolby Vision',
    brand: 'LG',
    categoryId: 'tvs-home-cinema',
    categoryName: 'TVs & Home Cinema',
    price: 899,
    originalMSRP: 1599,
    discountPercentage: 44,
    rating: 4.9,
    reviewCount: 178,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 2,
    featured: true,
    badge: 'HOT DEAL -700€',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Self-lit OLED pixels shine brighter with Brightness Booster. Infinite contrast, 100% color volume, ultra-fast 0.1ms response time, 4x HDMI 2.1 ports for 120Hz 4K gaming, and Dolby Atmos audio.',
    keyFeatures: [
      'OLED evo technology powered by α9 AI Processor Gen6',
      'Dolby Vision and Dolby Atmos cinematic sound and picture',
      'Perfect for PS5 & Xbox Series X with VRR, G-Sync, and FreeSync Premium',
      'webOS smart platform with Magic Remote and hands-free voice control'
    ],
    specifications: {
      'Screen Size': '55 inches (139 cm)',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Refresh Rate': '120Hz Native',
      'HDR Format': 'Dolby Vision, HDR10, HLG',
      'Audio Output': '40W 2.2 Channel'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Consumer Electronics Retail Liquidation #990',
    reviews: [
      {
        id: 'r13',
        userName: 'Jean-Luc Dupont',
        userCountry: 'France',
        rating: 5,
        date: '2026-02-22',
        title: 'Mind-blowing picture quality',
        comment: 'Black levels are infinite and gaming on PS5 at 120Hz is buttery smooth. Freight delivery was on time with text updates.',
        verifiedPurchase: true
      }
    ]
  }
];
