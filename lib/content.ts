import {
  HeroContent,
  ProblemSolution,
  WorkflowStep,
  Benefit,
  Feature,
  TargetCustomer,
  Statistic,
  ComparisonItem,
  TimelineEvent,
  ContactInfo,
} from './types';

export const heroContent: HeroContent = {
  title: 'The Future of Automotive Service Starts After Hours',
  subtitle: 'Transform Vehicle Drop-Off Into a 24/7 Customer Experience',
  description:
    'ShopDropz enables automotive service centers, repair shops, body shops, dealerships, and franchise networks to offer secure, unattended vehicle drop-off, real-time service tracking, and a completely digital customer experience.',
  cta: {
    primary: 'Get Started',
    secondary: 'Watch Demo',
  },
};

export const problemSolution: ProblemSolution = {
  problem: {
    title: 'Built for Today\'s Automotive Customer',
    description:
      'Customers expect the same convenience from their automotive service providers that they receive from banking, food delivery, and online shopping. Yet most automotive businesses still rely on outdated processes.',
    painPoints: [
      'Paper forms',
      'Phone calls',
      'Manual check-ins',
      'Limited service hours',
      'Fragmented communication',
    ],
  },
  solution: {
    title: 'The ShopDropz Difference',
    description:
      'Our mobile-first platform modernizes the entire service intake and communication process, allowing customers to drop off vehicles anytime while giving shops complete visibility and control.',
    benefits: [
      'Reduce operational overhead',
      'Increase customer convenience',
      'Grow without adding staff',
      'Digital paperwork & communication',
    ],
  },
};

export const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: 'Customer Creates a Service Request',
    description:
      'Customers submit service details directly through the mobile app and select their preferred drop-off time.',
  },
  {
    number: 2,
    title: 'Secure QR-Based Vehicle Drop-Off',
    description:
      'A unique QR code guides the customer through a secure and contactless vehicle drop-off process.',
  },
  {
    number: 3,
    title: 'Shop Receives Instant Notification',
    description:
      'Service requests are automatically created and routed to the shop dashboard.',
  },
  {
    number: 4,
    title: 'Real-Time Service Updates',
    description:
      'Customers receive status updates throughout the repair process without needing to call.',
  },
  {
    number: 5,
    title: 'Digital Service History',
    description:
      'All interactions, repairs, notes, and updates are stored in a single digital record.',
  },
];

export const customerBenefits: Benefit[] = [
  {
    title: '24/7 Convenience',
    description: 'Drop off vehicles anytime without waiting for business hours.',
    icon: 'Clock',
  },
  {
    title: 'Real-Time Transparency',
    description: 'Track repair progress and receive updates directly from your phone.',
    icon: 'Eye',
  },
  {
    title: 'Faster Service Experience',
    description: 'Eliminate paperwork, manual check-ins, and unnecessary phone calls.',
    icon: 'Zap',
  },
  {
    title: 'Digital Service Records',
    description: 'Maintain a complete history of services, repairs, and communication.',
    icon: 'FileText',
  },
];

export const businessBenefits: Benefit[] = [
  {
    title: 'Increase Throughput',
    description: 'Accept more vehicles without increasing front-desk workload.',
    icon: 'TrendingUp',
  },
  {
    title: 'Reduce Administrative Work',
    description: 'Automate intake, notifications, ticket management, and communication.',
    icon: 'Cpu',
  },
  {
    title: 'Improve Customer Satisfaction',
    description: 'Deliver the modern, digital experience customers expect.',
    icon: 'Smile',
  },
  {
    title: 'Scale Across Locations',
    description: 'Manage multiple service centers through a centralized platform.',
    icon: 'Globe',
  },
  {
    title: 'Differentiate Your Business',
    description:
      'Offer a premium technology-enabled service experience that competitors cannot match.',
    icon: 'Award',
  },
];

export const platformFeatures: Feature[] = [
  {
    category: 'Customer Mobile Application',
    items: [
      'Secure registration and login',
      'Vehicle profile management',
      'QR-enabled vehicle drop-off',
      'Service request submission',
      'Live service tracking',
      'Push notifications',
      'Digital service history',
    ],
  },
  {
    category: 'Shop Management Dashboard',
    items: [
      'Service ticket management',
      'Vehicle tracking',
      'Customer communication tools',
      'Key management workflows',
      'Staff and role management',
      'Operational reporting',
    ],
  },
  {
    category: 'Platform Administration Console',
    items: [
      'Multi-location management',
      'Shop onboarding',
      'Subscription management',
      'QR code generation',
      'System-wide reporting',
      'Audit and compliance logs',
    ],
  },
];

export const targetCustomers: TargetCustomer[] = [
  {
    title: 'Independent Repair Shops',
    description: 'Operate more efficiently and deliver a premium customer experience.',
    icon: 'Wrench',
  },
  {
    title: 'Body Shops & Collision Centers',
    description: 'Improve intake workflows and communication throughout repairs.',
    icon: 'Hammer',
  },
  {
    title: 'Dealership Service Departments',
    description: 'Extend service availability without extending staffing requirements.',
    icon: 'Building2',
  },
  {
    title: 'Franchise Networks',
    description: 'Standardize customer experience across every location.',
    icon: 'Network',
  },
  {
    title: 'Multi-Location Operators',
    description: 'Centralize visibility and management while maintaining local operations.',
    icon: 'MapPin',
  },
];

export const whyShopDropz: Benefit[] = [
  {
    title: 'Modern Customer Expectations',
    description: 'Consumers demand convenience, transparency, and digital-first experiences.',
    icon: 'Users',
  },
  {
    title: 'Proven Operational Benefits',
    description: 'Reduce manual processes while improving service quality.',
    icon: 'CheckCircle',
  },
  {
    title: 'Built for Growth',
    description:
      'Whether you operate one location or one hundred, ShopDropz scales with your business.',
    icon: 'BarChart3',
  },
  {
    title: 'Future-Ready Platform',
    description: 'Designed for integrations, automation, AI, and long-term innovation.',
    icon: 'Rocket',
  },
];

export const statistics: Statistic[] = [
  {
    value: '24/7',
    label: 'Service Availability',
    icon: 'Clock',
  },
  {
    value: '100%',
    label: 'Digital Operations',
    icon: 'Zap',
  },
  {
    value: '∞',
    label: 'Scalability',
    icon: 'TrendingUp',
  },
];

export const comparison: ComparisonItem[] = [
  {
    name: 'Service Hours',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Paperless Intake',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Real-Time Tracking',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Automated Notifications',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Digital Records',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Multi-Location Management',
    traditional: false,
    shopDropz: true,
  },
  {
    name: 'Mobile-First Experience',
    traditional: false,
    shopDropz: true,
  },
];

export const contact: ContactInfo = {
  name: 'Steve Danzig',
  role: 'Founder & CEO',
  phone: '+1 866-507-3767',
  email: 'contact@shopdropz.com',
};

export const siteConfig = {
  name: 'ShopDropz',
  description:
    'Digital Vehicle Drop-Off. Real-Time Service Visibility. Better Customer Experiences.',
  url: 'https://shopdropz.com',
  ogImage: 'https://shopdropz.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/shopdropz',
    linkedin: 'https://linkedin.com/company/shopdropz',
  },
};
