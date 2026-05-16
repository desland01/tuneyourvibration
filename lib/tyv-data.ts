export const siteBaseUrl = "https://www.tuneyourvibration.com";

export const business = {
  name: "Tune Vibration Energy Healing",
  shortName: "Tune Vibration",
  practitioner: "Christina Landry",
  practitionerShort: "Christina",
  role: "Energeticist and Energy Alchemist",
  email: "",
  phoneUs: "+1-980-254-2117",
  phoneNepal: "+977-970-269-4437",
  whatsappUs: "https://wa.me/19802542117",
  whatsappNepal: "https://wa.me/9779702694437",
  locations: [
    "Virtual sessions worldwide",
    "Charlotte, North Carolina",
    "Kathmandu Valley and Lalitpur, Nepal",
  ],
  tagline:
    "Vibrational healing, sound therapy, chakra balance, and intuitive energy work for sensitive, heart-led people.",
};

export const images = {
  hero: "/brand-assets/tune-vibration/home/image-005.jpg",
  brand: "/brand-assets/tune-vibration/home/image-001.png",
  group: "/brand-assets/tune-vibration/ig/DX5jxALClcE.jpg",
  groupBath: "/brand-assets/tune-vibration/home/image-002.jpg",
  botanical: "/brand-assets/tune-vibration/home/image-003.jpg",
  christina: "/brand-assets/tune-vibration/ig/DRVxmaykvq8.jpg",
  nepalChristina: "/brand-assets/tune-vibration/ig/DX5jxALClcE.jpg",
  treeOfLife: "/brand-assets/tune-vibration/sessions/image-007.png",
  nepalLandscape: "/brand-assets/tune-vibration/nepal/image-008.jpg",
  nepalValley: "/brand-assets/tune-vibration/nepal/image-002.jpg",
  retreatSpace: "/brand-assets/tune-vibration/ig/DNAdqTdRLfV.jpg",
};

export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/energy-healing", label: "Energy Healing" },
  { href: "/sound-healing", label: "Sound Healing" },
  { href: "/reiki-healing", label: "Reiki" },
  { href: "/nepal-retreats", label: "Nepal Retreats" },
  { href: "/mulmi-house", label: "Mulmi House" },
  { href: "/about-christina", label: "About" },
  { href: "/book", label: "Book" },
];

export type ServiceSlug =
  | "energy-healing"
  | "sound-healing"
  | "reiki-healing"
  | "chakra-aura-clearing"
  | "intuitive-readings";

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  keyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
  intro: string;
  bestFor: string[];
  includes: string[];
  expect: string[];
  related: ServiceSlug[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "energy-healing",
    title: "Energy Healing",
    eyebrow: "Virtual and in-person sessions",
    keyword: "energy healing",
    secondaryKeywords: [
      "spiritual energy healing",
      "energy healing online",
      "energy healing Charlotte NC",
      "virtual energy healing",
    ],
    metaTitle: "Energy Healing Online and In Person | Tune Vibration",
    metaDescription:
      "Energy healing sessions with Christina for chakra alignment, aura clearing, emotional release, intuitive guidance, and vibrational balance.",
    image: images.hero,
    intro:
      "Christina works with sound, intuitive scanning, chakra alignment, aura clearing, and energetic release to help clients return to a steadier inner frequency.",
    bestFor: [
      "Feeling energetically heavy, scattered, or blocked",
      "Sensitive people who absorb other people's emotions or stress",
      "Clients seeking clarity, grounding, and a more connected spiritual practice",
      "Remote sessions when travel is not practical",
    ],
    includes: [
      "Intuitive energy scan",
      "Chakra and aura clearing",
      "Sound and vibration therapy",
      "Emotional release support",
      "Tree of Life grid healing when appropriate",
    ],
    expect: [
      "Sessions are fully clothed and can be held virtually or in person.",
      "Christina may use sound bowls, tuning forks, tonal intervals, Reiki, and intuitive guidance.",
      "Some clients book one session, while deeper work may be planned as a series spaced at least one week apart.",
    ],
    related: ["sound-healing", "chakra-aura-clearing", "intuitive-readings"],
  },
  {
    slug: "sound-healing",
    title: "Sound Healing",
    eyebrow: "Frequency, bowls, and vibration therapy",
    keyword: "sound healing",
    secondaryKeywords: [
      "sound healing near me",
      "sound bath",
      "sound healing benefits",
      "vibrational healing",
    ],
    metaTitle: "Sound Healing and Vibrational Therapy | Tune Vibration",
    metaDescription:
      "Sound healing sessions and group sound baths with crystal bowls, Tibetan bowls, tuning forks, and harmonic frequencies for deep relaxation.",
    image: images.group,
    intro:
      "Sound healing uses harmonic frequencies, crystal bowls, Tibetan bowls, tuning forks, and voice to invite relaxation and energetic balance.",
    bestFor: [
      "Stress release and nervous-system settling",
      "Meditative restoration through sound and frequency",
      "Group sound bath experiences",
      "Clients drawn to vibration-based energy work",
    ],
    includes: [
      "Crystal and Tibetan bowl work",
      "Tuning forks and tonal intervals",
      "Frequency-based energetic clearing",
      "Guided rest in a meditative state",
      "Optional integration with chakra balancing",
    ],
    expect: [
      "For group sound healing, guests typically lie down comfortably and close their eyes.",
      "Christina blends sound with intuitive energy work rather than offering a generic sound bath.",
      "Sound sessions may be paired with yoga, aura clearing, or deeper energy healing.",
    ],
    related: ["energy-healing", "chakra-aura-clearing", "reiki-healing"],
  },
  {
    slug: "reiki-healing",
    title: "Reiki Healing",
    eyebrow: "Remote or in-person Reiki support",
    keyword: "reiki healing",
    secondaryKeywords: [
      "reiki healing near me",
      "virtual Reiki healing",
      "Reiki chakra balance",
      "spiritual Reiki session",
    ],
    metaTitle: "Reiki Healing Sessions | Virtual Reiki and Chakra Balance",
    metaDescription:
      "Book Reiki healing with Christina for remote or in-person energetic balance, chakra support, intuitive reading, and grounding.",
    image: images.christina,
    intro:
      "Reiki healing sessions support energetic balance through gentle, intuitive energy work that can be offered in person or virtually.",
    bestFor: [
      "Gentle energetic support",
      "Virtual healing when distance matters",
      "Chakra balance and grounding",
      "A shorter entry point into Christina's work",
    ],
    includes: [
      "Reiki energy healing",
      "Chakra balancing",
      "Aura clearing",
      "Optional intuitive reading",
      "Remote or in-person format",
    ],
    expect: [
      "Reiki can be booked as a 30-minute or 60-minute session.",
      "Virtual Reiki sessions are available worldwide.",
      "Clients often pair Reiki with intuitive reading or aura clearing.",
    ],
    related: ["energy-healing", "chakra-aura-clearing", "intuitive-readings"],
  },
  {
    slug: "chakra-aura-clearing",
    title: "Chakra Balancing and Aura Clearing",
    eyebrow: "Energetic reset work",
    keyword: "chakra balancing",
    secondaryKeywords: [
      "chakra balancing near me",
      "aura clearing",
      "cord cutting",
      "chakra and aura cleansing",
    ],
    metaTitle: "Chakra Balancing and Aura Clearing | Tune Vibration",
    metaDescription:
      "Chakra balancing, aura clearing, cord cutting, and Tree of Life energy activation with Christina online or in person.",
    image: images.treeOfLife,
    intro:
      "This focused clearing work is designed for clients who want to address energetic heaviness, cord attachments, chakra imbalance, or old patterns.",
    bestFor: [
      "Feeling drained after relationships, work, or major life changes",
      "Clearing old emotional residue",
      "Focused chakra and aura support",
      "A shorter session with specific energetic intention",
    ],
    includes: [
      "Chakra balancing",
      "Aura clearing",
      "Cord cutting",
      "Tree of Life activation when appropriate",
      "Energy scan and intuitive feedback",
    ],
    expect: [
      "Focused clearing sessions are available in 30-minute formats.",
      "Christina may recommend spacing deeper work at least one week apart.",
      "After-care may include rest, water, gentle movement, and quiet integration time.",
    ],
    related: ["energy-healing", "reiki-healing", "sound-healing"],
  },
  {
    slug: "intuitive-readings",
    title: "Intuitive Readings and Mentorship",
    eyebrow: "Guidance for the next layer",
    keyword: "intuitive reading",
    secondaryKeywords: [
      "intuitive mentorship",
      "spiritual guidance",
      "energy activation",
      "online intuitive reading",
    ],
    metaTitle: "Intuitive Readings and Spiritual Mentorship | Tune Vibration",
    metaDescription:
      "Online intuitive readings and mentorship sessions with Christina for clarity, energetic insight, and practical spiritual integration.",
    image: images.botanical,
    intro:
      "Intuitive readings and mentorship sessions focus on insight, energetic patterns, inner guidance, and practical spiritual integration.",
    bestFor: [
      "Life transitions and emotional clarity",
      "Understanding recurring energetic patterns",
      "Sensitive people learning to trust their intuition",
      "A conversation-led session with intuitive guidance",
    ],
    includes: [
      "Intuitive reading",
      "Energy activation",
      "Mentorship-style guidance",
      "Pattern and belief exploration",
      "Virtual worldwide access",
    ],
    expect: [
      "Sessions can be booked in 30-minute or 60-minute formats.",
      "Mentorship sessions are conversation-led and may include energetic activation.",
      "This page is guidance-focused and pairs naturally with deeper healing work.",
    ],
    related: ["energy-healing", "reiki-healing", "chakra-aura-clearing"],
  },
];

export function getService(slug: ServiceSlug): ServicePage {
  const page = servicePages.find((service) => service.slug === slug);

  if (!page) {
    throw new Error(`Missing service page: ${slug}`);
  }

  return page;
}

export const sessionOfferings = [
  {
    name: "The Magic",
    duration: "90 minutes",
    summary:
      "Frequency sound healing, intuitive reading, aura clearing, chakra balancing, shamanic healing, and Tree of Life activation.",
  },
  {
    name: "The Awakening",
    duration: "90 minutes",
    summary:
      "Deep energy healing with sound vibrations, chakra balancing, aura cleansing, Tree of Life grid healing, cord cutting, and spiritual insight.",
  },
  {
    name: "The Rejuvenation",
    duration: "60 minutes",
    summary:
      "Reiki healing, intuitive reading, chakra balancing, and frequency healing for stress release and renewal.",
  },
  {
    name: "Online Intuitive Mentorship and Energy Activation",
    duration: "60 minutes",
    price: "$200",
    summary:
      "Virtual mentorship with intuitive guidance and energetic activation.",
  },
  {
    name: "Virtual Reiki, Chakra Balance, and Intuitive Reading",
    duration: "60 minutes",
    price: "$200",
    summary:
      "Remote Reiki healing, chakra support, and intuitive reading.",
  },
  {
    name: "Intuitive Reading",
    duration: "60 minutes",
    price: "$200",
    summary:
      "A focused reading for clarity, guidance, and energetic insight.",
  },
  {
    name: "Virtual Reiki, Chakra Balance, and Intuitive Reading",
    duration: "30 minutes",
    price: "$150",
    summary:
      "A shorter remote session for Reiki, chakra balance, and intuitive guidance.",
  },
  {
    name: "Aura Clearing, Cord Cutting, and Chakra Balancing",
    duration: "30 minutes",
    price: "$125",
    summary:
      "A focused energetic clearing session.",
  },
  {
    name: "Intuitive Reading",
    duration: "30 minutes",
    price: "$125",
    summary:
      "A concise intuitive reading for one focused question or transition.",
  },
];

export const preparationGuidance = [
  "Wear comfortable clothing and socks. Avoid jewelry, metal belts, and heavy buckles.",
  "Limit caffeine for three hours before the session and avoid alcohol, weed, and recreational drugs.",
  "Eat lightly and avoid eating for about one hour before the session.",
  "Avoid perfumes and colognes, and tell Christina about sensitivities to incense or oils.",
  "Plan quiet time after the session and drink water for integration.",
];

export const afterCareGuidance = [
  "Rest and drink plenty of water for at least three days after a treatment.",
  "Dreams can feel vivid for up to a week while the session integrates.",
  "Gentle movement, an Epsom salt bath, time outside, journaling, or extra sleep can help.",
  "Avoid major decisions for a few days when possible.",
  "If urgent medical symptoms occur, contact a doctor or emergency care provider.",
];

export const credentials = [
  "Graduate of Delphi University and Spiritual Center",
  "Arthur Findlay College training",
  "Pacifica Graduate Institute / Jungian Psychology studies",
  "Certified Metaphysician Practitioner",
  "Certified Registered Medium and Spiritual Counselor",
  "Certified Color and Sound Healing",
  "Certified Applied Archetypal Astrology",
  "Fifth and Ninth Degree Spiritual Healer in The Holy Order of the Dove",
  "Certified yoga instructor",
  "Vipassana 10-day silent meditation training",
  "Licensed esthetician",
  "15+ years of study, training, and practice",
];

export const testimonials = [
  {
    name: "Google review theme",
    quote:
      "Clients describe feeling lighter, clearer, calmer, and more connected after Christina's sessions.",
  },
  {
    name: "Client theme",
    quote:
      "Several reviews mention emotional release, heart opening, and a sense of energetic shift.",
  },
  {
    name: "Client theme",
    quote:
      "People often note Christina's warmth, grounded presence, and strong intuitive accuracy.",
  },
];

export const groupSoundHealing = {
  title: "Group Sound Healing and Yoga",
  metaTitle: "Group Sound Healing and Yoga Class | Tune Vibration",
  metaDescription:
    "Group sound healing, sound bath experiences, and beginner Ashtanga yoga with sound energy healing in Lalitpur and Nepal.",
  highlights: [
    "Harmonic Sound Energy Healing Journey with crystal bowls and sacred vibration",
    "Shamanic Chumpi Stones Healing and alchemy sound healing",
    "Average group size of 10-20 people",
    "Beginner Ashtanga Yoga with Sound Energy Healing in Lalitpur",
  ],
  yogaDetails: [
    "Beginners' Ashtanga Yoga class",
    "Starts at 7:00 AM",
    "One hour class",
    "NPR 1000 per class",
    "Registration required with no drop-ins",
    "Location: Mulmi House, Gabahal Road, Lalitpur 44600",
  ],
};

export type NepalPageKind = "retreats" | "tours" | "treks";

export const nepalPages = {
  retreats: {
    href: "/nepal-retreats",
    title: "Spiritual Retreats in Nepal",
    keyword: "spiritual retreat Nepal",
    metaTitle: "Spiritual Retreat in Nepal | Tune Vibration",
    metaDescription:
      "A private spiritual awakening retreat in Nepal with sound bath wellness, intuitive exercises, yoga, Kathmandu touring, and Himalayan foothill travel.",
    intro:
      "Christina's Nepal retreat work blends sound bath wellness, meditative exercises, intuitive art, Kathmandu touring, and Himalayan travel for small private groups.",
    image: images.nepalLandscape,
    offerings: [
      "8-day Spiritual Awakening Retreat in Nepal",
      "Sound bath wellness and crystal sound bath integration",
      "Kathmandu touring and meditative exercises",
      "Syabrubesi, Pokhara, and Annapurna foothill travel",
      "Small private group format with airport pickup and dropoff",
    ],
  },
  tours: {
    href: "/kathmandu-valley-tours",
    title: "Kathmandu Valley Tours",
    keyword: "Kathmandu Valley tour",
    metaTitle: "Kathmandu Valley Tours and Sound Bath Add-Ons",
    metaDescription:
      "Kathmandu Valley tours with temple visits, monastery walks, sound bath add-ons, and private guided experiences in Nepal.",
    intro:
      "Private Kathmandu Valley experiences can combine temples, heritage towns, monastery walks, sunset viewpoints, and a private sound bath add-on.",
    image: images.nepalChristina,
    offerings: [
      "Sound Bath Experience add-on: private 1-hour sound healing session for two or more people",
      "Sound Healing Immersion with Kathmandu Valley Tour: full day, 6-8 hours",
      "Pashupatinath, Boudhanath, Swayambhunath, and Kathmandu Durbar Square temple tours",
      "Patan, Bhaktapur, Bungamati, Khokana, Nagarkot, Godavari, and Chandragiri options",
      "Guide and transportation options, with entry fees handled separately unless stated",
    ],
  },
  treks: {
    href: "/nepal-treks",
    title: "Guided Nepal Treks",
    keyword: "Nepal treks",
    metaTitle: "Guided Nepal Treks | Everest, Annapurna, Poon Hill",
    metaDescription:
      "Guided Nepal trekking options including Poon Hill, Mardi Himal, Everest View, Annapurna Base Camp, Langtang, Manaslu, Upper Mustang, and more.",
    intro:
      "Guided trekking options cover accessible Himalayan routes, classic base-camp routes, and more remote journeys with logistics coordinated through Christina.",
    image: images.nepalLandscape,
    offerings: [
      "Helambu, Poon Hill, Mardi Himal, and Pikey Peak",
      "Everest View / Panorama, Annapurna Base Camp, Langtang, and Khopra Ridge",
      "Everest Base Camp, Gokyo, Annapurna Circuit, Manaslu, and Tsum",
      "Upper Mustang, Everest Three Passes, Kanchenjunga, and Upper Dolpo",
      "Private guide, porter, accommodation, transportation, permits, and logistics available",
    ],
  },
};

export const keywordPlan = [
  {
    page: "/",
    primary: "vibrational healing",
    secondary: ["energy healing", "sound healing", "virtual energy healing"],
  },
  {
    page: "/energy-healing",
    primary: "energy healing",
    secondary: ["spiritual energy healing", "energy healing online"],
  },
  {
    page: "/sound-healing",
    primary: "sound healing",
    secondary: ["sound bath", "sound healing near me"],
  },
  {
    page: "/reiki-healing",
    primary: "reiki healing",
    secondary: ["virtual Reiki healing", "reiki healing near me"],
  },
  {
    page: "/chakra-aura-clearing",
    primary: "chakra balancing",
    secondary: ["aura clearing", "cord cutting"],
  },
  {
    page: "/nepal-retreats",
    primary: "spiritual retreat Nepal",
    secondary: ["retreat in Nepal", "wellness retreat Kathmandu"],
  },
  {
    page: "/kathmandu-valley-tours",
    primary: "Kathmandu Valley tour",
    secondary: ["Kathmandu temple tour", "Boudhanath tour"],
  },
  {
    page: "/nepal-treks",
    primary: "Nepal treks",
    secondary: ["guided Nepal trekking", "Everest Base Camp trek"],
  },
];

export const allRoutePaths = [
  "/",
  "/book",
  ...servicePages.map((service) => `/${service.slug}`),
  "/group-sound-healing-yoga",
  "/nepal-retreats",
  "/kathmandu-valley-tours",
  "/nepal-treks",
  "/mulmi-house/apartment-for-rent-in-kathmandu",
  "/about-christina",
  "/credentials",
  "/testimonials",
  "/after-care",
];
