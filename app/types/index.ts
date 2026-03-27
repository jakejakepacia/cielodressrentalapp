export type DressSize = "1yr" | "2yrs" | "3yrs";

export type DressCategory =
  | "Birthday"
  | "Christening"
  | "Photoshoot"
  | "Wedding";

export type BookingStatus = "pending" | "approved" | "rejected" | "completed";

export type PaymentMethod = "cash" | "gcash" | "bank_transfer";

export type UserRole = "customer" | "admin";

export type DressImage = {
  id: string;
  dressId: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
};

export type Dress = {
  id: string;
  slug: string;
  name: string;
  category: DressCategory;
  description: string;
  size: DressSize;
  material: string;
  priceDaily: number;
  priceWeekly: number;
  priceMonthly?: number;
  featured?: boolean;
  isNew?: boolean;
  colorLabel: string;
  availabilityLabel?: string;
  images: DressImage[];
};

export type BookingItem = {
  id: string;
  dressId: string;
  dress: Dress;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
};

export type Booking = {
  id: string;
  userId: string;
  status: BookingStatus;
  paymentMethod: PaymentMethod;
  contactName: string;
  contactNumber: string;
  address: string;
  createdAt: string;
  items: BookingItem[];
};

export type Profile = {
  id: string;
  fullName: string;
  email: string;
  contactNumber?: string;
  role: UserRole;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  occasion: string;
};

export type CategoryCard = {
  id: string;
  title: DressCategory;
  description: string;
  image: string;
};

export type HowItWorksStep = {
  id: string;
  title: string;
  description: string;
};

export type CatalogFilters = {
  size?: DressSize;
  category?: DressCategory;
  price?: "under-1500" | "1500-2500" | "2500-plus";
  sort?: "featured" | "price-asc" | "newest";
};

export type AvailabilityWindow = {
  dressId: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
};
