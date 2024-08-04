import Dashboard from '@/components/pages/Dashboard';
import Sidebar from '@/components/parts/Sidebar';

export default function DashboardPage() {
  return (
    <>
      <main className="lg:col-span-9">
        <Dashboard />
      </main>

      <Sidebar />
    </>
  );
}
