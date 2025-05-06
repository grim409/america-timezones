'use client';

import TimeZones from '@/components/TimeZones';

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Current Time Across America</h1>
        <TimeZones />
      </main>
      <style jsx>{`
        main {
          max-width: 800px;
          margin: 2rem auto;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
