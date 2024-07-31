import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';

import Filters from '@/components/parts/Filters';
import OverviewCard from '@/components/parts/OverviewCard';
import { DataTable } from '@/components/parts/SubscriptionTable';
import { columns } from '@/components/parts/SubscriptionTable/columns';
import { Subscription } from '@/components/parts/SubscriptionTable/types';

const Dashboard = () => {
  const data: Subscription[] = [
    {
      id: '1',
      appName: 1,
      category: 'entertainment',
      pricing: 10,
      nextPayment: new Date(),
      status: 'active'
    }
    // ...
  ];

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">Overview</h6>
        <div className="flex gap-4 mt-4 overflow-x-auto">
          <OverviewCard
            status="success"
            icon={<CalendarCheck />}
            totalSubscriptions={10}
            title="Active Subscriptions"
            description="Manage all your active subscriptions efficiently"
            link="/active"
          />
          <OverviewCard
            status="warning"
            icon={<CalendarClock />}
            totalSubscriptions={6}
            title="Upcoming Subscriptions"
            description="Manage all your upcoming subscriptions efficiently"
            link="/upcoming"
          />
          <OverviewCard
            status="destructive"
            icon={<CalendarX />}
            totalSubscriptions={8}
            title="Inactive Subscriptions"
            description="Manage all your inactive subscriptions efficiently"
            link="/inactive"
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">My Subscriptions</h6>
        <div className="bg-primary-0 p-5">
          <Filters />

          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
