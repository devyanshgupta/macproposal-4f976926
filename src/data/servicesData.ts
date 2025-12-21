export interface ServiceItem {
  id: string;
  category: string;
  service: string;
  price: number;
  billingCycle: 'One-off' | 'Monthly' | 'Yearly' | 'Quarterly';
}

export const servicesData: ServiceItem[] = [
  // Web Development
  { id: "web-1", category: "Web Development and related shit necessary", service: "Custom landing page design & development", price: 2500, billingCycle: "One-off" },
  { id: "web-2", category: "Web Development and related shit necessary", service: "E-commerce store setup with payment integration", price: 8000, billingCycle: "One-off" },
  { id: "web-3", category: "Web Development and related shit necessary", service: "Progressive web app development", price: 12000, billingCycle: "One-off" },
  { id: "web-4", category: "Web Development and related shit necessary", service: "API integration & backend services", price: 5000, billingCycle: "Monthly" },
  { id: "web-5", category: "Web Development and related shit necessary", service: "Website performance optimization", price: 1500, billingCycle: "Monthly" },

  // Mobile Apps
  { id: "mobile-1", category: "Mobile Apps", service: "iOS native application development", price: 25000, billingCycle: "One-off" },
  { id: "mobile-2", category: "Mobile Apps", service: "Android native application development", price: 22000, billingCycle: "One-off" },
  { id: "mobile-3", category: "Mobile Apps", service: "Cross-platform React Native app", price: 18000, billingCycle: "One-off" },
  { id: "mobile-4", category: "Mobile Apps", service: "App store submission & optimization", price: 800, billingCycle: "One-off" },
  { id: "mobile-5", category: "Mobile Apps", service: "Push notification system integration", price: 2000, billingCycle: "Monthly" },

  // Brand Identity
  { id: "brand-1", category: "Brand Identity", service: "Logo design with brand guidelines", price: 3500, billingCycle: "One-off" },
  { id: "brand-2", category: "Brand Identity", service: "Complete visual identity package", price: 8000, billingCycle: "One-off" },
  { id: "brand-3", category: "Brand Identity", service: "Brand strategy & positioning", price: 5000, billingCycle: "One-off" },
  { id: "brand-4", category: "Brand Identity", service: "Stationery & collateral design", price: 2000, billingCycle: "One-off" },

  // UI/UX Design
  { id: "ux-1", category: "UI/UX Design", service: "User research & persona development", price: 4000, billingCycle: "One-off" },
  { id: "ux-2", category: "UI/UX Design", service: "Wireframing & prototyping", price: 3500, billingCycle: "One-off" },
  { id: "ux-3", category: "UI/UX Design", service: "High-fidelity UI design", price: 6000, billingCycle: "One-off" },
  { id: "ux-4", category: "UI/UX Design", service: "Design system creation", price: 8000, billingCycle: "Yearly" },
  { id: "ux-5", category: "UI/UX Design", service: "Usability testing & iteration", price: 3000, billingCycle: "Monthly" },

  // Marketing
  { id: "mkt-1", category: "Marketing", service: "Social media strategy & management", price: 2500, billingCycle: "Monthly" },
  { id: "mkt-2", category: "Marketing", service: "Content marketing & copywriting", price: 3000, billingCycle: "Monthly" },
  { id: "mkt-3", category: "Marketing", service: "SEO optimization package", price: 4000, billingCycle: "Monthly" },
  { id: "mkt-4", category: "Marketing", service: "Email marketing campaigns", price: 1800, billingCycle: "Monthly" },
  { id: "mkt-5", category: "Marketing", service: "Paid advertising management", price: 2000, billingCycle: "Quarterly" },

  // Consulting
  { id: "cons-1", category: "Consulting", service: "Technical architecture review", price: 3500, billingCycle: "One-off" },
  { id: "cons-2", category: "Consulting", service: "Digital transformation strategy", price: 10000, billingCycle: "One-off" },
  { id: "cons-3", category: "Consulting", service: "Product roadmap planning", price: 5000, billingCycle: "One-off" },
  { id: "cons-4", category: "Consulting", service: "Team training & workshops", price: 2500, billingCycle: "One-off" },

  // Cloud Services
  { id: "cloud-1", category: "Cloud Services", service: "AWS/GCP infrastructure setup", price: 6000, billingCycle: "One-off" },
  { id: "cloud-2", category: "Cloud Services", service: "CI/CD pipeline implementation", price: 4000, billingCycle: "One-off" },
  { id: "cloud-3", category: "Cloud Services", service: "Database design & optimization", price: 5000, billingCycle: "Monthly" },
  { id: "cloud-4", category: "Cloud Services", service: "Security audit & hardening", price: 7000, billingCycle: "Quarterly" },
  { id: "cloud-5", category: "Cloud Services", service: "24/7 monitoring & maintenance", price: 3000, billingCycle: "Monthly" },

  // Analytics
  { id: "ana-1", category: "Analytics", service: "Analytics setup & configuration", price: 2000, billingCycle: "One-off" },
  { id: "ana-2", category: "Analytics", service: "Custom dashboard development", price: 4500, billingCycle: "One-off" },
  { id: "ana-3", category: "Analytics", service: "Data visualization & reporting", price: 3500, billingCycle: "Monthly" },
  { id: "ana-4", category: "Analytics", service: "Conversion optimization", price: 3000, billingCycle: "Monthly" },
];

export const initialCategories = [...new Set(servicesData.map(s => s.category))];