'use client';

import { useEffect, useState } from 'react';

import { formatZoneTime, TIME_ZONES } from '@/lib/timeZones';

export default function TimeZones() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="clock-grid">
      {TIME_ZONES.map(({ label, timeZone, color, map }) => {
        const formatted = now ? formatZoneTime(now, timeZone) : null;
        return (
          <article
            key={timeZone}
            className={`clock-card zone-${map}`}
            style={{ '--zone-color': color } as React.CSSProperties}
          >
            <div className="clock-heading">
              <h2>{label}</h2>
              <span>{formatted?.abbreviation ?? '—'}</span>
            </div>
            <time className="clock-time" dateTime={now?.toISOString()}>
              {formatted?.time ?? '--:--:--'}
            </time>
            <p>{formatted?.date ?? 'Loading local date'}</p>
          </article>
        );
      })}
    </div>
  );
}
