import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react';

import OverviewCard from '@/components/parts/OverviewCard';
import SubscriptionTable from '@/components/parts/SubscriptionTable';
import { columns } from '@/components/parts/SubscriptionTable/columns';
import { Subscription } from '@/components/parts/SubscriptionTable/types';

const Dashboard = () => {
  const data: Subscription[] = [
    {
      id: '1',
      appName: 'Netflix',
      category: 'entertainment',
      pricing: 1000,
      nextPayment: new Date('2024-08-15'),
      status: 'active'
    },
    {
      id: '2',
      appName: 'Spotify',
      category: 'entertainment',
      pricing: 500,
      nextPayment: new Date('2024-09-01'),
      status: 'active'
    },
    {
      id: '3',
      appName: 'Microsoft Office 365',
      category: 'work',
      pricing: 15,
      nextPayment: new Date('2024-07-31'),
      status: 'overdue'
    },
    {
      id: '4',
      appName: 'Amazon Prime',
      category: 'entertainment',
      pricing: 200,
      nextPayment: new Date('2024-09-20'),
      status: 'active'
    },
    {
      id: '5',
      appName: 'Duolingo Plus',
      category: 'education',
      pricing: 220,
      nextPayment: new Date('2024-08-10'),
      status: 'active'
    },
    {
      id: '6',
      appName: 'Adobe Creative Cloud',
      category: 'work',
      pricing: 30,
      nextPayment: new Date('2024-08-05'),
      status: 'active'
    },
    {
      id: '7',
      appName: 'Fitbit Premium',
      category: 'health',
      pricing: 10,
      nextPayment: new Date('2024-08-25'),
      status: 'inactive'
    },
    {
      id: '8',
      appName: 'HBO Max',
      category: 'entertainment',
      pricing: 15,
      nextPayment: new Date('2024-09-05'),
      status: 'active'
    },
    {
      id: '9',
      appName: 'Headspace',
      category: 'health',
      pricing: 7,
      nextPayment: new Date('2024-08-12'),
      status: 'active'
    },
    {
      id: '10',
      appName: 'LinkedIn Learning',
      category: 'education',
      pricing: 20,
      nextPayment: new Date('2024-09-10'),
      status: 'upcoming'
    },
    {
      id: '11',
      appName: 'Google Workspace',
      category: 'work',
      pricing: 6,
      nextPayment: new Date('2024-08-18'),
      status: 'active'
    },
    {
      id: '12',
      appName: 'PlayStation Plus',
      category: 'games',
      pricing: 10,
      nextPayment: new Date('2024-08-01'),
      status: 'active'
    },
    {
      id: '13',
      appName: 'Apple Music',
      category: 'entertainment',
      pricing: 10,
      nextPayment: new Date('2024-09-15'),
      status: 'active'
    },
    {
      id: '14',
      appName: 'Canva Pro',
      category: 'work',
      pricing: 12,
      nextPayment: new Date('2024-08-03'),
      status: 'active'
    },
    {
      id: '15',
      appName: 'Nintendo Switch Online',
      category: 'games',
      pricing: 4,
      nextPayment: new Date('2024-08-08'),
      status: 'inactive'
    }
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
        <div className="bg-primary-0 p-5 mt-4">
          <SubscriptionTable columns={columns} data={data} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
