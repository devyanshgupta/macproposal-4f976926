export interface ServiceItem {
  id: string;
  category: string;
  service: string;
  price: number;
  billingCycle: 'One-off' | 'Monthly' | 'Yearly' | 'Quarterly';
}
