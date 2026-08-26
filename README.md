# Time Across America

A live reference clock for seven major U.S. time zones. Each card shows the local time, date, and daylight-saving abbreviation and updates once per second.

**[Open the live demo](https://america-timezones.vercel.app)**

## What it shows

- Eastern, Central, Mountain, Arizona, Pacific, Alaska, and Hawaii
- Correct daylight-saving behavior from the browser's IANA time-zone database
- A separate Arizona clock because most of the state does not observe daylight saving time
- Local dates, which makes cross-midnight differences visible
- Responsive cards suitable for a desktop display, wallboard, or phone

## Implementation

The formatting logic is isolated in `src/lib/timeZones.ts` and tested with fixed instants, including the midnight edge case that some locale settings render as `24:00:00`. The page renders a stable loading state on the server and starts the clocks after hydration, avoiding server/client time mismatches.

## Run locally

Use Node.js 22.12+ on the 22.x LTS line, or Node.js 24+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run check
```

That command runs ESLint, TypeScript, Vitest, and a production Next.js build.

## Stack

- Next.js 16
- React 19
- TypeScript
- Browser Intl API
- Vitest
- Vercel

## Asset attribution

The regional map artwork is derived from Simplemaps.com SVG data and retains its original copyright and license notices in `public/maps`.

## License

Application code is available under the [MIT License](LICENSE). Map assets remain subject to their embedded license notices.
