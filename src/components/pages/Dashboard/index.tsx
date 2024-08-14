'use client';

import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';

import ChartInfo from '@/components/parts/ChartInfo';
import OverviewCard from '@/components/parts/OverviewCard';
import ReactQuery from '@/components/parts/ReactQuery';
import SpendingsChart from '@/components/parts/SpendingsChart';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { dashboardColumns } from '@/components/parts/SubscriptionTable/columns';
import { useAllSubscriptions } from '@/queries/subscriptions';

const Dashboard = () => {
  const allSubscripitonsQuery = useAllSubscriptions();

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
            link="?status=active"
          />
          <OverviewCard
            status="warning"
            icon={<CalendarClock />}
            totalSubscriptions={6}
            title="Upcoming Subscriptions"
            description="Manage all your upcoming subscriptions efficiently"
            link="?status=upcoming"
          />
          <OverviewCard
            status="destructive"
            icon={<CalendarX />}
            totalSubscriptions={8}
            title="Inactive Subscriptions"
            description="Manage all your inactive subscriptions efficiently"
            link="?status=inactive"
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 text-heading-6">My Subscriptions</h6>
        <div className="bg-primary-0 p-5 mt-4">
          <ReactQuery
            queryResult={allSubscripitonsQuery}
            // render={(data) => <p>{data.id}</p>}
            render={(subData) => (
              <SubscriptionTable columns={dashboardColumns} data={subData} variant="dashboard" />
            )}
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 lg:text-heading-6">Payment History</h6>
        <ChartInfo total="spendings">
          <SpendingsChart />
        </ChartInfo>
      </section>
    </div>
  );
};

export default Dashboard;
