/**
 * ShopDropz Content Data Layer
 * Complete business information, structured and typed for reusability
 */

// Hero Section
export const heroContent = {
  tagline: "The Future of Automotive Service Starts After Hours",
  headline: "Transform Vehicle Drop-Off Into a 24/7 Customer Experience",
  description:
    "ShopDropz enables automotive service centers, repair shops, body shops, dealerships, and franchise networks to offer secure, unattended vehicle drop-off, real-time service tracking, and a completely digital customer experience.",
  cta: "Get Started Today",
  secondaryCta: "Learn More",
} as const;

export const heroStats = [
  { label: "24/7", description: "Convenience" },
  { label: "Real-Time", description: "Transparency" },
  { label: "Zero", description: "Paperwork" },
] as const;

// Problem/Solution Section
export const problemSolution = {
  problem: {
    headline: "Built for Today's Automotive Customer",
    description:
      "Customers expect the same convenience from their automotive service providers that they receive from banking, food delivery, and online shopping.",
    painPoints: [
      "Paper forms",
      "Phone calls",
      "Manual check-ins",
      "Limited service hours",
      "Fragmented communication",
    ],
  },
  solution: {
    headline: "ShopDropz Changes That",
    description:
      "Our mobile-first platform modernizes the entire service intake and communication process, allowing customers to drop off vehicles anytime while giving shops complete visibility and control.",
  },
} as const;

// How It Works - 5-Step Process
export const howItWorks = [
  {
    step: 1,
    title: "Customer Creates a Service Request",
    description:
      "Customers submit service details directly through the mobile app and select their preferred drop-off time.",
    icon: "ClipboardList",
  },
  {
    step: 2,
    title: "Secure QR-Based Vehicle Drop-Off",
    description: "A unique QR code guides the customer through a secure and contactless vehicle drop-off process.",
    icon: "QrCode",
  },
  {
    step: 3,
    title: "Shop Receives Instant Notification",
    description: "Service requests are automatically created and routed to the shop dashboard.",
    icon: "Bell",
  },
  {
    step: 4,
    title: "Real-Time Service Updates",
    description: "Customers receive status updates throughout the repair process without needing to call.",
    icon: "MessageSquare",
  },
  {
    step: 5,
    title: "Digital Service History",
    description: "All interactions, repairs, notes, and updates are stored in a single digital record.",
    icon: "Archive",
  },
] as const;

// Customer Benefits
export const customerBenefits = [
  {
    title: "24/7 Convenience",
    description: "Drop off vehicles anytime without waiting for business hours.",
    icon: "Clock",
  },
  {
    title: "Real-Time Transparency",
    description: "Track repair progress and receive updates directly from your phone.",
    icon: "Eye",
  },
  {
    title: "Faster Service Experience",
    description: "Eliminate paperwork, manual check-ins, and unnecessary phone calls.",
    icon: "Zap",
  },
  {
    title: "Digital Service Records",
    description: "Maintain a complete history of services, repairs, and communication.",
    icon: "FileText",
  },
] as const;

// Business Benefits
export const businessBenefits = [
  {
    title: "Increase Throughput",
    description: "Accept more vehicles without increasing front-desk workload.",
    icon: "TrendingUp",
  },
  {
    title: "Reduce Administrative Work",
    description: "Automate intake, notifications, ticket management, and communication.",
    icon: "Minimize2",
  },
  {
    title: "Improve Customer Satisfaction",
    description: "Deliver the modern, digital experience customers expect.",
    icon: "Heart",
  },
  {
    title: "Scale Across Locations",
    description: "Manage multiple service centers through a centralized platform.",
    icon: "Map",
  },
  {
    title: "Differentiate Your Business",
    description: "Offer a premium technology-enabled service experience that competitors cannot match.",
    icon: "Award",
  },
] as const;

// Platform Features
export const platformFeatures = {
  customer: {
    title: "Customer Mobile Application",
    features: [
      "Secure registration and login",
      "Vehicle profile management",
      "QR-enabled vehicle drop-off",
      "Service request submission",
      "Live service tracking",
      "Push notifications",
      "Digital service history",
    ],
  },
  shop: {
    title: "Shop Management Dashboard",
    features: [
      "Service ticket management",
      "Vehicle tracking",
      "Customer communication tools",
      "Key management workflows",
      "Staff and role management",
      "Operational reporting",
    ],
  },
  admin: {
    title: "Platform Administration Console",
    features: [
      "Multi-location management",
      "Shop onboarding",
      "Subscription management",
      "QR code generation",
      "System-wide reporting",
      "Audit and compliance logs",
    ],
  },
} as const;

// Target Customers
export const targetCustomers = [
  {
    title: "Independent Repair Shops",
    description: "Operate more efficiently and deliver a premium customer experience.",
    icon: "Building2",
  },
  {
    title: "Body Shops & Collision Centers",
    description: "Improve intake workflows and communication throughout repairs.",
    icon: "Hammer",
  },
  {
    title: "Dealership Service Departments",
    description: "Extend service availability without extending staffing requirements.",
    icon: "Car",
  },
  {
    title: "Franchise Networks",
    description: "Standardize customer experience across every location.",
    icon: "Network",
  },
  {
    title: "Multi-Location Operators",
    description: "Centralize visibility and management while maintaining local operations.",
    icon: "Layers",
  },
] as const;

// Why ShopDropz
export const whyShopDropz = [
  {
    title: "Modern Customer Expectations",
    description: "Consumers demand convenience, transparency, and digital-first experiences.",
  },
  {
    title: "Proven Operational Benefits",
    description: "Reduce manual processes while improving service quality.",
  },
  {
    title: "Built for Growth",
    description: "Whether you operate one location or one hundred, ShopDropz scales with your business.",
  },
  {
    title: "Future-Ready Platform",
    description: "Designed for integrations, automation, AI, and long-term innovation.",
  },
] as const;

// CTA Section
export const ctaContent = {
  headline: "Ready to Modernize Your Automotive Service Business?",
  description:
    "Join the next generation of automotive service providers delivering 24/7 convenience and exceptional customer experiences.",
  cta: "Get Started",
  contact: {
    name: "Steve Danzig",
    phone: "+1 866-507-3767",
  },
} as const;

// Footer
export const footerContent = {
  tagline: "Digital Vehicle Drop-Off. Real-Time Service Visibility. Better Customer Experiences.",
  copyright: "© 2026 ShopDropz. All Rights Reserved.",
  links: [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
