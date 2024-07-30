import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';

import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <section>
      <h6 className="font-semibold text-primary-80 text-heading-6">Overview</h6>
      <div className="flex gap-4 mt-4 overflow-x-auto">
        <DashboardCard
          status="success"
          icon={<CalendarCheck />}
          totalSubscriptions={10}
          title="Active Subscriptions"
          description="Manage all your active subscriptions efficiently"
          link="/active"
        />
        <DashboardCard
          status="warning"
          icon={<CalendarClock />}
          totalSubscriptions={6}
          title="Upcoming Subscriptions"
          description="Manage all your upcoming subscriptions efficiently"
          link="/upcoming"
        />
        <DashboardCard
          status="destructive"
          icon={<CalendarX />}
          totalSubscriptions={8}
          title="Inactive Subscriptions"
          description="Manage all your inactive subscriptions efficiently"
          link="/inactive"
        />
      </div>
    </section>
  );
};

export default Dashboard;
