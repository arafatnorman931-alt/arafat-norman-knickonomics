# Arafat Analytics — Champonomics

**Champonomics: The Finances Behind Every NBA Champion**

Developed and published a website displaying financial data for NBA championship teams, including player
salaries, team earnings, and arena attendance.

Live site: https://arafat-norman-knickonomics.vercel.app/

## Features

- **30 championship seasons** (1996–97 Chicago Bulls to 2025–26 New York Knicks) with a season selector and
  previous/next buttons.
- **Roster & salaries** for each champion, with every player's salary in original and 2026 dollars.
- **Total player payroll**, using the source's published team total where one exists and clearly marked as
  *partial* where some salaries could not be verified.
- **Staff earnings**: head coach and lead executive for every season. Pay appears only where a contract was
  publicly reported, labelled as an estimate; otherwise it says "Not publicly disclosed".
- **Team revenue** where a published (Forbes) estimate was verified.
- **Arena attendance** and NBA rank for each season.
- **Inflation-adjusted comparisons** using BLS CPI-U:
  - side-by-side bar charts (original vs 2026 dollars) for player salaries, staff pay and payrolls
  - an inflation calculator for any season and any amount
  - a two-team payroll comparison
  - a 30-season payroll chart (click a bar to load that season)
- **Team colours**: the page re-themes automatically for the selected champion.
- Mobile-friendly layout, keyboard-accessible controls, reduced-motion support.

## Data sources

| Data | Source |
| --- | --- |
| Champions, rosters, coaches, executives, arena, attendance | Basketball-Reference team pages |
| Player salaries | HoopsHype team/player salary pages, Spotrac team financials, Basketball-Reference salary tables |
| Coach pay (estimates) | Contract reports from AP, ESPN, CBS News and SNY (linked in the app) |
| Team revenue (estimate) | Forbes, as reported by CBS News |
| Inflation | U.S. Bureau of Labor Statistics CPI-U (all items, U.S. city average, NSA) |

**Rules followed:** missing salaries are left as `null` and shown as "Salary not verified", never estimated.
Estimates (staff pay, revenue) are always labelled. Inflation-adjusted values show purchasing power only, not
what a roster would cost under today's salary cap.

The 2026 CPI value is the provisional January–October 2026 average. Update `CPI_2026_MONTHLY` in
`lib/cpi.ts` when BLS publishes new months.

## Project structure

```
app/page.tsx                    Page layout, header, About This Project section
app/layout.tsx                  Metadata, fonts, analytics
app/globals.css                 Theme (team-colour CSS variables)
components/champions-dashboard.tsx  Main dashboard
components/finance-charts.tsx   Recharts bar charts (original vs 2026)
components/staff-earnings.tsx   Staff pay & team revenue
components/inflation-tools.tsx  Inflation calculator & two-team comparison
lib/champions.ts                30-season dataset
lib/cpi.ts                      BLS CPI-U data and inflation helpers
lib/finance.ts                  Reported staff pay & team revenue
lib/payroll.ts                  Payroll summaries & number formatting
lib/teams.ts                    Team colours
```

`components/earnings-dashboard.tsx`, `player-card.tsx`, `salary-outlook.tsx` and `lib/players.ts` are from an
earlier Knicks-only version that used placeholder figures. They are not used by the current page.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build check
```

## Deploying without v0

The site is a standard Next.js app, so v0 is not needed:

1. Push this folder to your GitHub repository (`main` branch).
2. In Vercel, the project stays connected to that repository. Every push to `main` deploys automatically.
3. Vercel's free Hobby plan is enough for this site.

## Disclaimer

For educational purposes. Not affiliated with the NBA or any team. Salary and revenue figures come from
third-party sources and may differ from official team accounting.
