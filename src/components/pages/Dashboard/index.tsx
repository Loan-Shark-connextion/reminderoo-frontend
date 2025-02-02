'use client';

import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';
import Link from 'next/link';

import ChartInfo from '@/components/parts/ChartInfo';
import ChartSkeleton from '@/components/parts/ChartInfo/Skeleton';
import { MonthlySpending } from '@/components/parts/ChartInfo/types';
import OverviewCard from '@/components/parts/OverviewCard';
import OverviewCardSkeleton from '@/components/parts/OverviewCard/skeleton';
import ReactQuery from '@/components/parts/ReactQuery';
import SpendingsChart from '@/components/parts/SpendingsChart';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { dashboardColumns } from '@/components/parts/SubscriptionTable/columns';
import SubscriptionTableSkeleton from '@/components/parts/SubscriptionTable/Skeleton';
import { Subscription, SubStatus } from '@/components/parts/SubscriptionTable/types';
import { useSpendingsChart } from '@/queries/charts';
import { useAllSubscriptions } from '@/queries/subscriptions';

const Dashboard = () => {
  const allSubscripitonsQuery = useAllSubscriptions();
  const { data: spendingsChartData, isLoading: spendingsChartLoading } = useSpendingsChart();

  const transactionYears: number[] = [
    ...new Set(
      spendingsChartData?.chartData?.flatMap((item: MonthlySpending) =>
        Object.keys(item)
          .filter((key) => key !== 'month')
          .map((key) => +key)
      )
    )
  ];
  // const transactionYears = [
  //   ...new Set(transactionsData?.map((item: Transaction): number => getYear(item.payment_date)))
  // ];
  const lowestYear = Math.min(...transactionYears);
  const filteredYears = transactionYears.filter((year) => year > lowestYear);

  const getStatusCount = (subs: Subscription[], status: SubStatus) => {
    const filteredSubs = subs.filter((sub: Subscription) => sub.status === status);
    return filteredSubs.length;
  };

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h6 className="font-medium text-primary-80 text-body-lg md:text-heading-6">Overview</h6>
        <div className="flex flex-col flex-1 gap-4 mt-4 lg:flex-row">
          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="success"
                icon={<CalendarCheck />}
                totalSubscriptions={getStatusCount(data, 'active')}
                title="Active Subscriptions"
                description="Manage all your active subscriptions efficiently"
                link="?status=active"
              />
            )}
            renderLoading={<OverviewCardSkeleton />}
          />

          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="warning"
                icon={<CalendarClock />}
                totalSubscriptions={getStatusCount(data, 'upcoming') + getStatusCount(data, 'overdue')}
                title="Upcoming Subscriptions"
                description="Manage all your upcoming subscriptions efficiently"
                link="?status=upcoming"
              />
            )}
            renderLoading={<OverviewCardSkeleton />}
          />

          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(data) => (
              <OverviewCard
                status="destructive"
                icon={<CalendarX />}
                totalSubscriptions={getStatusCount(data, 'inactive')}
                title="Inactive Subscriptions"
                description="Manage all your inactive subscriptions efficiently"
                link="?status=inactive"
              />
            )}
            renderLoading={<OverviewCardSkeleton />}
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h6 className="font-medium text-primary-80 text-body-lg md:text-heading-6">My Subscriptions</h6>
          <Link
            href="/my-subscriptions"
            className="font-medium text-body-xs text-secondary-40 focus:underline lg:hidden"
          >
            See all subscriptions
          </Link>
        </div>
        <div className="bg-primary-0 p-5 mt-4">
          <ReactQuery
            queryResult={allSubscripitonsQuery}
            render={(subData) => <SubscriptionTable columns={dashboardColumns} data={subData} variant="dashboard" />}
            renderLoading={<SubscriptionTableSkeleton />}
          />
        </div>
      </section>

      <section>
        <h6 className="font-semibold text-primary-80 lg:text-heading-6">Payment History</h6>
        {spendingsChartLoading ? (
          <ChartSkeleton />
        ) : (
          <ChartInfo transactionYears={filteredYears} total="spendings">
            <SpendingsChart data={spendingsChartData} />
          </ChartInfo>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
