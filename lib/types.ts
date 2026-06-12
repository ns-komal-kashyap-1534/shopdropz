// Content types for ShopDropz
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface ProblemSolution {
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    benefits: string[];
  };
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  category: string;
  items: string[];
}

export interface TargetCustomer {
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface ComparisonItem {
  name: string;
  traditional: boolean;
  shopDropz: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  email?: string;
}
