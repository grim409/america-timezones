import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Time Across America | Live U.S. Clocks',
  description: 'Live clocks for seven major U.S. time zones, including Arizona, Alaska, and Hawaii.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
