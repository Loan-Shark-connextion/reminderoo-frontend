import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { SubStatus } from '@/components/parts/SubscriptionTable/types';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        active: 'bg-success text-success-foreground',
        inactive: 'bg-secondary text-secondary-foreground',
        upcoming: 'bg-warning text-warning-foreground',
        overdue: 'bg-destructive text-destructive-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status?: SubStatus;
}

const statusClassNames = {
  active: 'bg-success-foreground',
  upcoming: 'bg-warning-foreground',
  inactive: 'bg-muted-foreground',
  overdue: 'bg-destructive-foreground'
};

function Badge({ className, variant, children, status, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), 'gap-1', className)} {...props}>
      {status && <div className={cn('w-2 h-2 rounded-full', statusClassNames[status])} />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
