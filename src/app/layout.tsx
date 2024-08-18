import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import '@/assets/styles/globals.css';
import generalSans from '@/assets/fonts/generalSans';
import Providers from '@/providers';

export const metadata: Metadata = {
  title: 'Reminderoo',
  description:
    'A subscription dashboard for user to view and organize all their active subscription with payment reminders.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
