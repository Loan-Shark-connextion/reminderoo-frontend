'use client';

import { useState } from 'react';

import { Filter, Plus, Search } from 'lucide-react';

import FilterDropdown from '@/components/parts/FilterDropdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  SUBSCRIPTION_CATEGORIES,
  SUBSCRIPTION_PRICE_RANGES,
  SUBSCRIPTION_STATUS
} from '@/lib/constants';

const Filters = ({}) => {
  const [openFilters, setOpenFilters] = useState(false);

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex justify-between">
        <div className="flex gap-2 w-1/3">
          <Button size="icon" variant="secondary" onClick={handleOpenFilters} className="p-3">
            <Filter />
          </Button>

          <div className="relative flex justify-center items-center">
            <Input placeholder="Search..." className="bg-muted border-none" />
            <div className="absolute text-primary-55 right-3 z-10">
              <Search className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">See all Subscriptions</Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Subscription
          </Button>
        </div>
      </div>

      {openFilters && (
        <div className="flex gap-4">
          <FilterDropdown name="category" data={SUBSCRIPTION_CATEGORIES} />
          <FilterDropdown name="status" data={SUBSCRIPTION_STATUS} />
          <FilterDropdown name="pricing" data={SUBSCRIPTION_PRICE_RANGES} />
        </div>
      )}
    </div>
  );
};

export default Filters;
