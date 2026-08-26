import { describe, expect, it } from 'vitest';

import { formatZoneTime } from './timeZones';

describe('formatZoneTime', () => {
  it('formats a fixed instant in the requested zone', () => {
    expect(formatZoneTime(
      new Date('2026-01-15T12:05:09Z'),
      'America/New_York',
    )).toEqual({
      time: '07:05:09',
      date: 'Thu, Jan 15',
      abbreviation: 'EST',
    });
  });

  it('uses 00 rather than 24 for midnight', () => {
    expect(formatZoneTime(
      new Date('2026-01-15T05:00:00Z'),
      'America/New_York',
    ).time).toBe('00:00:00');
  });
});