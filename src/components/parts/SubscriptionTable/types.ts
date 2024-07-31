export type SubscriptionCategory =
  | 'entertainment'
  | 'work'
  | 'home'
  | 'games'
  | 'education'
  | 'health'
  | 'others';

export type SubStatus = 'inactive' | 'upcoming' | 'active' | 'overdue';

export type Subscription = {
  id: string;
  appName: string;
  category: SubscriptionCategory;
  pricing: number;
  nextPayment: Date;
  status: SubStatus;
};
