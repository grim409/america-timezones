'use client';

import { useEffect, useState } from 'react';

const zones = [
  { label: 'Eastern',  tz: 'America/New_York'     },
  { label: 'Central',  tz: 'America/Chicago'      },
  { label: 'Mountain', tz: 'America/Denver'       },
  { label: 'Pacific',  tz: 'America/Los_Angeles'  },
  { label: 'Alaska',   tz: 'America/Anchorage'    },
  { label: 'Hawaii',   tz: 'Pacific/Honolulu'     },
];

export default function TimeZones() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid">
      {zones.map(({ label, tz }) => {
        const time = now.toLocaleTimeString('en-US', {
          timeZone: tz,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return (
          <div key={tz} className="card">
            <div className="label">{label}</div>
            <div className="time">{time}</div>
          </div>
        );
      })}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }
        .card {
          background: #111;
          color: #fff;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
        }
        .label {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }
        .time {
          font-size: 2.4rem;
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
