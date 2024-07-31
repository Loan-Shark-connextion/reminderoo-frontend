export type SubscriptionCategory =
  | 'entertainment'
  | 'work'
  | 'home'
  | 'games'
  | 'education'
  | 'health'
  | 'others';

export type Subscription = {
  id: string;
  appName: number;
  category: SubscriptionCategory;
  pricing: number;
  nextPayment: Date;
  status: 'inactive' | 'upcoming' | 'active' | 'overdue';
};
