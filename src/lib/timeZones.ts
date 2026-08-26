export interface TimeZoneDefinition {
  label: string;
  timeZone: string;
  color: string;
  map: string;
}

export const TIME_ZONES: TimeZoneDefinition[] = [
  { label: 'Eastern', timeZone: 'America/New_York', color: '#ef4444', map: 'eastern' },
  { label: 'Central', timeZone: 'America/Chicago', color: '#f97316', map: 'central' },
  { label: 'Mountain', timeZone: 'America/Denver', color: '#eab308', map: 'mountain' },
  { label: 'Arizona', timeZone: 'America/Phoenix', color: '#a855f7', map: 'mountain' },
  { label: 'Pacific', timeZone: 'America/Los_Angeles', color: '#3b82f6', map: 'pacific' },
  { label: 'Alaska', timeZone: 'America/Anchorage', color: '#8b5cf6', map: 'alaska' },
  { label: 'Hawaii', timeZone: 'Pacific/Honolulu', color: '#14b8a6', map: 'hawaii' },
];

export interface FormattedZoneTime {
  time: string;
  date: string;
  abbreviation: string;
}

export function formatZoneTime(date: Date, timeZone: string): FormattedZoneTime {
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
  const localDate = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date);
  const abbreviationParts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'short',
  }).formatToParts(date);

  return {
    time,
    date: localDate,
    abbreviation: abbreviationParts.find((part) => part.type === 'timeZoneName')?.value ?? timeZone,
  };
}
