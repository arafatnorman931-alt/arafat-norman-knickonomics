
'use client'

import { useState, type CSSProperties } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { championSeasons } from '@/lib/champions'

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

// Historical annual CPI-U, rounded.
// Source: U.S. Bureau of Labor Statistics.
// 2026 value is provisional, not an official annual figure.
const cpi: Record<number, number> = {
  1997: 160.5, 1998: 163.0, 1999: 166.6,
  2000: 172.2, 2001: 177.1, 2002: 179.9,
  2003: 184.0, 2004: 188.9, 2005: 195.3,
  2006: 201.6, 2007: 207.3, 2008: 215.3,
  2009: 214.5, 2010: 218.1, 2011: 224.9,
  2012: 229.6, 2013: 233.0, 2014: 236.7,
  2015: 237.0, 2016: 240.0, 2017: 245.1,
  2018: 251.1, 2019: 255.7, 2020: 258.8,
  2021: 271.0, 2022: 292.7, 2023: 305.3,
  2024: 313.7, 2025: 321.9,
}
const assumed2026Cpi = 326.0

const colors: Record<string, [string, string]> = {
  'Los Angeles Lakers': ['#552583', '#FDB927'],
  'Chicago Bulls': ['#CE1141', '#111111'],
  'Golden State Warriors': ['#1D428A', '#FFC72C'],
  'Boston Celtics': ['#007A33', '#BA9653'],
  'Miami Heat': ['#98002E', '#F9A01B'],
  'San Antonio Spurs': ['#111111', '#C4CED4'],
  'Cleveland Cavaliers': ['#6F263D', '#FFB81C'],
  'Denver Nuggets': ['#0E2240', '#FEC524'],
  'Oklahoma City Thunder': ['#007AC1', '#EF3B24'],
  'Milwaukee Bucks': ['#00471B', '#EEE1C6'],
  'Toronto Raptors': ['#CE1141', '#111111'],
  'Dallas Mavericks': ['#00538C', '#B8C4CA'],
  'Detroit Pistons': ['#C8102E', '#1D42BA'],
  'Houston Rockets': ['#CE1141', '#111111'],
}

export function ChampionsDashboard() {
  const [seasonKey, setSeasonKey] = useState(
    championSeasons[0].season
  )

  const champion =
    championSeasons.find(s => s.season === seasonKey)
    ?? championSeasons[0]

  const [primary, secondary] =
    colors[champion.team] ?? ['#F58426', '#1769AA']

  const theme = {
    '--team-primary': primary,
    '--team-secondary': secondary,
  } as CSSProperties

  const historicalYear = Number(champion.season.slice(-2)) +
    (Number(champion.season.slice(-2)) > 26 ? 1900 : 2000)

  const factor = cpi[historicalYear]
    ? assumed2026Cpi / cpi[historicalYear]
    : 1

  const players = [...champion.players].sort(
    (a, b) => (b.salary ?? -1) - (a.salary ?? -1)
  )

  const verified = players.filter(p => p.salary !== null)
  const unavailable = players.length - verified.length
  const total = verified.reduce(
    (sum, p) => sum + (p.salary ?? 0), 0
  )
  const topSalary = Math.max(
    0, ...verified.map(p => p.salary ?? 0)
  )

  return (
    <div
      className="flex flex-col gap-7 transition-colors duration-500"
      style={theme}
    >
      <div className="flex w-full max-w-lg flex-col gap-2">
        <label
          htmlFor="season-select"
          className="text-sm font-semibold"
        >
          Championship season
        </label>
        <div className="relative">
          <select
            id="season-select"
            value={seasonKey}
            onChange={e => setSeasonKey(e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-white/20 bg-slate-950 px-4 pr-10 text-base text-white"
          >
            {championSeasons.map(s => (
              <option key={s.season} value={s.season}>
                {s.season} — {s.team}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-4 size-4"
          />
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 shadow-xl">
        <div
          className="h-2 transition-colors duration-500"
          style={{
            background: `linear-gradient(90deg, ${primary}, ${secondary})`,
          }}
        />
        <div className="p-5 md:p-7">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: secondary }}
          >
            {champion.season} NBA champion
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl">
            {champion.team}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                Payroll then · {historicalYear}
              </p>
              <p className="mt-1 break-words text-2xl font-bold tabular-nums md:text-3xl">
                {usd.format(total)}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Sum of available player salaries
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                Payroll in 2026 dollars
              </p>
              <p className="mt-1 break-words text-2xl font-bold tabular-nums md:text-3xl">
                {usd.format(total * factor)}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Inflation-adjusted estimate
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            {players.length} rostered players ·{' '}
            {verified.length} salaries available ·{' '}
            {unavailable} missing
          </p>

          {unavailable > 0 && (
            <p className="mt-2 text-sm text-amber-200">
              Partial payroll: {unavailable} player salaries
              are not included. Unsupported estimates have
              not been invented.
            </p>
          )}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80">
        <div className="border-b border-white/10 p-5 md:p-6">
          <h3 className="text-xl font-semibold">
            Championship roster &amp; salaries
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Original-season salary and approximate 2026
            purchasing power.
          </p>
        </div>

        <ul className="divide-y divide-white/10">
          {players.map(p => (
            <li key={p.id} className="p-4 md:px-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-slate-400">
                    {[
                      p.position,
                      p.number && `#${p.number}`,
                    ].filter(Boolean).join(' · ')}
                  </p>
                </div>

                <div className="text-right">
                  {p.salary === null ? (
                    <p className="text-sm italic text-slate-300">
                      Salary unverified
                    </p>
                  ) : (
                    <>
                      <p className="font-semibold tabular-nums">
                        {usd.format(p.salary)}{' '}
                        <span className="text-xs font-normal text-slate-400">
                          then
                        </span>
                      </p>
                      <p className="text-sm tabular-nums text-slate-300">
                        ≈ {usd.format(p.salary * factor)}{' '}
                        <span className="text-xs">
                          in 2026
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>

              {p.salary !== null && topSalary > 0 && (
                <div
                  aria-hidden="true"
                  className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.max(
                        0, p.salary / topSalary * 100
                      )}%`,
                      backgroundColor: secondary,
                    }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="space-y-2 border-t border-white/10 p-5 text-xs text-slate-300 md:px-6">
          <p>
            Salary source:{' '}
            <a
              href={champion.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4"
            >
              Basketball-Reference
              <ExternalLink className="size-3" />
            </a>
          </p>
          <p>
            Inflation method: historical annual CPI-U compared
            with a provisional 2026 CPI assumption of{' '}
            {assumed2026Cpi}.{' '}
            <a
              href="https://www.bls.gov/cpi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BLS CPI source
            </a>
            . This is purchasing-power equivalence, not
            projected NBA contract costs.
          </p>
          <p>
            Salaries come from the existing project dataset.
            Missing salaries are excluded rather than guessed.
            Roster salary sums may differ from official team
            payroll accounting because of trades, partial
            seasons, and contract adjustments.
          </p>
        </div>
      </section>
    </div>
  )
}
