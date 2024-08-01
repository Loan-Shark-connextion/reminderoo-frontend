'use client';

import { ColumnDef, Row } from '@tanstack/react-table';
import { ChevronsUpDown, Edit3, Mail, MoreHorizontal, Trash2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Subscription, SubscriptionCategory, SubStatus } from './types';

export type FilterFn<TData> = {
  row: Row<TData>;
  columnId: string;
  filterValue: any;
};

export const columns: ColumnDef<Subscription>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <div className="flex justify-center items-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-center items-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        </div>
      );
    }
  },
  {
    accessorKey: 'appName',
    header: ({ column }) => (
      <div
        className="flex gap-2 justify-start items-center cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <p className="font-medium text-primary-80 text-body-md">Subscriptions</p>
        <ChevronsUpDown className="w-3 h-3" />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <div className="bg-secondary-40 rounded-sm">
            <Mail className="w-5 h-5" />
          </div>
          <p>{row.getValue<string>('appName')}</p>
        </div>
      );
    }
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <div
        className="flex gap-2 justify-start items-center cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <p className="font-medium text-primary-80 text-body-md">Category</p>
        <ChevronsUpDown className="w-3 h-3" />
      </div>
    ),
    cell: ({ row }) => {
      return <p className="capitalize">{row.getValue<SubscriptionCategory>('category')}</p>;
    }
  },
  {
    accessorKey: 'pricing',
    header: ({ column }) => (
      <div
        className="flex gap-2 justify-start items-center cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <p className="font-medium text-primary-80 text-body-md">Pricing</p>
        <ChevronsUpDown className="w-3 h-3" />
      </div>
    ),
    cell: ({ row }) => {
      const formattedNumber = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(row.getValue<number>('pricing') * 1000);

      return <p>{formattedNumber}</p>;
    },
    filterFn: 'inNumberRange'
  },
  {
    accessorKey: 'nextPayment',
    header: ({ column }) => (
      <div
        className="flex gap-2 justify-start items-center cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <p className="font-medium text-primary-80 text-body-md">Next Payment</p>
        <ChevronsUpDown className="w-3 h-3" />
      </div>
    ),
    cell: ({ getValue }) => {
      return (
        <p>
          {getValue<Date>().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      );
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <div
        className="flex gap-2 justify-start items-center cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <p className="font-medium text-primary-80 text-body-md">Status</p>
        <ChevronsUpDown className="w-3 h-3" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue<SubStatus>('status');
      return (
        <Badge
          variant={row.getValue<SubStatus>('status')}
          status={status}
          className="capitalize font-medium"
        >
          {status}
        </Badge>
      );
    }
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-secondary-40 gap-2 focus:text-secondary-40">
              <Edit3 className="w-5 h-5" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive-foreground gap-2
            focus:bg-destructive focus:text-destructive-foreground"
            >
              <Trash2 className="w-5 h-5" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
