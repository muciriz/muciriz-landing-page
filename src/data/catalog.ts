export interface ProvisionItem {
  id: string;
  name: string;
  categoryTag: string;
  categoryGroup: 'fish' | 'spices' | 'vegetables';
  description: string;
  grossWeightBadge: string;
  netWeightBadge: string;
  priceDisplay: string;
  imageUrl: string;
  brand: string;
}

export const PROVISIONS: ProvisionItem[] = [
  {
    id: 'king-fish-steaks',
    name: 'King Fish (Neymeen) Steaks',
    categoryTag: 'SHORECATCH SEAFOOD • READY TO COOK FRESH CUT',
    categoryGroup: 'fish',
    description: 'Firm, succulent premium steaks from large wild-caught Neymeen. Clean center bone, perfect for Malabar fry or Syrian curry.',
    grossWeightBadge: 'Gross Weight: 600g',
    netWeightBadge: 'True Net Weight: 500g',
    priceDisplay: 'Rs. 590 / 500g',
    imageUrl: '/images/fresh_fish_ice.jpg',
    brand: 'ShoreCatch',
  },
  {
    id: 'pearl-spot-whole',
    name: 'Pearl Spot (Karimeen) Whole',
    categoryTag: 'SHORECATCH SEAFOOD • BACKWATER & LAKE CATCH',
    categoryGroup: 'fish',
    description: 'Clean backwater Pearl Spot with precise diagonal slits on the side. Sourced from Vembanad backwaters, ready for deep fry or pollichathu.',
    grossWeightBadge: 'Gross Weight: 600g',
    netWeightBadge: 'True Net Weight: 500g',
    priceDisplay: 'Rs. 430 / 500g',
    imageUrl: '/images/hero_fish_curry.jpg',
    brand: 'ShoreCatch',
  },
  {
    id: 'white-pomfret-aavoli',
    name: 'White Pomfret (Aavoli)',
    categoryTag: 'SHORECATCH SEAFOOD • COASTAL CHILLED CATCH',
    categoryGroup: 'fish',
    description: 'Delicate, pristine white marine Pomfret, cleaned and gutted with head intact. Prized for its butter-soft texture and rich coastal flavor.',
    grossWeightBadge: 'Gross Weight: 600g',
    netWeightBadge: 'True Net Weight: 500g',
    priceDisplay: 'Rs. 520 / 500g',
    imageUrl: '/images/fresh_fish_ice.jpg',
    brand: 'ShoreCatch',
  },
  {
    id: 'tiger-prawns-chemmeen',
    name: 'Tiger Prawns (Chemmeen)',
    categoryTag: 'SHORECATCH SEAFOOD • WILD TRAWLED HARBOUR',
    categoryGroup: 'fish',
    description: 'Large coastal sea prawns, fully peeled and deveined with tail-shell on. Sweet, bouncy bite ideal for roast or coconut milk curry.',
    grossWeightBadge: 'Gross Weight: 550g',
    netWeightBadge: 'True Net Weight: 450g',
    priceDisplay: 'Rs. 460 / 450g',
    imageUrl: '/images/fresh_fish_ice.jpg',
    brand: 'ShoreCatch',
  },
  {
    id: 'heirloom-fish-curry-paste',
    name: 'Heirloom Fish Curry Paste',
    categoryTag: 'ZURIYANI KITCHEN • DRY MASALAS',
    categoryGroup: 'spices',
    description: 'Slow-roasted shallots, coriander, Byadagi chilli, and crushed Malabar black pepper ground in cold stone mills for authentic taste.',
    grossWeightBadge: 'Pack Size: 250g Jar',
    netWeightBadge: 'Shelf Life: 3 Weeks Chilled',
    priceDisplay: 'Rs. 140 / 250g',
    imageUrl: '/images/coastal_spices.jpg',
    brand: 'Zuriyani Kitchen',
  },
  {
    id: 'syrian-meen-pollichathu-masala',
    name: 'Syrian Meen Pollichathu Masala',
    categoryTag: 'ZURIYANI KITCHEN • MARINADES',
    categoryGroup: 'spices',
    description: 'Traditional thick shallot, ginger, and curry leaf paste with coconut vinegar and kokum extract formulated for banana leaf wrapping.',
    grossWeightBadge: 'Pack Size: 200g Pouch',
    netWeightBadge: 'Usage: 3 Pan-Fried Meals',
    priceDisplay: 'Rs. 130 / 200g',
    imageUrl: '/images/coastal_spices.jpg',
    brand: 'Zuriyani Kitchen',
  },
  {
    id: 'fish-sambar-stews-bunch',
    name: 'Fish Sambar & Stews Bunch',
    categoryTag: 'VEGEZE FARMS • FRESH PACK',
    categoryGroup: 'vegetables',
    description: 'Clean sorted native drumsticks, green plantains, baby shallots, curry leaves, and green chillies packed within 6 hours of farm plucking.',
    grossWeightBadge: 'Pack Size: 1 Family Meal',
    netWeightBadge: 'Freshness: Plucked this morning',
    priceDisplay: 'Rs. 75 / pack',
    imageUrl: '/images/hero_fish_curry.jpg',
    brand: 'VegEze',
  },
  {
    id: 'daily-curry-aromatics-pack',
    name: 'Daily Curry Aromatics Pack',
    categoryTag: 'VEGEZE FARMS • DAILY COMBOS',
    categoryGroup: 'vegetables',
    description: 'Hand-bundled baby shallots (Chuvannulli), fresh ginger root, bird’s eye green chillies, and washed tender curry leaves.',
    grossWeightBadge: 'Pack Size: 400g Bunch',
    netWeightBadge: 'Origin: Athirampuzha Farm',
    priceDisplay: 'Rs. 65 / pack',
    imageUrl: '/images/coastal_spices.jpg',
    brand: 'VegEze',
  },
];

export const FAQS = [
  {
    q: 'How is Muciriz fish different from ordinary market fish?',
    a: 'Muciriz fish is procured directly from fresh harbour landings, inspected to be 100% free of ammonia and formalin, completely descaled, gutted, washed with purified water, and hermetically vacuum-packed. You get zero foul odor in your refrigerator and ready-to-pan convenience.'
  },
  {
    q: 'What are the two flagship brands under Muciriz Traders?',
    a: 'We operate two specialized brands: ShoreCatch (dedicated to fresh seafood, cleaned cuts, and marine delicacies) and Zuriyani Kitchen & VegEze (dedicated to handcrafted fish curry spices, marinades, and fresh farm vegetable bunches that pair perfectly with fish).'
  },
  {
    q: 'How does the vacuum packaging help?',
    a: 'Vacuum sealing removes oxygen from the tray, locking in natural sea moisture and tenderness while preventing microbial decay. It ensures that your fish remains as fresh as the morning catch without freezing it into hard blocks or losing flavor.'
  },
  {
    q: 'What are the delivery areas and time slots?',
    a: 'We currently deliver across Kochi, Aluva, Kottayam, and Athirampuzha through scheduled morning and evening slots.'
  }
];

