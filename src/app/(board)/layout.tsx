import React from 'react';

import Navbar from '@/components/parts/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#F4F3FB]">
      <Navbar />

      <div className="container flex flex-col gap-6 py-7 lg:grid lg:grid-cols-12">{children}</div>
    </div>
  );
}
