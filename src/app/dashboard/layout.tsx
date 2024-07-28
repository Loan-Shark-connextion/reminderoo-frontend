import Navbar from '@/components/parts/Navbar';
import Sidebar from '@/components/parts/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-pink-300">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT (Overview, My Subscriptions Table, and Chart) */}
      <section className="container flex flex-col gap-6 bg-slate-400 py-7 lg:grid lg:grid-cols-12">
        <main className="bg-purple-500 lg:col-span-9">{children}</main>

        {/* SIDEBAR (Next Payment & Payment History) */}
        <Sidebar />
      </section>
    </div>
  );
}
