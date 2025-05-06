# America’s Time Zones

A simple Next.js + TypeScript application that displays current time (with seconds) across major U.S. time zones: Eastern, Central, Mountain, Pacific, Alaska, and Hawaii. Times update every second.

## Features
- Real-time clocks with seconds
- Big, high-contrast display suitable for projection
- Color-coded left border per time zone
- Responsive grid layout
- Built with Next.js (App Router), TypeScript, React

## Tech Stack
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- styled-jsx for scoped CSS
- Vercel for deployment

## Getting Started

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Installation
```bash
git clone <repo-url>
cd america-timezones
npm install
```

### Running Locally
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Building for Production
```bash
npm run build
npm start
```

## Deployment
This app is optimized for Vercel. To deploy:
1. Push your repo to GitHub (or another Git provider).
2. Import the project on [Vercel](https://vercel.com).
3. Vercel auto-detects Next.js and deploys.

## Customization
- **Time Zones**: Edit the `zones` array in `src/components/TimeZones.tsx` to add or remove zones.
- **Colors**: Adjust the `color` property per zone for different accent borders.
- **Styles**: Modify the styled-jsx blocks or add to `src/app/globals.css` for global styles.

## License
MIT © Jason Grimberg