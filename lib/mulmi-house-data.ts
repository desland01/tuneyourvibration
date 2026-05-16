export const mulmiHouseDomain = "https://apartmentforrentinkathmandu.com";

export const mulmiHousePath = "/mulmi-house/apartment-for-rent-in-kathmandu";

export const mulmiHouseCurrentUrl = `https://www.tuneyourvibration.com${mulmiHousePath}`;

export const mulmiHousePageTitle =
  "Apartment for Rent in Kathmandu | Mulmi House Furnished Serviced 1 BHK Apartments in Patan Lalitpur with Utilities Wi-Fi Housekeeping Laundry Kitchen Concierge Monthly Rates and Christina Landry Guest Support";

export const mulmiHouseMetaDescription =
  "Mulmi House offers furnished serviced 1 BHK apartments in Patan, Lalitpur near Kathmandu with utilities, Wi-Fi, kitchen, housekeeping, laundry, and concierge support.";

export const mulmiHouse = {
  name: "Mulmi House",
  location: "Gabahal Road, Lalitpur 44600",
  area: "Patan, Lalitpur, Kathmandu Valley, Nepal",
  manager: "Christina Landry",
  managerRole: "Guest Relations Manager",
  phoneNepal: "+977-9702694437",
  phoneUs: "+1-980-254-2117",
  whatsappNepal: "https://wa.me/9779702694437",
  whatsappUs: "https://wa.me/19802542117",
  bookingUrl: "https://tuneyourvibration.10to8.com",
  canvaUrl: "https://canva.link/qcbnvmesaywui49",
  galleryUrls: [
    "https://photos.app.goo.gl/Me1H6VCT3MxATqtE9",
    "https://photos.app.goo.gl/dnuiwTEWfs4imQKR8",
  ],
  mapUrls: [
    "https://maps.app.goo.gl/8AwvRZR8H8iqJcsdA?g_st=ac",
    "https://maps.app.goo.gl/a1q7KEnohBMd7hjR9?g_st=ac",
  ],
};

export const mulmiImages = [
  {
    src: "/brand-assets/tune-vibration/mulmi/nepa-02.jpg",
    alt: "Mulmi House Nepa apartment dining area with exposed Newari brick wall, hand-forged pendant lights, and a wooden table",
  },
  {
    src: "/brand-assets/tune-vibration/mulmi/silu-12.jpg",
    alt: "Silu apartment private balcony at Mulmi House with rattan chairs and a brick courtyard",
  },
  {
    src: "/brand-assets/tune-vibration/mulmi/nepa-04.jpg",
    alt: "Mulmi House Nepa living room with restored Newari woodwork and warm evening light",
  },
  {
    src: "/brand-assets/tune-vibration/mulmi/silu-03.jpg",
    alt: "Silu apartment bedroom with sheer curtains and warm afternoon light at Mulmi House",
  },
  {
    src: "/brand-assets/tune-vibration/mulmi/nepa-07.jpg",
    alt: "Mulmi House Nepa apartment kitchen with full appliances and Patan-style cabinetry",
  },
  {
    src: "/brand-assets/tune-vibration/mulmi/silu-11.jpg",
    alt: "Silu apartment workspace at Mulmi House with desk, lamp, and reading corner",
  },
];

export const mulmiApartments = [
  {
    name: "Silu Apartment",
    shortStay: "$25 per night",
    monthly: "$600 for a full month",
    note: "Longer stays can receive additional discounts after Christina confirms dates.",
  },
  {
    name: "Nepa Apartment",
    shortStay: "$20 per night",
    monthly: "$500 for a full month",
    note: "Longer stays can receive additional discounts after Christina confirms dates.",
  },
];

export const mulmiIncluded = [
  "Fully furnished 1 BHK studio",
  "All utilities included",
  "Free Wi-Fi",
  "Free filtered drinking water",
  "Breakfast available for $5 per person",
  "AC and heater",
  "24/7 hot and cold water",
  "Free weekly housekeeping and laundry service",
  "Fully equipped kitchen with refrigerator, stovetop, rice cooker, and coffee press",
  "Daily trash collection",
  "Concierge service from 7 AM to 6 PM",
];

export const mulmiLocalGuidance = [
  "Nearby markets and everyday essentials in Gabahal",
  "Local cafes, clinics, and practical orientation",
  "A gentle introduction to life in Nepal",
  "Local festivals, holidays, cooking classes, yoga, tours, trekking, and other experiences",
];

export const mulmiFaqs = [
  {
    question: "Is Mulmi House an apartment for rent in Kathmandu or Lalitpur?",
    answer:
      "Mulmi House is in Patan, Lalitpur, within the Kathmandu Valley. The page targets Kathmandu rental searches because many travelers use Kathmandu as the broader search area, but the actual location is Gabahal Road, Lalitpur 44600.",
  },
  {
    question: "Are utilities included at Mulmi House?",
    answer:
      "Yes. The source rental information says all utilities are included, along with free Wi-Fi, filtered drinking water, AC and heater, and 24/7 hot and cold water.",
  },
  {
    question: "Can I stay for a full month?",
    answer:
      "Yes. Mulmi House lists monthly rates for both apartments. Silu Apartment is listed at $600 for a full month, and Nepa Apartment is listed at $500 for a full month. Longer stays can receive additional discounts after dates are confirmed.",
  },
  {
    question: "Is housekeeping included?",
    answer:
      "Yes. Mulmi House includes free weekly housekeeping and laundry service. Daily trash collection is also included when full trash bags are placed outside the door at night for morning pickup.",
  },
  {
    question: "Does each apartment have a kitchen?",
    answer:
      "Yes. Each apartment includes a fully equipped kitchen with a full-size refrigerator, stovetop, rice cooker, coffee press, and the basics needed to cook and feel at home.",
  },
  {
    question: "Who manages guest questions?",
    answer:
      "Christina Landry is the Guest Relations Manager for Mulmi House. Guests can contact Christina through the Nepal or USA phone and WhatsApp numbers listed on the page.",
  },
];

export const mulmiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${mulmiHouseCurrentUrl}#lodging`,
      name: mulmiHouse.name,
      url: mulmiHouseCurrentUrl,
      description: mulmiHouseMetaDescription,
      telephone: mulmiHouse.phoneNepal,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gabahal Road",
        addressLocality: "Lalitpur",
        postalCode: "44600",
        addressCountry: "NP",
      },
      areaServed: ["Patan", "Lalitpur", "Kathmandu Valley", "Nepal"],
      image: mulmiImages.map((image) => `https://www.tuneyourvibration.com${image.src}`),
      sameAs: [mulmiHouse.canvaUrl, ...mulmiHouse.galleryUrls, ...mulmiHouse.mapUrls],
    },
    {
      "@type": "Service",
      "@id": `${mulmiHouseCurrentUrl}#service`,
      name: "Furnished serviced apartment rental in Patan, Lalitpur",
      provider: {
        "@id": `${mulmiHouseCurrentUrl}#lodging`,
      },
      areaServed: ["Patan", "Lalitpur", "Kathmandu Valley", "Nepal"],
      serviceType: "Serviced apartment rental",
      description:
        "Fully furnished 1 BHK serviced apartments with utilities, Wi-Fi, filtered water, kitchen, housekeeping, laundry, and concierge support.",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${mulmiHouseCurrentUrl}#offers`,
      name: "Mulmi House apartment rates",
      itemListElement: mulmiApartments.map((apartment) => ({
        "@type": "Offer",
        name: apartment.name,
        description: `${apartment.shortStay}; ${apartment.monthly}. ${apartment.note}`,
        availability: "https://schema.org/InStock",
        seller: {
          "@id": `${mulmiHouseCurrentUrl}#lodging`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${mulmiHouseCurrentUrl}#faq`,
      mainEntity: mulmiFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${mulmiHouseCurrentUrl}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tuneyourvibration.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mulmi House",
          item: mulmiHouseCurrentUrl,
        },
      ],
    },
  ],
};
