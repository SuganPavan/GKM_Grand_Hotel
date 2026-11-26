export const CONTACT = {
  phones: ['+91 9434262082', '6369047484'],
  whatsapp: '919434262082',
  email: 'gkmgrand@gmail.com',
  address: "Jogger's Park, AHW Colony, Nayagaon, Port Blair",
  fullAddress: "Jogger's Park, AHW Colony, Nayagaon, Port Blair, Andaman & Nicobar Islands",
  website: 'https://gkmgrandandaman.com/'
};

export const HERO_SLIDES = [
  {
    image: 'https://gkmgrandandaman.com/assets/img/home/543ccd36162387af.jpeg',
    eyebrow: 'NAYAGAON, PORT BLAIR  •  ANDAMAN & NICOBAR ISLANDS',
    titleLine1: 'Hotel GKM Grand,',
    titleAccent: 'Heart of Port Blair.',
    subtitle:
      "Warm island stays near Jogger's Park & Port Blair Airport — your gateway to Havelock, Neil Island, Baratang, and private Andaman cruises."
  },
  {
    image: 'https://gkmgrandandaman.com/assets/img/home/eb82059f79671993.jpeg',
    eyebrow: 'HOTEL GKM GRAND  •  HOTEL GURU INTERNATIONAL',
    titleLine1: 'Timeless Hospitality,',
    titleAccent: 'Rooted in the Islands.',
    subtitle:
      'Wake up minutes from Jogger’s Park with spacious suites, multi-cuisine dining, and our dedicated private Andaman fleet.'
  },
  {
    image: 'https://gkmgrandandaman.com/assets/img/home/22ff4a2ff9ded85b.jpeg',
    eyebrow: 'HAVELOCK  •  NEIL ISLAND  •  BARATANG',
    titleLine1: 'Unforgettable Escapes,',
    titleAccent: 'Tailored Around You.',
    subtitle:
      'From candlelit shores in Swaraj Dweep to effortless family & honeymoon itineraries — every detail arranged by our local experts.'
  }
];

export const HOTELS = [
  {
    id: 'gkm-grand',
    name: 'Hotel GKM Grand',
    location: 'Port Blair',
    fullLocation: "Jogger's Park, AHW Colony, Nayagaon, Port Blair",
    owner: 'Owned by Mr. A. Guru Swamy',
    image: 'https://gkmgrandandaman.com/assets/img/home/rbg2.jpg',
    fallbackImage: 'https://gkmgrandandaman.com/assets/img/home/543ccd36162387af.jpeg',
    description:
      'Hotel GKM Grand is our flagship property in Port Blair offering spacious contemporary rooms, warm hospitality, an on-site multi-cuisine restaurant, 24-hour room service, and an in-house Andaman Destination Management desk.',
    highlights: [
      'Prime Nayagaon location near Jogger’s Park & Port Blair Airport',
      'On-site multi-cuisine restaurant & 24-hour room service',
      'Standard, Deluxe, Deluxe Suite, Executive & Super Executive Suites',
      'Own fleet of AC Tempo Travellers, Xylo cabs & two-wheeler rentals',
      'Seamless private ferry bookings (Makruzz, Nautika, Green Ocean)'
    ]
  },
  {
    id: 'guru-international',
    name: 'Hotel Guru International',
    location: 'Port Blair',
    fullLocation: 'Port Blair, Andaman & Nicobar Islands',
    owner: 'Owned by Mr. G. Prabhakaran',
    image: 'https://gkmgrandandaman.com/assets/img/home/abg.jpg',
    fallbackImage: 'https://gkmgrandandaman.com/assets/img/home/eb82059f79671993.jpeg',
    description:
      'Hotel Guru International is our sister hospitality property in Port Blair, crafted for families, honeymooners, and LTC groups seeking cozy stays, delicious breakfast spreads, and effortless island connectivity.',
    highlights: [
      'Well-appointed AC rooms & spacious family-friendly suites',
      'Easy access to Corbyn’s Cove Beach, Cellular Jail & Phoenix Bay Jetty',
      'Hygienic in-house dining & warm local staff assistance',
      '24/7 trip assistance for Havelock, Neil Island & Baratang excursions',
      'Ideal base for Honeymoon, Family, Group & Andaman LTC packages'
    ]
  }
];

export const ROOMS = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: '₹2,500/night',
    size: '220 sq. ft.',
    occupancy: '2 Guests',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=90',
    description:
      'Cost-effective and practical comfort featuring a cozy double bed, air conditioning, LED TV, geyser, and attentive room service.',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'LED TV', '24/7 Hot Water (Geyser)', 'Room Connectivity & Service']
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: '₹3,000/night',
    size: '300 sq. ft. (~30 sqm)',
    occupancy: 'Up to 3 Guests',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=90',
    description:
      'Spacious 30 sqm room with double/king bedding, modern attached bath, Wi-Fi, flat-screen TV, and warm island hospitality.',
    amenities: ['King / Double Bed', 'Air Conditioning', 'Free High-Speed Wi-Fi', 'Tea/Coffee Maker', '24-Hour Room Service']
  },
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite Room',
    price: '₹3,500/night',
    size: '360 sq. ft.',
    occupancy: 'Up to 3 Guests',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=90',
    description:
      'Upgraded room space with finer furnishings, a comfortable seating area, and extra comfort layers for relaxing after island sightseeing.',
    amenities: ['Expanded Floor Plan', 'Plush King Bedding', 'Lounge Seating Corner', 'Mini Fridge', '24-Hour Room Service']
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite Room',
    price: '₹4,500/night',
    size: '430 sq. ft.',
    occupancy: 'Up to 4 Guests',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=90',
    description:
      'Generously proportioned suite with elegant interiors, separate living area, premium linens, and priority travel desk support.',
    amenities: ['Separate Living Zone', 'Premium King Bed', 'Mini Refrigerator', 'Complimentary Breakfast Option', 'Priority Concierge']
  },
  {
    id: 'super-executive-suite',
    name: 'Super Executive Suite Room',
    price: '₹6,000/night',
    size: '520 sq. ft.',
    occupancy: 'Up to 4 Guests',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=90',
    description:
      'Our flagship luxury suite offering panoramic windows, a dedicated lounge nook, premium bath amenities, and bespoke hospitality.',
    amenities: ['Signature Master Suite', 'Panoramic Windows', 'Dedicated Lounge Area', 'Premium Bath Kit', 'Airport Transfer Support']
  }
];

export const PACKAGES = [
  {
    id: 'ultimate-beach-vacation',
    title: 'Ultimate Beach Vacation',
    duration: '(3 Nights / 4 Days)',
    category: 'Best Seller • Family • LTC',
    places: 'Port Blair • Havelock Island (Swaraj Dweep)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90',
    summary:
      'A refreshing 4-day island getaway covering Port Blair’s historic Cellular Jail and Havelock’s world-famous Radhanagar & Elephant Beaches.',
    inclusions: [
      '3 Nights hotel stay with daily breakfast',
      'Private AC vehicle for all airport & sightseeing transfers',
      'Private catamaran tickets (Makruzz / Nautika / Green Ocean)',
      'Cellular Jail entry & evening Light and Sound Show'
    ],
    itinerary: [
      { day: 'Day 1: Port Blair Arrival & Local Sightseeing', desc: 'Airport pickup, check-in at Hotel GKM Grand, visit Corbyn’s Cove Beach, Cellular Jail & Light and Sound Show.' },
      { day: 'Day 2: Cruise to Havelock & Radhanagar Beach', desc: 'High-speed private ferry to Swaraj Dweep and sunset at Asia’s iconic Radhanagar Beach.' },
      { day: 'Day 3: Elephant Beach & Return to Port Blair', desc: 'Morning coral reef & water sports trip to Elephant Beach, followed by evening ferry back to Port Blair.' },
      { day: 'Day 4: Departure', desc: 'Breakfast and drop-off at Veer Savarkar International Airport.' }
    ]
  },
  {
    id: 'south-to-north-andaman',
    title: 'Experience South to North Andaman Trip',
    duration: '(3 Nights / 4 Days)',
    category: 'Explorer • Group',
    places: 'Port Blair • Baratang • Rangat • Diglipur',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=90',
    summary:
      'Journey through lush tropical rainforests, mangrove creeks, Baratang’s Limestone Caves, Mud Volcano, and serene North Andaman shores.',
    inclusions: [
      '3 Nights comfortable stay with breakfast',
      'Dedicated AC Xylo / Tempo Traveller with local driver',
      'Baratang convoy permits & Limestone Cave speedboat ride',
      'All local sightseeing & harbour assistance'
    ],
    itinerary: [
      { day: 'Day 1: Arrival in Port Blair', desc: 'Check-in at Hotel GKM Grand, Flag Point, Cellular Jail, and Marina Park.' },
      { day: 'Day 2: Baratang Limestone Caves & Mud Volcano', desc: 'Early drive through Andaman Trunk Road, mangrove creek boat safari, Limestone Caves & Mud Volcano.' },
      { day: 'Day 3: Rangat & North Andaman Eco-Highlights', desc: 'Explore Dhaninallah Mangrove Walkway, serene coastal beaches, and return to Port Blair.' },
      { day: 'Day 4: Departure', desc: 'Breakfast and seamless airport transfer.' }
    ]
  },
  {
    id: 'candlelight-dinner-havelock',
    title: 'Enchanting Candlelight Dinner in Havelock',
    duration: '(5 Nights / 6 Days)',
    category: 'Honeymoon Special',
    places: 'Port Blair • Havelock • Neil Island',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=90',
    summary:
      'Our romantic 6-day island-hopping escape featuring a beachfront candlelight dinner in Havelock, couple photoshoot, and tranquil Neil Island.',
    inclusions: [
      '5 Nights stays across Port Blair, Havelock & Neil Island',
      'Private beachfront Candlelight Dinner in Havelock',
      'Complimentary couple photoshoot at Radhanagar Beach',
      'All private luxury catamaran ferry transfers & AC cabs'
    ],
    itinerary: [
      { day: 'Day 1: Port Blair Arrival & Cellular Jail', desc: 'Welcome pickup, Hotel GKM Grand check-in, Corbyn’s Cove Beach & Light and Sound Show.' },
      { day: 'Day 2: Port Blair to Havelock Island', desc: 'Private cruise to Havelock, Radhanagar Beach sunset & complimentary couple photoshoot.' },
      { day: 'Day 3: Elephant Beach & Candlelight Dinner', desc: 'Morning water sports at Elephant Beach. Evening romantic beachfront candlelight dinner.' },
      { day: 'Day 4: Havelock to Neil Island', desc: 'Sail to Shaheed Dweep; visit Natural Bridge, Bharatpur Beach & Laxmanpur sunset.' },
      { day: 'Day 5: Return to Port Blair & Chidiyatapu', desc: 'Return cruise to Port Blair, sunset at Chidiyatapu Beach & souvenir shopping.' },
      { day: 'Day 6: Departure', desc: 'Breakfast and airport drop.' }
    ]
  },
  {
    id: 'romantic-andaman-explorer',
    title: 'Romantic Andaman Explorer Package',
    duration: '(4 Nights / 5 Days)',
    category: 'Honeymoon • Couples',
    places: 'Port Blair • Ross & North Bay • Havelock',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=90',
    summary:
      'A signature 4N/5D Honeymoon itinerary covering Cellular Jail, colonial Ross Island, coral-rich North Bay, Radhanagar, Kalapathar, and Chidiyatapu.',
    inclusions: [
      '4 Nights stay at Hotel GKM Grand & Havelock beach resort',
      'Ross Island & North Bay Island boat excursion',
      'Private cruise to Havelock with Radhanagar complimentary photoshoot',
      'Private AC vehicle for all sightseeing & airport transfers'
    ],
    itinerary: [
      { day: 'Day 1: Arrival in Port Blair', desc: 'Check-in at GKM Grand Hotel, Cellular Jail, Corbyn’s Cove Beach, Flag Point & Light and Sound Show.' },
      { day: 'Day 2: Ross Island & North Bay Island', desc: 'Explore colonial ruins at Ross Island and vibrant coral reefs at North Bay Island.' },
      { day: 'Day 3: Private Cruise to Havelock Island', desc: 'Visit Radhanagar Beach (with complimentary photoshoot) and Kalapathar Beach.' },
      { day: 'Day 4: Return to Port Blair & Chidiyatapu', desc: 'Private cruise back to Port Blair and afternoon sunset visit to Chidiyatapu Beach.' },
      { day: 'Day 5: Departure', desc: 'Transfer to Port Blair airport for your return flight.' }
    ]
  },
  {
    id: 'honeymoon-andaman-island',
    title: 'Honeymoon Andaman Island',
    duration: '(3 Nights / 4 Days)',
    category: 'Honeymoon • Quick Escape',
    places: 'Port Blair • Havelock Island • Kalapathar',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=90',
    summary:
      'An intimate 4-day romantic escape designed for couples looking for white-sand beaches, flower bed decor, private cruises, and effortless comfort.',
    inclusions: [
      '3 Nights romantic stay with honeymoon room decor',
      'Daily breakfast & private AC transfers',
      'High-speed catamaran tickets to Havelock Island',
      'Radhanagar Beach & Kalapathar Beach guided visits'
    ],
    itinerary: [
      { day: 'Day 1: Arrival in Port Blair', desc: 'Airport welcome, check-in, Cellular Jail & evening Light and Sound Show.' },
      { day: 'Day 2: Cruise to Havelock & Radhanagar Beach', desc: 'Private cruise to Swaraj Dweep and serene sunset at Radhanagar Beach.' },
      { day: 'Day 3: Kalapathar Beach & Return to Port Blair', desc: 'Visit Kalapathar Beach, optional scuba/snorkelling, and afternoon ferry back to Port Blair.' },
      { day: 'Day 4: Departure', desc: 'Breakfast and airport transfer.' }
    ]
  }
];

export const DESTINATIONS = [
  {
    name: 'Port Blair',
    subtitle: 'Historic Capital Gateway',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1710393552_700x430.jpg',
    description: 'Home to Hotel GKM Grand & Hotel Guru International, featuring Cellular Jail, Corbyn’s Cove Beach, Ross Island, North Bay, and Chidiyatapu.'
  },
  {
    name: 'Havelock',
    subtitle: 'Swaraj Dweep',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1710401603_700x430.jpeg',
    description: 'World-renowned for Radhanagar Beach, Elephant Beach coral reefs, Kalapathar sunrise, and premier scuba diving.'
  },
  {
    name: 'Neil Island',
    subtitle: 'Shaheed Dweep',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1710396949_700x430.jpg',
    description: 'Tranquil coral island famed for the Natural Bridge, Bharatpur Beach, Laxmanpur sunset, and laid-back island charm.'
  },
  {
    name: 'Rangat',
    subtitle: 'Middle Andaman',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1689410287_700x430.jpg',
    description: 'Lush eco-destination celebrated for Dhaninallah Mangrove Walkway, Cuthbert Bay turtle nesting beach, and waterfalls.'
  },
  {
    name: 'Baratang',
    subtitle: 'Limestone Caves',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1689410959_700x430.jpg',
    description: 'Thrilling mangrove creek boat rides leading to ancient Limestone Caves, active Mud Volcano, and Parrot Island.'
  },
  {
    name: 'Diglipur',
    subtitle: 'North Andaman',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1689410901_700x430.jpg',
    description: 'Untouched northern gem featuring the iconic Ross & Smith twin sandbar islands and Saddle Peak National Park.'
  },
  {
    name: 'Mayabunder',
    subtitle: 'Coastal Serenity',
    image: 'https://gkmgrandandaman.com/assets/img/location/location_img_1689410799_700x430.jpg',
    description: 'Peaceful coastal retreat with wooden jetties, scenic mangrove creeks, Avis Island, and Karmatang Beach.'
  }
];

export const ACTIVITIES = [
  { id: 'scuba', label: 'Scuba Diving', locations: 'Havelock • North Bay • Neil Island', desc: 'Explore vibrant coral reefs with certified PADI/SSI dive masters — beginner & non-swimmer friendly.' },
  { id: 'snorkelling', label: 'Snorkelling', locations: 'Elephant Beach • North Bay • Bharatpur', desc: 'Glide over crystal-clear shallow reefs teeming with colourful tropical fish and sea corals.' },
  { id: 'jetski', label: 'Jet Ski', locations: 'Corbyn’s Cove • Elephant Beach', desc: 'High-speed ocean thrills guided by trained water sports instructors.' },
  { id: 'seawalk', label: 'Sea Walking', locations: 'North Bay • Elephant Beach', desc: 'Walk along the ocean floor wearing a panoramic oxygen helmet — no swimming skills needed.' },
  { id: 'parasailing', label: 'Parasailing', locations: 'Corbyn’s Cove • North Bay • Havelock', desc: 'Soar high above turquoise waters for unforgettable aerial views of the Andaman islands.' },
  { id: 'more', label: '& More', locations: 'Glass-Bottom Boat • Kayaking • Banana Ride', desc: 'Includes Glass-Bottom Boat rides, mangrove kayaking, banana boat rides, and sunset island cruises.' }
];

export const CRUISES = [
  { name: 'Makruzz (Gold & Pearl)', route: 'Port Blair ↔ Havelock ↔ Neil', duration: '~90 mins', classes: 'Premium • Deluxe • Royal', desc: 'Pioneer high-speed AC catamaran with aircraft-style seating and smooth sailing.' },
  { name: 'Nautika & Nautika Lite', route: 'Port Blair ↔ Havelock ↔ Neil', duration: '~90 mins', classes: 'Luxury • Royal', desc: 'Modern high-speed twin-hull vessel with panoramic viewing windows and onboard cafe.' },
  { name: 'Green Ocean (1 & 2)', route: 'Port Blair ↔ Havelock ↔ Neil', duration: '~105 mins', classes: 'Economy • Deluxe • Royal', desc: 'Features an open-air upper deck (Green Ocean 1) for sea breeze, music, and 360° ocean views.' }
];

export const GALLERY_IMAGES = [
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/7dd0c673eb9adce4.jpeg', caption: 'Radhanagar Beach — Havelock Island' },
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/6ecfc2dd4a14e788.jpg', caption: 'Baratang Limestone Caves' },
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/a65796395bcd1899.jpeg', caption: 'Kalapathar Beach — Swaraj Dweep' },
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/5e58659f6f3d1be3.jpg', caption: 'Cellular Jail — Port Blair' },
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/e41bc6b159a2f2e4.jpeg', caption: 'Scuba Diving & Coral Reefs' },
  { src: 'https://gkmgrandandaman.com/assets/img/gallery/5bafddb0fc573a4c.jpeg', caption: 'Private Andaman Cruise Services' }
];

export const REVIEWS = [
  {
    author: 'Karthik & Priya S.',
    city: 'Chennai',
    quote: 'Mr. Guru Swamy personally ensured our 5-day honeymoon was seamless. Cozy rooms at Hotel GKM Grand, tasty breakfast & smooth Makruzz transfers!'
  },
  {
    author: 'Rajeshwari Nair',
    city: 'Bengaluru',
    quote: 'Best all-in-one hotel and local tour operator in Port Blair. Their own AC Xylo and helpful staff made Baratang & Havelock effortless.'
  },
  {
    author: 'Ankit Sharma',
    city: 'New Delhi',
    quote: 'Booked our Andaman LTC family package with GKM Grand. Spacious Deluxe Suite rooms and prompt 24/7 trip assistance throughout.'
  },
  {
    author: 'Deepak & Sneha M.',
    city: 'Pune',
    quote: 'The beachfront candlelight dinner in Havelock and Radhanagar photoshoot were magical. Truly deserving of their 4.8 Google Rating!'
  }
];
