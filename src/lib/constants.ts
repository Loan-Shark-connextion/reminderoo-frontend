// Subscription Categories
export const SUBSCRIPTION_CATEGORIES = [
  'Entertainment',
  'Work',
  'Home',
  'Games',
  'Education',
  'Health',
  'Others'
];

export interface SubscriptionPriceRanges {
  [key: string]: number[];
}

// Subscription Price Ranges
export const SUBSCRIPTION_PRICE_RANGES: SubscriptionPriceRanges = {
  'Less than Rp.100.000': [0, 100],
  'Rp.100.000 - Rp.200.000': [100, 200],
  'Rp.200.000 - Rp.300.000': [200, 300],
  'Rp.300.000 - Rp.400.000': [300, 400],
  'Rp.400.000 - Rp.500.000': [400, 500],
  'Rp.500.000 and above': [500, Infinity]
};

// Subscription Status
export const SUBSCRIPTION_STATUS = ['Inactive', 'Upcoming', 'Active', 'Overdue'];
