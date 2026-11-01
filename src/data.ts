export const BUSINESS = {
  name: "Veena's Beauty Salon",
  tagline: "Beauty is an Art. Let Yours Shine.",
  address: "Shop No. 18-19, First Floor, I Block Market, Block I, Sector 12, Noida, Uttar Pradesh 201301",
  phone: "+91 8447455551",
  phoneRaw: "918447455551",
  googleMapsUrl: "https://maps.app.goo.gl/bKXakYD2AJg4oAnk6",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Veena%27s+Beauty+Salon+Sector+12+Noida+Uttar+Pradesh+201301",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=I+Block+Market+Sector+12+Noida+Uttar+Pradesh+201301&output=embed",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export type ServiceCategory = {
  title: string;
  image: string;
  items: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Facial & Skin Care",
    image:
      "https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&w=900",
    items: [
      "Herbal Facial",
      "Fruit Facial",
      "Cleanup",
      "Skin Care",
      "Face Bleach",
      "Specialized Facial Services",
    ],
  },
  {
    title: "Makeup Services",
    image:
      "https://images.pexels.com/photos/13933220/pexels-photo-13933220.jpeg?auto=compress&cs=tinysrgb&w=900",
    items: [
      "Bridal Makeup",
      "HD Bridal Makeup",
      "Party Makeup",
      "Engagement Makeup",
      "Reception Makeup",
      "Special Occasion Makeup",
    ],
  },
  {
    title: "Hair Services",
    image:
      "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=900",
    items: [
      "Haircut & Styling",
      "Hair Coloring",
      "Hair Highlights",
      "Hair Spa",
      "Keratin Treatment",
      "Hair Smoothening",
    ],
  },
  {
    title: "Beauty & Grooming",
    image:
      "https://images.pexels.com/photos/7446914/pexels-photo-7446914.jpeg?auto=compress&cs=tinysrgb&w=900",
    items: [
      "Waxing",
      "Eyebrow Threading",
      "Manicure",
      "Pedicure",
      "Upper Lip",
      "Eyebrow Shaping",
    ],
  },
  {
    title: "Bridal & Special Occasions",
    image:
      "https://images.pexels.com/photos/28941551/pexels-photo-28941551.jpeg?auto=compress&cs=tinysrgb&w=900",
    items: [
      "Bridal Packages",
      "Pre-Bridal Services",
      "Engagement Makeup",
      "Party Preparation",
      "Special Occasion Styling",
    ],
  },
];

export const WHY_CHOOSE = [
  {
    title: "Personalized Beauty Care",
    desc: "Every treatment is tailored to your unique skin type, features, and preferences.",
    icon: "Sparkles",
  },
  {
    title: "Professional Beauty Services",
    desc: "Skilled beauty experts delivering precise, refined results for every client.",
    icon: "Award",
  },
  {
    title: "Attention to Detail",
    desc: "We obsess over the little things, so every look is polished to perfection.",
    icon: "Eye",
  },
  {
    title: "Quality Beauty Products",
    desc: "Only premium, skin-friendly products touch your skin during every service.",
    icon: "Heart",
  },
  {
    title: "Comfortable Environment",
    desc: "A serene, hygienic, and welcoming space designed for your relaxation.",
    icon: "Home",
  },
  {
    title: "Customer-Focused Experience",
    desc: "Your satisfaction is our priority — from consultation to the final reveal.",
    icon: "Smile",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/28941551/pexels-photo-28941551.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Indian bride in traditional attire admiring her reflection",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/13933220/pexels-photo-13933220.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Makeup artist applying lipstick in a beauty studio",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Hair color application in a modern salon",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Facial skincare treatment in a spa",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chic modern beauty salon interior",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/19021379/pexels-photo-19021379.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Indian bride wearing vibrant traditional attire and jewelry",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Eyebrow threading treatment in a salon",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/4981479/pexels-photo-4981479.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Vibrant hair coloring process",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Spacious contemporary beauty salon interior",
    span: "",
  },
];

export const ABOUT_POINTS = [
  "Personalized beauty services crafted around you",
  "Professional beauty care with a refined touch",
  "Bridal and party makeup for every celebration",
  "Hair styling and treatments for all hair types",
  "Skincare and grooming services that refresh",
  "Customer-focused experiences from start to finish",
];

export const ALL_SERVICES_FLAT = SERVICE_CATEGORIES.flatMap((c) => c.items);
