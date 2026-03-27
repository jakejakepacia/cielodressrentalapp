import {
  AvailabilityWindow,
  Booking,
  CategoryCard,
  Dress,
  HowItWorksStep,
  Profile,
  Testimonial,
} from "./../types";

export const demoDresses: Dress[] = [
  {
    id: "dress-aurora",
    slug: "aurora-bloom-gown",
    name: "Aurora Bloom Gown",
    category: "Birthday",
    description:
      "A layered blush tulle gown with pearl straps and a soft satin bow for first birthday portraits and celebrations.",
    size: "1yr",
    material: "Soft tulle, satin lining, pearl accents",
    priceDaily: 950,
    priceWeekly: 4200,
    priceMonthly: 14800,
    featured: true,
    isNew: true,
    colorLabel: "Blush pink",
    availabilityLabel: "Available this week",
    images: [
      {
        id: "img-aurora-1",
        dressId: "dress-aurora",
        url: "/images/dress.jpeg",
        alt: "Aurora Bloom Gown in blush pink",
        isPrimary: true,
      },
      {
        id: "img-aurora-2",
        dressId: "bunny-dress",
        url: "/images/dresses/aurora-detail.svg",
        alt: "Close up of Aurora Bloom Gown pearls",
      },
    ],
  },
  {
    id: "dress-celeste",
    slug: "celeste-grace-dress",
    name: "Celeste Grace Dress",
    category: "Christening",
    description:
      "Classic ivory christening dress with embroidered bodice, heirloom lace sleeves, and a graceful chapel hem.",
    size: "2yrs",
    material: "Cotton silk blend, embroidery lace",
    priceDaily: 1100,
    priceWeekly: 4800,
    priceMonthly: 16500,
    featured: true,
    colorLabel: "Ivory cream",
    availabilityLabel: "Only 1 slot left",
    images: [
      {
        id: "img-celeste-1",
        dressId: "dress-celeste",
        url: "/images/fairy-dress.jpeg",
        alt: "Celeste Grace Dress in ivory",
        isPrimary: true,
      },
    ],
  },
  {
    id: "dress-luna",
    slug: "luna-cloud-dress",
    name: "Luna Cloud Dress",
    category: "Photoshoot",
    description:
      "A feather-soft blue gown with airy layers that catches light beautifully for dreamy studio and outdoor shoots.",
    size: "3yrs",
    material: "Organza, cotton lining, chiffon",
    priceDaily: 890,
    priceWeekly: 3900,
    priceMonthly: 13600,
    isNew: true,
    colorLabel: "Soft powder blue",
    availabilityLabel: "Popular this month",
    images: [
      {
        id: "img-luna-1",
        dressId: "dress-luna",
        url: "/images/fairy-dress.jpeg",
        alt: "Luna Cloud Dress in powder blue",
        isPrimary: true,
      },
    ],
  },
  {
    id: "dress-seraphina",
    slug: "seraphina-rose-gown",
    name: "Seraphina Rose Gown",
    category: "Wedding",
    description:
      "A formal baby gown with floral appliques, champagne undertones, and an elegant silhouette for weddings and family events.",
    size: "2yrs",
    material: "Mikado silk, floral applique, satin",
    priceDaily: 1250,
    priceWeekly: 5600,
    priceMonthly: 18900,
    featured: true,
    colorLabel: "Champagne beige",
    availabilityLabel: "Ready to book",
    images: [
      {
        id: "img-seraphina-1",
        dressId: "dress-seraphina",
        url: "/images/bunny-dress.jpeg",
        alt: "Seraphina Rose Gown in champagne",
        isPrimary: true,
      },
    ],
  },
  {
    id: "dress-mila",
    slug: "mila-petal-party-dress",
    name: "Mila Petal Party Dress",
    category: "Birthday",
    description:
      "A playful beige party dress with layered petals and puff sleeves, styled for cake smashes and soft studio sets.",
    size: "1yr",
    material: "Organza petals, cotton blend lining",
    priceDaily: 780,
    priceWeekly: 3400,
    priceMonthly: 12400,
    colorLabel: "Soft beige",
    availabilityLabel: "Available",
    images: [
      {
        id: "img-mila-1",
        dressId: "dress-mila",
        url: "/images/fairy-dress.jpeg",
        alt: "Mila Petal Party Dress in beige",
        isPrimary: true,
      },
    ],
  },
  {
    id: "dress-ella",
    slug: "ella-sky-bow-dress",
    name: "Ella Sky Bow Dress",
    category: "Photoshoot",
    description:
      "A polished baby blue dress with an oversized bow and a clean fitted bodice for modern editorial sessions.",
    size: "3yrs",
    material: "Satin twill, cotton voile",
    priceDaily: 860,
    priceWeekly: 3650,
    priceMonthly: 12900,
    colorLabel: "Sky blue",
    availabilityLabel: "New arrival",
    images: [
      {
        id: "img-ella-1",
        dressId: "dress-ella",
        url: "/images/fairy-dress.jpeg",
        alt: "Ella Sky Bow Dress in baby blue",
        isPrimary: true,
      },
    ],
  },
];

export const demoCategories: CategoryCard[] = [
  {
    id: "cat-birthday",
    title: "Birthday",
    description:
      "Soft statement gowns for milestone parties and cake smash sets.",
    image: "/images/categories/birthday.svg",
  },
  {
    id: "cat-christening",
    title: "Christening",
    description:
      "Heirloom-inspired silhouettes with delicate lace and classic whites.",
    image: "/images/categories/christening.svg",
  },
  {
    id: "cat-photoshoot",
    title: "Photoshoot",
    description:
      "Light-catching dresses made for portraits and styled sessions.",
    image: "/images/categories/photoshoot.svg",
  },
  {
    id: "cat-wedding",
    title: "Wedding",
    description:
      "Elegant occasionwear for flower girls and formal family events.",
    image: "/images/categories/wedding.svg",
  },
];

export const demoTestimonials: Testimonial[] = [
  {
    id: "tm-1",
    name: "Camille R.",
    occasion: "1st Birthday",
    quote:
      "The gown looked even prettier in person, and the whole booking flow felt so easy during a busy week.",
  },
  {
    id: "tm-2",
    name: "Angela M.",
    occasion: "Christening",
    quote:
      "Everything was clean, on time, and beautifully packed. The dress made our photos feel extra special.",
  },
  {
    id: "tm-3",
    name: "Denise T.",
    occasion: "Family Photoshoot",
    quote:
      "We loved how premium the dress felt without needing to buy something our baby would only wear once.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "step-1",
    title: "Browse soft, occasion-ready styles",
    description:
      "Pick a gown by size, event, and preferred budget in just a few taps.",
  },
  {
    id: "step-2",
    title: "Choose your rental dates",
    description:
      "Select your baby’s wear dates and instantly see the total rental price.",
  },
  {
    id: "step-3",
    title: "Confirm your booking",
    description:
      "Complete checkout with your contact details and preferred payment method.",
  },
  {
    id: "step-4",
    title: "Receive, wear, and return",
    description:
      "Enjoy the special day, then return the dress based on your booking schedule.",
  },
];

export const demoProfiles: Profile[] = [
  {
    id: "demo-admin",
    fullName: "Cielo Admin",
    email: "admin@cielosdressrental.com",
    role: "admin",
    contactNumber: "09171234567",
  },
  {
    id: "demo-parent",
    fullName: "Isabelle Parent",
    email: "parent@example.com",
    role: "customer",
    contactNumber: "09181234567",
  },
];

export const demoBookings: Booking[] = [
  {
    id: "booking-1",
    userId: "demo-parent",
    status: "pending",
    paymentMethod: "gcash",
    contactName: "Isabelle Parent",
    contactNumber: "09181234567",
    address: "102 Lilac Street, Quezon City",
    createdAt: "2026-03-20T10:00:00.000Z",
    items: [
      {
        id: "item-1",
        dressId: "dress-celeste",
        dress: demoDresses[1],
        startDate: "2026-04-04",
        endDate: "2026-04-06",
        totalDays: 3,
        totalPrice: 3300,
      },
    ],
  },
  {
    id: "booking-2",
    userId: "demo-parent",
    status: "approved",
    paymentMethod: "cash",
    contactName: "Isabelle Parent",
    contactNumber: "09181234567",
    address: "102 Lilac Street, Quezon City",
    createdAt: "2026-03-16T10:00:00.000Z",
    items: [
      {
        id: "item-2",
        dressId: "dress-aurora",
        dress: demoDresses[0],
        startDate: "2026-04-12",
        endDate: "2026-04-14",
        totalDays: 3,
        totalPrice: 2850,
      },
    ],
  },
];

export const demoAvailability: AvailabilityWindow[] = [
  {
    dressId: "dress-aurora",
    startDate: "2026-04-12",
    endDate: "2026-04-14",
    status: "approved",
  },
  {
    dressId: "dress-celeste",
    startDate: "2026-04-04",
    endDate: "2026-04-06",
    status: "pending",
  },
  {
    dressId: "dress-luna",
    startDate: "2026-04-19",
    endDate: "2026-04-21",
    status: "approved",
  },
];
