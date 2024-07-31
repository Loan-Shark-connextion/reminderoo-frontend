'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Subscription } from './types';

export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: 'appName',
    header: 'Subscription'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'pricing',
    header: 'Pricing'
  },
  {
    accessorKey: 'nextPayment',
    header: 'Next Payment'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  }
];
