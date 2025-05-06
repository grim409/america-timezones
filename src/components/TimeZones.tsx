'use client';

import { useEffect, useState } from 'react';

const zones = [
  { label: 'Eastern',  tz: 'America/New_York',     color: '#E53E3E' },
  { label: 'Central',  tz: 'America/Chicago',      color: '#DD6B20' },
  { label: 'Mountain', tz: 'America/Denver',       color: '#D69E2E' },
  { label: 'Pacific',  tz: 'America/Los_Angeles',  color: '#3182CE' },
  { label: 'Alaska',   tz: 'America/Anchorage',    color: '#805AD5' },
  { label: 'Hawaii',   tz: 'Pacific/Honolulu',     color: '#2C7A7B' },
];

export default function TimeZones() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid">
      {zones.map(({ label, tz, color }) => {
        const key = label.toLowerCase();
        const time = now.toLocaleTimeString('en-US', {
          timeZone: tz,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return (
          <div key={tz} className={`card ${key}`} style={{ borderLeftColor: color }}>
            <div className="label">{label}</div>
            <div className="time">{time}</div>
          </div>
        );
      })}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }
        .card {
          position: relative;
          background-color: #2a2a2a;
          color: #e0e0e0;
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.6);
          border-left: 0.5rem solid;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 80%;
          opacity: 0.08;
          pointer-events: none;
        }
        .label, .time {
          position: relative; /* lift above ::before */
        }
        .label {
          /* fluid size: min 1rem, ideal 4vw, max 1.8rem */
          font-size: clamp(1rem, 4vw, 1.8rem);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .time {
          /* fluid size: min 1.5rem, ideal 8vw, max 3.5rem */
          font-size: clamp(1.5rem, 8vw, 3.5rem);
          font-family: 'DSEG7 Classic', monospace;
          line-height: 1;
        }

        /* Per-zone map overlays */
        .card.eastern::before  { background-image: url('/maps/eastern.svg'); }
        .card.central::before  { background-image: url('/maps/central.svg'); }
        .card.mountain::before { background-image: url('/maps/mountain.svg'); }
        .card.pacific::before  { background-image: url('/maps/pacific.svg'); }
        .card.alaska::before   {
          background-image: url('/maps/alaska.svg');
          background-size: 700% 700%;
          background-position: center;
        }
        .card.hawaii::before   {
          background-image: url('/maps/hawaii.svg');
          background-size: 750% 750%;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
