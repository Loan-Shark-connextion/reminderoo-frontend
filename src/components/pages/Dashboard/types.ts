import React from 'react';

export type status = 'success' | 'warning' | 'destructive';

export interface OverviewCardProps {
  icon: React.JSX.Element;
  totalSubscriptions: number;
  status: status;
  title: string;
  description: string;
  link: string;
}
