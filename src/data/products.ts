import { Product } from '../types';

import palletElectronicsLot from '../assets/images/sealed_pallet_lot_1788994800574.jpg';
import palletAppliancesLot from '../assets/images/pallet_appliances_lot_1788994823585.jpg';
import palletToolsLot from '../assets/images/pallet_tools_lot_1788994837160.jpg';
import palletApparelLot from '../assets/images/pallet_apparel_lot_1788994849787.jpg';
import palletTvScreensLot from '../assets/images/pallet_tv_screens_1788994861804.jpg';
import palletManifestSeal from '../assets/images/pallet_manifest_seal_1788994875278.jpg';
import palletGamingLot from '../assets/images/pallet_gaming_lot_1788994889705.jpg';
import palletVacuumLot from '../assets/images/pallet_vacuum_lot_1788994901223.jpg';
import palletSmartHomeLot from '../assets/images/pallet_smarthome_lot_1788994914615.jpg';
import palletOutdoorLot from '../assets/images/pallet_outdoor_lot_1788994925936.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-plt-01-sony-wh1000xm5',
    palletNumber: 1,
    palletCode: 'PLT-01',
    sku: 'PLT-01-SNY-XM5',
    title: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones (Pallet Lot #01)',
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
    badge: 'PALLET #01 • 41% OFF',
    images: [
      palletElectronicsLot,
      palletManifestSeal
    ],
    description: 'Industry-leading noise canceling with two processors and 8 microphones for unprecedented quiet. Crystal clear hands-free calling with 4 beamforming microphones and advanced audio signal processing.',
    keyFeatures: [
      'Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)',
      'Ultra-comfortable, lightweight design with soft fit leather',
      'Multipoint connection allows you to quickly switch between devices',
      'Intuitive touch control settings to pause play skip tracks and control volume'
    ],
    specifications: {
      'Pallet Reference': 'PLT-01 / Lot 849',
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
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-01',
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
      }
    ]
  },
  {
    id: 'prod-plt-02-sonos-move-2',
    palletNumber: 2,
    palletCode: 'PLT-02',
    sku: 'PLT-02-SNS-MOV2',
    title: 'Sonos Move 2 Portable Smart Speaker with Spatial Audio (Pallet Lot #02)',
    brand: 'Sonos',
    categoryId: 'electronics-audio',
    categoryName: 'Electronics & Audio',
    price: 289,
    originalMSRP: 499,
    discountPercentage: 42,
    rating: 4.8,
    reviewCount: 142,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: true,
    badge: 'PALLET #02 • 42% OFF',
    images: [
      palletSmartHomeLot,
      palletManifestSeal
    ],
    description: 'Upgraded inside and out, Sonos Move 2 delivers heart-pumping stereo sound wherever you go. IP56 weather resistance makes it durable for outdoor patios, while 24-hour battery life keeps the party going.',
    keyFeatures: [
      'Trueplay tuning dynamically adapts sound to your specific environment',
      'Dual tweeters create a spacious stereo soundstage with ultra-crisp highs',
      'Built-in handle and IP56 dust and water resistance for garden/patio use',
      'Wi-Fi and Bluetooth simultaneous connectivity with USB-C device charging'
    ],
    specifications: {
      'Pallet Reference': 'PLT-02 / Lot 850',
      'Battery Life': '24 continuous hours',
      'Weather Resistance': 'IP56 rated',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.0, Apple AirPlay 2',
      'Weight': '3.0 kg',
      'Warranty': '24 Months European Warranty'
    },
    variants: [
      { id: 'v-sns-white', name: 'Color', value: 'Matte White' },
      { id: 'v-sns-black', name: 'Color', value: 'Shadow Black' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-02',
    reviews: [
      {
        id: 'r2',
        userName: 'Matteo Rossi',
        userCountry: 'Italy',
        rating: 5,
        date: '2026-02-28',
        title: 'Authentic Sonos at nearly half price',
        comment: 'Comes in original factory packaging with Dutch serial number. Paired seamlessly with my existing Sonos beam setup.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-03-apple-ipad-air-m2',
    palletNumber: 3,
    palletCode: 'PLT-03',
    sku: 'PLT-03-APL-IPDAIR',
    title: 'Apple iPad Air 11-inch M2 Chip 128GB Wi-Fi (Pallet Lot #03)',
    brand: 'Apple',
    categoryId: 'smartphones-tablets',
    categoryName: 'Smartphones & Tablets',
    price: 499,
    originalMSRP: 699,
    discountPercentage: 29,
    rating: 4.9,
    reviewCount: 420,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'PALLET #03 • APPLE M2',
    images: [
      palletElectronicsLot,
      palletManifestSeal
    ],
    description: 'The redesigned 11-inch iPad Air is supercharged by the astonishingly fast Apple M2 chip. It features a stunning Liquid Retina display, a new landscape camera perfect for FaceTime calls, and blazing-fast Wi-Fi 6E.',
    keyFeatures: [
      'Apple M2 chip with 8-core CPU and 10-core GPU',
      'Stunning 11-inch Liquid Retina display with P3 wide color and True Tone',
      'Landscape 12MP Ultra Wide front camera with Center Stage',
      'Compatible with Apple Pencil Pro and Magic Keyboard'
    ],
    specifications: {
      'Pallet Reference': 'PLT-03 / Lot 851',
      'Processor': 'Apple M2 Silicon',
      'Storage': '128GB Flash',
      'Display': '11-inch LED-backlit Multi-Touch display with IPS',
      'Weight': '462 grams',
      'Warranty': '12 Months Official Apple Warranty'
    },
    variants: [
      { id: 'v-space-gray', name: 'Color', value: 'Space Gray' },
      { id: 'v-starlight', name: 'Color', value: 'Starlight' },
      { id: 'v-blue', name: 'Color', value: 'Sky Blue' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-03',
    reviews: [
      {
        id: 'r3',
        userName: 'Chloe Dubois',
        userCountry: 'France',
        rating: 5,
        date: '2026-03-01',
        title: 'Original EU retail packaging with AppleCare eligible',
        comment: 'Activated on Apple website without any issue, full manufacturer coverage showed up immediately. Extraordinary bargain.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-04-samsung-galaxy-s24-plus',
    palletNumber: 4,
    palletCode: 'PLT-04',
    sku: 'PLT-04-SSG-S24P',
    title: 'Samsung Galaxy S24+ 5G 256GB Dual-SIM with Galaxy AI (Pallet Lot #04)',
    brand: 'Samsung',
    categoryId: 'smartphones-tablets',
    categoryName: 'Smartphones & Tablets',
    price: 649,
    originalMSRP: 1149,
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 215,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 3,
    featured: true,
    badge: 'PALLET #04 • 43% OFF',
    images: [
      palletElectronicsLot,
      palletManifestSeal
    ],
    description: 'Meet Galaxy S24+, the ultimate smartphone with built-in Galaxy AI. Search like never before, get real-time voice translation on phone calls, and enhance your photos to perfection with generative editing.',
    keyFeatures: [
      '6.7" QHD+ Dynamic AMOLED 2X Display with adaptive 1-120Hz refresh',
      'Armor Aluminum frame with IP68 water and dust resistance',
      'Triple Pro-Grade Camera: 50MP Wide with OIS, 10MP Telephoto 3x, 12MP Ultra-Wide',
      'Long-lasting 4900 mAh battery with 45W super-fast wired charging'
    ],
    specifications: {
      'Pallet Reference': 'PLT-04 / Lot 852',
      'Storage / RAM': '256GB / 12GB LPDDR5X',
      'Display': '6.7-inch 3120 x 1440 QHD+ 2600 nits peak',
      'OS': 'Android 14 with One UI 6.1 (7 Years of OS Updates)',
      'Dual SIM': 'Nano-SIM + eSIM supported',
      'Warranty': '24 Months European Samsung Warranty'
    },
    variants: [
      { id: 'v-onyx-black', name: 'Color', value: 'Onyx Black' },
      { id: 'v-marble-gray', name: 'Color', value: 'Marble Gray' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-04',
    reviews: [
      {
        id: 'r4',
        userName: 'Klaus Richter',
        userCountry: 'Germany',
        rating: 5,
        date: '2026-02-27',
        title: 'Brand new European unlocked unit',
        comment: 'Original factory seals on the Samsung box. Unlocked for all European networks (tested with Telekom Germany). Fast delivery.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-05-nintendo-switch-oled',
    palletNumber: 5,
    palletCode: 'PLT-05',
    sku: 'PLT-05-NTD-SWOLED',
    title: 'Nintendo Switch OLED Console & Super Mario Kart 8 Bundle (Pallet Lot #05)',
    brand: 'Nintendo',
    categoryId: 'computing-gaming',
    categoryName: 'Computing & Gaming',
    price: 239,
    originalMSRP: 369,
    discountPercentage: 35,
    rating: 4.9,
    reviewCount: 340,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 7,
    featured: true,
    badge: 'PALLET #05 • BUNDLE PACK',
    images: [
      palletGamingLot,
      palletManifestSeal
    ],
    description: 'Feast your eyes on vivid colors and crisp contrast with a 7-inch OLED screen. The wide adjustable stand allows comfortable viewing in tabletop mode, while 64GB of internal storage gives ample room for games.',
    keyFeatures: [
      'Vibrant 7-inch OLED screen with deep blacks and intense colors',
      'Wide, adjustable kickstand for optimal tabletop multiplayer viewing',
      'Wired LAN port built into the TV dock for lag-free online racing',
      'Includes Mario Kart 8 Deluxe digital voucher code'
    ],
    specifications: {
      'Pallet Reference': 'PLT-05 / Lot 853',
      'Screen': '7-inch OLED Multi-touch (1280 x 720)',
      'Storage': '64GB internal + MicroSD expansion',
      'Battery Life': 'Approx. 4.5 to 9 hours',
      'Warranty': '24 Months European Warranty'
    },
    variants: [
      { id: 'v-white-joycon', name: 'Color', value: 'White Joy-Con' },
      { id: 'v-neon-joycon', name: 'Color', value: 'Neon Red / Neon Blue' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-05',
    reviews: [
      {
        id: 'r5',
        userName: 'Sven Lindholm',
        userCountry: 'Sweden',
        rating: 5,
        date: '2026-02-25',
        title: 'Great bundle for my kids',
        comment: 'Box was in pristine condition with all European power cords included. Arrived in Stockholm in 3 business days.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-06-asus-rog-ally',
    palletNumber: 6,
    palletCode: 'PLT-06',
    sku: 'PLT-06-ASU-ROGZ1X',
    title: 'ASUS ROG Ally 7-inch 120Hz Gaming Handheld with AMD Ryzen Z1 Extreme (Pallet Lot #06)',
    brand: 'ASUS',
    categoryId: 'computing-gaming',
    categoryName: 'Computing & Gaming',
    price: 469,
    originalMSRP: 799,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 189,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: false,
    badge: 'PALLET #06 • 120HZ FHD',
    images: [
      palletGamingLot,
      palletManifestSeal
    ],
    description: 'Play all your PC games anywhere on Windows 11 with the ASUS ROG Ally. Powered by the high-performance AMD Ryzen Z1 Extreme processor and equipped with a smooth 120Hz 1080p display with AMD FreeSync Premium.',
    keyFeatures: [
      'AMD Ryzen Z1 Extreme 8-core / 16-thread APU with RDNA 3 graphics',
      '7-inch Full HD 1080p 120Hz display with 500 nits and Gorilla Glass Victus',
      'Ergonomic lightweight 608g chassis with dual fans and anti-gravity heat pipes',
      'Supports Steam, Xbox Game Pass, Epic Games, and EA Play natively'
    ],
    specifications: {
      'Pallet Reference': 'PLT-06 / Lot 854',
      'Processor': 'AMD Ryzen Z1 Extreme (Zen 4, 30W turbo)',
      'RAM / Storage': '16GB LPDDR5 / 512GB PCIe 4.0 NVMe SSD',
      'Operating System': 'Windows 11 Home',
      'Warranty': '24 Months European ASUS Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-06',
    reviews: [
      {
        id: 'r6',
        userName: 'Wojciech Kowalski',
        userCountry: 'Poland',
        rating: 5,
        date: '2026-03-03',
        title: 'Plays Cyberpunk and Forza flawlessly on the go',
        comment: 'Huge discount compared to Polish retail chains. Unit is brand new and runs Windows 11 without any bloatware.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-07-philips-hue-starter-kit',
    palletNumber: 7,
    palletCode: 'PLT-07',
    sku: 'PLT-07-PHL-HUE3PK',
    title: 'Philips Hue White & Color Ambiance E27 Starter Kit with Bridge (Pallet Lot #07)',
    brand: 'Philips Hue',
    categoryId: 'smart-home',
    categoryName: 'Smart Home & Lighting',
    price: 89,
    originalMSRP: 159,
    discountPercentage: 44,
    rating: 4.8,
    reviewCount: 264,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 8,
    featured: false,
    badge: 'PALLET #07 • POPULAR',
    images: [
      palletSmartHomeLot,
      palletManifestSeal
    ],
    description: 'Transform your home lighting with 16 million colors and 50,000 shades of warm-to-cool white light. Includes 3x E27 smart LED bulbs, Hue Bridge hub, and Smart Wireless Dimmer Switch.',
    keyFeatures: [
      '16 million colors and tunable white light from 2000K to 6500K',
      'Includes Hue Bridge for out-of-home control and automated schedules',
      'Works with Apple HomeKit, Amazon Alexa, and Google Assistant',
      'Smart Dimmer Switch with magnetic wall plate included in box'
    ],
    specifications: {
      'Pallet Reference': 'PLT-07 / Lot 855',
      'Fitting Type': 'Standard E27 Edison screw base',
      'Brightness': '1100 lumens per bulb (75W equivalent)',
      'Energy Consumption': '9.5W LED per bulb',
      'Warranty': '24 Months Manufacturer Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-07',
    reviews: [
      {
        id: 'r7',
        userName: 'Emma Watson',
        userCountry: 'United Kingdom',
        rating: 5,
        date: '2026-02-18',
        title: 'Easy setup and genuine Philips quality',
        comment: 'Installed across my living room in 10 minutes. Syncs with music and movies effortlessly. Fantastic value.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-08-google-nest-bundle',
    palletNumber: 8,
    palletCode: 'PLT-08',
    sku: 'PLT-08-GGL-NSTBDL',
    title: 'Google Nest Learning Thermostat (3rd Gen) & Nest Doorbell Smart Bundle (Pallet Lot #08)',
    brand: 'Google Nest',
    categoryId: 'smart-home',
    categoryName: 'Smart Home & Lighting',
    price: 199,
    originalMSRP: 429,
    discountPercentage: 53,
    rating: 4.8,
    reviewCount: 153,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: false,
    badge: 'PALLET #08 • 53% OFF',
    images: [
      palletSmartHomeLot,
      palletManifestSeal
    ],
    description: 'Upgrade your home energy efficiency and front door security in one package. The Nest Learning Thermostat learns your schedule to save on heating bills, while the Nest Doorbell (Battery) alerts you to packages and visitors.',
    keyFeatures: [
      'Thermostat auto-schedules based on your living habits and checks OpenTherm boilers',
      'Wire-free HDR video doorbell with intelligent person, package, vehicle, and animal detection',
      'Control both devices from the Google Home app on iOS or Android',
      'High-resolution color display on thermostat shows time or temperature when approached'
    ],
    specifications: {
      'Pallet Reference': 'PLT-08 / Lot 856',
      'Compatibility': 'Combi boilers, heat pumps, zoned systems',
      'Doorbell Camera': '1.3MP color sensor, 6x digital zoom, 3:4 aspect ratio',
      'Battery / Power': 'Rechargeable Li-ion battery or hardwire',
      'Warranty': '24 Months European Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-08',
    reviews: [
      {
        id: 'r8',
        userName: 'Frederik Hansen',
        userCountry: 'Denmark',
        rating: 5,
        date: '2026-02-14',
        title: 'Cut my heating bill immediately',
        comment: 'Both items are European specification with EU Heat Link module included. Superb build quality.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-09-delonghi-magnifica-s',
    palletNumber: 9,
    palletCode: 'PLT-09',
    sku: 'PLT-09-DLG-ECAM22',
    title: "De'Longhi Magnifica S Compact Bean-to-Cup Espresso Machine (Pallet Lot #09)",
    brand: "De'Longhi",
    categoryId: 'kitchen-appliances',
    categoryName: 'Kitchen & Coffee',
    price: 269,
    originalMSRP: 449,
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 512,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 8,
    featured: true,
    badge: 'PALLET #09 • BESTSELLER',
    images: [
      palletAppliancesLot,
      palletManifestSeal
    ],
    description: "Enjoy freshly brewed Italian coffee at home with the De'Longhi Magnifica S. Built-in steel burr grinder with 13 grind settings, traditional milk frothing arm for creamy cappuccinos, and customizable aroma strength.",
    keyFeatures: [
      '13 adjustable grind settings for fresh whole beans with pre-ground bypass option',
      'Traditional manual milk frother produces rich, velvety froth for lattes & cappuccinos',
      'Removable brewing unit for effortless cleaning under running tap water',
      'Automatic descaling and rinse cycles maintain hygiene and extend machine life'
    ],
    specifications: {
      'Pallet Reference': 'PLT-09 / Lot 857',
      'Pump Pressure': '15 Bar Italian Pump',
      'Water Tank Capacity': '1.8 Liters',
      'Bean Container': '250g capacity',
      'Dimensions': '23.8 x 43.0 x 35.1 cm',
      'Warranty': '24 Months European Manufacturer Warranty'
    },
    variants: [
      { id: 'v-silver-black', name: 'Finish', value: 'Brushed Silver & Black' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-09',
    reviews: [
      {
        id: 'r9',
        userName: 'Giuseppe Bellini',
        userCountry: 'Italy',
        rating: 5,
        date: '2026-02-24',
        title: 'Authentic espresso crema every morning',
        comment: 'As an Italian I was skeptical buying liquidation goods, but this is 100% factory original in unopened retail packaging.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-10-ninja-foodi-dual-zone',
    palletNumber: 10,
    palletCode: 'PLT-10',
    sku: 'PLT-10-NNJ-AF400EU',
    title: 'Ninja Foodi MAX DualZone 9.5L Air Fryer with Smart Cook System (Pallet Lot #10)',
    brand: 'Ninja',
    categoryId: 'kitchen-appliances',
    categoryName: 'Kitchen & Coffee',
    price: 159,
    originalMSRP: 269,
    discountPercentage: 41,
    rating: 4.9,
    reviewCount: 489,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 6,
    featured: true,
    badge: 'PALLET #10 • TOP RATED',
    images: [
      palletAppliancesLot,
      palletManifestSeal
    ],
    description: 'Cook two different foods, two different ways, and finish at the exact same time with Ninja DualZone technology. Extra-large 9.5-liter capacity feeds 8+ people, with up to 75% less fat than traditional deep frying.',
    keyFeatures: [
      '2 independent cooking zones with SYNC and MATCH cook functions',
      '6 cooking modes: Air Fry, Max Crisp, Roast, Bake, Reheat, Dehydrate',
      'Includes digital cooking probe that monitors internal meat temperature continuously',
      'Non-stick, dishwasher safe baskets and crisper plates for easy cleanup'
    ],
    specifications: {
      'Pallet Reference': 'PLT-10 / Lot 858',
      'Total Capacity': '9.5 Liters (2 x 4.75L)',
      'Power Wattage': '2470 Watts',
      'Temperature Range': '40°C to 240°C',
      'Warranty': '24 Months European Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-10',
    reviews: [
      {
        id: 'r10',
        userName: 'Sophie Martin',
        userCountry: 'Belgium',
        rating: 5,
        date: '2026-03-01',
        title: 'Replaced my conventional oven completely',
        comment: 'Roasts chicken in zone 1 and chips in zone 2, finishes simultaneously. Outstanding build quality and rapid delivery.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-11-designer-apparel-suits',
    palletNumber: 11,
    palletCode: 'PLT-11',
    sku: 'PLT-11-APP-HGB894',
    title: "Hugo Boss & Ralph Lauren Designer Apparel & Tailored Suits Lot (Pallet Lot #11)",
    brand: 'Hugo Boss',
    categoryId: 'apparel-footwear',
    categoryName: 'Apparel, Footwear & Designer Goods',
    price: 389,
    originalMSRP: 995,
    discountPercentage: 61,
    rating: 4.9,
    reviewCount: 218,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'PALLET #11 • DESIGNER APPAREL',
    images: [
      palletApparelLot,
      palletManifestSeal
    ],
    description: 'Certified Grade-A overstock assortment from premier European department store clearances. Includes Hugo Boss slim-fit tailored virgin wool jackets, Ralph Lauren Oxford cotton shirts, and Tommy Hilfiger knitwear with all security seals, tags, and original hangers.',
    keyFeatures: [
      '100% authentic designer apparel with factory retail hangtags and EAN barcodes intact',
      'Master lot includes virgin wool blazer suits, pique polos, and premium knit sweaters',
      'Manufactured in Europe with certified origin documentation and Grade-A clearance certificates',
      'Includes branded garment bags and protective anti-dust retail packaging'
    ],
    specifications: {
      'Pallet Reference': 'PLT-11 / Lot 859',
      'Category': 'Apparel, Footwear & Designer Goods',
      'Origin': 'Trade Port Venlo Wholesale Hub (NL)',
      'Condition': 'Grade-A Brand New Overstock (Factory Tagged)',
      'Assortment': 'Tailored Suits, Oxford Shirts, Premium Knitwear',
      'Warranty': 'Authenticity Guaranteed • 30-Day Inspection Period'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-11',
    reviews: [
      {
        id: 'r11',
        userName: 'Maximilian Krause',
        userCountry: 'Germany',
        rating: 5,
        date: '2026-02-26',
        title: 'Impeccable genuine Hugo Boss suits',
        comment: 'All garments arrived with original boutique tags and factory bags. Outstanding fabric quality and incredible savings over retail.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-12-designer-footwear-sneakers',
    palletNumber: 12,
    palletCode: 'PLT-12',
    sku: 'PLT-12-FTW-NKE821',
    title: 'Nike, Adidas & Italian Handcrafted Leather Footwear Master Lot (Pallet Lot #12)',
    brand: 'Nike',
    categoryId: 'apparel-footwear',
    categoryName: 'Apparel, Footwear & Designer Goods',
    price: 349,
    originalMSRP: 849,
    discountPercentage: 59,
    rating: 4.9,
    reviewCount: 294,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: true,
    badge: 'PALLET #12 • FOOTWEAR CLEARANCE',
    images: [
      palletApparelLot,
      palletManifestSeal
    ],
    description: 'High-value liquidation footwear collection sourced from German and Dutch retail chains. Features authentic Nike Air Max editions, Adidas Ultraboost running shoes, and handcrafted Tuscan Italian calfskin leather dress shoes in original individual retail shoe boxes.',
    keyFeatures: [
      'Complete brand new footwear in pristine original manufacturer shoe boxes with barcodes',
      'Includes top-tier lifestyle sneakers, athletic running shoes, and Italian formal shoes',
      'Grade-A certified liquidation with zero customer returns or defects',
      'Each pair certified authentic with European distribution proof'
    ],
    specifications: {
      'Pallet Reference': 'PLT-12 / Lot 860',
      'Category': 'Apparel, Footwear & Designer Goods',
      'Origin': 'Trade Port Venlo Central Logistics Hub (NL)',
      'Condition': 'Brand New (Original Factory Boxes)',
      'Brands Included': 'Nike, Adidas Originals, Italian Tuscan Leather',
      'Warranty': 'Authenticity Guaranteed • 30-Day Money-Back Guarantee'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-12',
    reviews: [
      {
        id: 'r12',
        userName: 'Matteo Rossi',
        userCountry: 'Italy',
        rating: 5,
        date: '2026-02-20',
        title: 'Authentic Nike and Italian leather shoes',
        comment: 'Boxed pairs in pristine condition. Barcodes scan directly in retailer databases. Arrived via DPD in 2 days.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-13-dyson-v15-detect',
    palletNumber: 13,
    palletCode: 'PLT-13',
    sku: 'PLT-13-DYS-V15TC',
    title: 'Dyson V15 Detect Total Clean Cordless Vacuum with Fluffy Optic Head (Pallet Lot #13)',
    brand: 'Dyson',
    categoryId: 'floorcare-vacuums',
    categoryName: 'Floorcare & Vacuums',
    price: 459,
    originalMSRP: 799,
    discountPercentage: 43,
    rating: 4.9,
    reviewCount: 388,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: true,
    badge: 'PALLET #13 • 43% OFF',
    images: [
      palletVacuumLot,
      palletManifestSeal
    ],
    description: 'Dyson most powerful intelligent cordless vacuum. Features Fluffy Optic cleaner head that reveals 2x more invisible dust, and an acoustic piezo sensor that counts and measures the size of dust particles.',
    keyFeatures: [
      '240 Air Watts of fade-free cyclone suction power',
      'Fluffy Optic cleaner head illuminates microscopic dust on hard floors',
      'Digital Motorbar cleaner head detangles wrapped hair automatically',
      'LCD screen shows real-time scientific proof of deep clean and battery run time'
    ],
    specifications: {
      'Pallet Reference': 'PLT-13 / Lot 861',
      'Run Time': 'Up to 60 minutes with click-in battery',
      'Bin Volume': '0.76 Liters with point-and-shoot hygienic emptying',
      'Filtration': 'Whole-machine HEPA filtration traps 99.99% particles down to 0.1 microns',
      'Warranty': '24 Months European Dyson Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-13',
    reviews: [
      {
        id: 'r13',
        userName: 'Marc Vermeulen',
        userCountry: 'Netherlands',
        rating: 5,
        date: '2026-03-04',
        title: 'The laser illumination is scary good',
        comment: 'You do not realize how dirty hard floors are until the green laser illuminates them. Genuine EU serial registered on Dyson site.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-14-irobot-roomba-j9',
    palletNumber: 14,
    palletCode: 'PLT-14',
    sku: 'PLT-14-IRB-J9PLUS',
    title: 'iRobot Roomba Combo j9+ Auto-Fill & Self-Emptying Robot Vacuum & Mop (Pallet Lot #14)',
    brand: 'iRobot',
    categoryId: 'floorcare-vacuums',
    categoryName: 'Floorcare & Vacuums',
    price: 549,
    originalMSRP: 1399,
    discountPercentage: 61,
    rating: 4.7,
    reviewCount: 88,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'PALLET #14 • SAVE €850',
    images: [
      palletVacuumLot,
      palletManifestSeal
    ],
    description: 'The pinnacle of automated floorcare. Features 100% more suction power and the Clean Base Auto-Fill Dock that empties debris for up to 60 days and refills liquid for up to 30 days of hands-free cleaning.',
    keyFeatures: [
      'D.R.I. (Dry Rug Intelligence) fully retracts mop pad to the top of the robot over carpets',
      'Clean Base Auto-Fill Dock empties dirt for 60 days and refills mop tank for 30 days',
      'PrecisionVision Navigation detects pet waste, charging cables, and shoes reliably',
      'DirtDetective learns which rooms get dirtiest fastest and prioritizes cleaning order'
    ],
    specifications: {
      'Pallet Reference': 'PLT-14 / Lot 862',
      'Docking Station': 'Auto-empty, auto-liquid refill with premium wood-accent dock',
      'Suction Power': 'Power-Lifting Suction with 4-Stage Cleaning System',
      'Smart Assistant': 'Alexa, Siri Shortcuts, and Google Home compatible',
      'Warranty': '24 Months European Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-14',
    reviews: [
      {
        id: 'r14',
        userName: 'Guillaume Leroux',
        userCountry: 'France',
        rating: 5,
        date: '2026-02-27',
        title: 'Truly hands-free floor maintenance',
        comment: 'The dock looks like high-end furniture with the wood top. Mops tiles without ever dampening my wool rugs.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-15-bosch-18v-drill-set',
    palletNumber: 15,
    palletCode: 'PLT-15',
    sku: 'PLT-15-BSH-GSB18V',
    title: 'Bosch Professional 18V Brushless Combi Drill & Impact Driver Kit in L-BOXX (Pallet Lot #15)',
    brand: 'Bosch Professional',
    categoryId: 'power-tools',
    categoryName: 'Power Tools & DIY',
    price: 199,
    originalMSRP: 379,
    discountPercentage: 47,
    rating: 4.9,
    reviewCount: 194,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 7,
    featured: false,
    badge: 'PALLET #15 • CONTRACTOR GRADE',
    images: [
      palletToolsLot,
      palletManifestSeal
    ],
    description: 'Heavy-duty 18V cordless combo for trade professionals. Includes brushless combi drill GSB 18V-55 with metal chuck, GDR 18V-200 impact driver, two 4.0Ah ProCORE18V high-output batteries, GAL 18V-40 quick charger, and rugged L-BOXX case.',
    keyFeatures: [
      'Brushless EC motors deliver up to 55 Nm torque and extended tool lifespan',
      'Heavy-duty 13mm metal chuck for maximum durability and drill bit grip',
      'Includes two ProCORE18V 4.0Ah compact batteries with COOLPACK 2.0 heat dissipation',
      'Heavy-duty modular stackable L-BOXX 136 case included'
    ],
    specifications: {
      'Pallet Reference': 'PLT-15 / Lot 863',
      'Battery Platform': 'Bosch Professional 18V AMPShare compatible',
      'Impact Rate': '0 - 27,000 bpm',
      'Max Torque': '55 Nm (Drill) / 200 Nm (Impact Driver)',
      'Warranty': '36 Months Bosch Pro360 Registration Warranty'
    },
    warrantyMonths: 36,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-15',
    reviews: [
      {
        id: 'r15',
        userName: 'Janusz Dabrowski',
        userCountry: 'Poland',
        rating: 5,
        date: '2026-03-01',
        title: 'Unbeatable price for genuine Bosch blue tools',
        comment: 'Registered the serials on Bosch Pro360 app for the full 3-year warranty without problem. L-BOXX case arrived clean and undamaged.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-16-makita-18v-combo',
    palletNumber: 16,
    palletCode: 'PLT-16',
    sku: 'PLT-16-MKT-DLX600',
    title: 'Makita 18V LXT 6-Piece Heavy Duty Cordless Tool Set with 2x 5.0Ah Batteries (Pallet Lot #16)',
    brand: 'Makita',
    categoryId: 'power-tools',
    categoryName: 'Power Tools & DIY',
    price: 489,
    originalMSRP: 899,
    discountPercentage: 46,
    rating: 4.9,
    reviewCount: 84,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'PALLET #16 • 6-TOOL LOT',
    images: [
      palletToolsLot,
      palletManifestSeal
    ],
    description: 'The ultimate professional contractor outfit. Contains combi drill DHP453, impact driver DTD152, circular saw DSS611, reciprocating saw DJR186, angle grinder DGA452, LED torch, two 5.0Ah LXT batteries, DC18RC rapid charger, and heavy-duty duffle.',
    keyFeatures: [
      '6 full-size 18V cordless tools powered by Makita legendary LXT battery system',
      'Includes 2x genuine BL1850B 5.0Ah batteries with built-in 4-stage fuel gauge',
      'Rapid cooling charger charges 5.0Ah battery in only 45 minutes',
      'Reinforced ballistic nylon tool carry bag with heavy-duty brass zippers'
    ],
    specifications: {
      'Pallet Reference': 'PLT-16 / Lot 864',
      'Battery Voltage': '18V Lithium-Ion LXT',
      'Number of Tools': '6 Cordless Professional Tools',
      'Charger': 'DC18RC Smart Air-Cooled Rapid Charger',
      'Warranty': '36 Months Makita European Warranty'
    },
    warrantyMonths: 36,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-16',
    reviews: [
      {
        id: 'r16',
        userName: 'Brendan O’Connor',
        userCountry: 'Ireland',
        rating: 5,
        date: '2026-02-22',
        title: 'Everything you need on a jobsite in one kit',
        comment: 'Circular saw cuts clean through 45mm timber without bogging down. Batteries hold charge all day long. Delivered by DPD in 48h.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-17-garmin-fenix-7x',
    palletNumber: 17,
    palletCode: 'PLT-17',
    sku: 'PLT-17-GRM-FNX7X',
    title: 'Garmin Fēnix 7X Sapphire Solar Titanium Multisport GPS Watch (Pallet Lot #17)',
    brand: 'Garmin',
    categoryId: 'smartwatches-wearables',
    categoryName: 'Smartwatches & Fitness',
    price: 499,
    originalMSRP: 899,
    discountPercentage: 44,
    rating: 4.9,
    reviewCount: 167,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 4,
    featured: true,
    badge: 'PALLET #17 • SAPPHIRE SOLAR',
    images: [
      palletElectronicsLot,
      palletManifestSeal
    ],
    description: 'Conquer every hour of the day with advanced training features, 24/7 health and wellness monitoring, scratch-resistant sapphire solar lens, and an ultra-bright built-in multi-LED flashlight.',
    keyFeatures: [
      'Power Sapphire solar charging lens harvests sunlight to extend battery life up to 37 days',
      'Built-in bright multi-LED flashlight with variable intensities and red strobe safety light',
      'Multi-band GNSS with SatIQ technology delivers superior outdoor positioning accuracy',
      'Preloaded TopoActive Europe maps, ski resort maps, and 43,000+ golf courses'
    ],
    specifications: {
      'Pallet Reference': 'PLT-17 / Lot 865',
      'Case Size': '51 mm Titanium bezel with fiber-reinforced polymer case',
      'Water Rating': '10 ATM (100 meters dive proof)',
      'Memory': '32 GB preloaded maps and music storage',
      'Warranty': '24 Months European Garmin Warranty'
    },
    variants: [
      { id: 'v-black-titanium', name: 'Finish', value: 'Carbon Gray DLC Titanium' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-17',
    reviews: [
      {
        id: 'r17',
        userName: 'Mikko Korhonen',
        userCountry: 'Finland',
        rating: 5,
        date: '2026-03-02',
        title: 'Incredible battery life for mountain ultramarathons',
        comment: 'GPS accuracy in dense Finnish pine forests is pinpoint. Flashlight is surprisingly bright in the dark. 100% genuine.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-18-apple-watch-ultra-2',
    palletNumber: 18,
    palletCode: 'PLT-18',
    sku: 'PLT-18-APL-WULT2',
    title: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case (Pallet Lot #18)',
    brand: 'Apple',
    categoryId: 'smartwatches-wearables',
    categoryName: 'Smartwatches & Fitness',
    price: 629,
    originalMSRP: 899,
    discountPercentage: 30,
    rating: 4.9,
    reviewCount: 220,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 3,
    featured: false,
    badge: 'PALLET #18 • TITANIUM 49MM',
    images: [
      palletElectronicsLot,
      palletManifestSeal
    ],
    description: 'The most capable and rugged Apple Watch. Built for endurance, outdoor adventure, and water sports with a 49mm aerospace-grade titanium case, extra-long battery life, and the brightest Apple display ever (3,000 nits).',
    keyFeatures: [
      'Powered by S9 SiP with Double Tap gesture control and on-device Siri',
      '3000-nit Always-On Retina display readable in brightest direct sunlight',
      'Dual-frequency GPS with Precision Start button and 86-decibel Emergency Siren',
      'Certified EN13319 water resistance for recreational scuba diving to 40m'
    ],
    specifications: {
      'Pallet Reference': 'PLT-18 / Lot 866',
      'Case Material': 'Aerospace-grade natural titanium 49mm',
      'Connectivity': 'LTE 4G Cellular + GPS, Wi-Fi 4, Bluetooth 5.3, UWB 2',
      'Battery Life': 'Up to 36 hours regular / 72 hours in Low Power Mode',
      'Warranty': '12 Months Official Apple Worldwide Warranty'
    },
    variants: [
      { id: 'v-trail-loop', name: 'Band', value: 'Blue/Black Trail Loop' },
      { id: 'v-ocean-band', name: 'Band', value: 'Midnight Ocean Band' }
    ],
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-18',
    reviews: [
      {
        id: 'r18',
        userName: 'Henrik Vestergaard',
        userCountry: 'Denmark',
        rating: 5,
        date: '2026-02-25',
        title: 'Factory sealed with active Apple warranty',
        comment: 'Serial verified immediately in Apple Support app with complete coverage. The titanium case is flawless.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-19-lg-oled-55-c3',
    palletNumber: 19,
    palletCode: 'PLT-19',
    sku: 'PLT-19-LG-OLED55',
    title: 'LG 55-inch OLED evo C3 4K Smart TV with α9 Gen6 AI Processor & Dolby Vision (Pallet Lot #19)',
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
    badge: 'PALLET #19 • SAVE €700',
    images: [
      palletTvScreensLot,
      palletManifestSeal
    ],
    description: 'Self-lit OLED pixels shine brighter with Brightness Booster. Infinite contrast, 100% color volume, ultra-fast 0.1ms response time, 4x HDMI 2.1 ports for 120Hz 4K gaming, and Dolby Atmos cinematic sound.',
    keyFeatures: [
      'OLED evo self-lit pixel technology powered by α9 AI Processor Gen6',
      'Dolby Vision and Dolby Atmos cinema grade image and surround sound',
      'Ultra-fast 0.1ms response time, 120Hz, VRR, G-Sync, and FreeSync Premium',
      'webOS smart platform with Magic Remote and hands-free voice control'
    ],
    specifications: {
      'Pallet Reference': 'PLT-19 / Lot 867',
      'Screen Size': '55 inches (139 cm diagonal)',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Refresh Rate': '120Hz Native',
      'Ports': '4x HDMI 2.1, 3x USB, eARC, Optical, Ethernet',
      'Warranty': '24 Months European Manufacturer Warranty'
    },
    warrantyMonths: 24,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-19',
    reviews: [
      {
        id: 'r19',
        userName: 'Jean-Luc Dupont',
        userCountry: 'France',
        rating: 5,
        date: '2026-02-22',
        title: 'Mind-blowing picture quality',
        comment: 'Black levels are infinite and gaming on PS5 at 120Hz is buttery smooth. Freight delivery was on time with text updates.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'prod-plt-20-karcher-k5-power',
    palletNumber: 20,
    palletCode: 'PLT-20',
    sku: 'PLT-20-KCH-K5PC',
    title: 'Kärcher K5 Power Control 145-Bar High Pressure Washer with Patio Cleaner (Pallet Lot #20)',
    brand: 'Kärcher',
    categoryId: 'outdoor-garden',
    categoryName: 'Outdoor & Garden Living',
    price: 249,
    originalMSRP: 439,
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 112,
    condition: 'Brand New (Factory Sealed)',
    inStock: true,
    stockCount: 5,
    featured: false,
    badge: 'PALLET #20 • 43% OFF',
    images: [
      palletOutdoorLot,
      palletManifestSeal
    ],
    description: 'For effortless cleaning of stone patios, driveways, cars, and garden walls. Water-cooled induction motor provides superior reliability and long service life. Integrated Plug "n" Clean detergent system for instant detergent application.',
    keyFeatures: [
      'Power Control spray gun with manual pressure level indicator on handle',
      'Vario Power Jet lance and Dirt Blaster rotary high-impact nozzle included',
      'Water-cooled induction motor designed for maximum endurance and low noise',
      'Telescopic handle made of high-grade aluminum and 10m high-pressure hose'
    ],
    specifications: {
      'Pallet Reference': 'PLT-20 / Lot 868',
      'Max Pressure': '145 Bar (2100 PSI)',
      'Flow Rate': '500 Liters / hour',
      'Area Performance': '40 m² / hour',
      'Hose Length': '10 meters premium steel-reinforced',
      'Warranty': '36 Months European Manufacturer Warranty'
    },
    warrantyMonths: 36,
    freeShippingEligible: true,
    sourceLot: 'Trade Port Venlo Liquidation Lot #PLT-20',
    reviews: [
      {
        id: 'r20',
        userName: 'Christoph Wagner',
        userCountry: 'Austria',
        rating: 5,
        date: '2026-03-02',
        title: 'Cleaned a 60m² stone terrace in under an hour',
        comment: 'Plenty of pressure to blast away years of moss and grime. Delivered in original yellow Kärcher box.',
        verifiedPurchase: true
      }
    ]
  }
];
