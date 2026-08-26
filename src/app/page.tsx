import TimeZones from '@/components/TimeZones';

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Live reference clock</p>
          <h1>Time across America</h1>
          <p className="intro">
            Seven clocks, one instant. Dates and daylight-saving abbreviations
            come directly from the browser&apos;s IANA time-zone data.
          </p>
        </div>
        <a
          className="source-link"
          href="https://github.com/grim409/america-timezones"
          target="_blank"
          rel="noreferrer"
        >
          View source <span aria-hidden="true">↗</span>
        </a>
      </header>
      <TimeZones />
      <footer>
        <span>Updates every second</span>
        <span>Next.js · TypeScript · Intl API</span>
      </footer>
    </main>
  );
}
