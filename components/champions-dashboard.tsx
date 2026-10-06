'use client'

import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { championSeasons } from '@/lib/champions'

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export function ChampionsDashboard() {
  const [seasonKey, setSeasonKey] = useState(championSeasons[0].season)
  const champion = championSeasons.find((s) => s.season === seasonKey) ?? championSeasons[0]

  const players = [...champion.players].sort((a, b) => (b.salary ?? -1) - (a.salary ?? -1))
  const verified = players.filter((p) => p.salary !== null)
  const unavailableCount = players.length - verified.length
  const totalPayroll = verified.reduce((sum, p) => sum + (p.salary ?? 0), 0)
  const topSalary = verified[0]?.salary ?? 0

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full max-w-md flex-col gap-2">
        <label htmlFor="season-select" className="text-sm font-medium text-foreground">
          Championship season
        </label>
        <div className="relative">
          <select
            id="season-select"
            value={seasonKey}
            onChange={(e) => setSeasonKey(e.target.value)}
            className="h-12 w-full appearance-none rounded-lg border border-input bg-card pl-4 pr-10 text-base text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {championSeasons.map((s) => (
              <option key={s.season} value={s.season}>
                {s.season} — {s.team}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </div>

      <section aria-labelledby="payroll-heading" className="rounded-xl border border-border bg-card/90 p-5 md:p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">{champion.season} NBA Champion</p>
        <h2 id="payroll-heading" className="mt-1 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          {champion.team}
        </h2>

        <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-1 md:col-span-1">
            <dt className="text-sm text-muted-foreground">Total player payroll</dt>
            <dd className="text-3xl font-semibold tabular-nums tracking-tight md:text-4xl">{usd.format(totalPayroll)}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-sm text-muted-foreground">Rostered players</dt>
            <dd className="text-2xl font-semibold tabular-nums">{players.length}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-sm text-muted-foreground">Salaries unavailable</dt>
            <dd className="text-2xl font-semibold tabular-nums">{unavailableCount}</dd>
          </div>
        </dl>

        {unavailableCount > 0 && (
          <p className="mt-4 text-sm text-muted-foreground">
            Total includes only the {verified.length} verified salaries. {unavailableCount}{' '}
            {unavailableCount === 1 ? 'player is' : 'players are'} excluded because no salary could be verified.
          </p>
        )}
      </section>

      <section aria-labelledby="roster-heading" className="rounded-xl border border-border bg-card/90">
        <div className="flex flex-col gap-1 border-b border-border p-5 md:p-6">
          <h2 id="roster-heading" className="text-lg font-semibold">
            Full roster &amp; salaries
          </h2>
          <p className="text-sm text-muted-foreground">Sorted by {champion.season} salary, highest first.</p>
        </div>

        <ul className="divide-y divide-border">
          {players.map((p) => (
            <li key={p.id} className="flex flex-col gap-2 px-5 py-4 md:px-6">
              <div className="flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {[p.position, p.number && `#${p.number}`].filter(Boolean).join(' · ') || '—'}
                  </p>
                </div>
                {p.salary !== null ? (
                  <p className="shrink-0 text-right font-semibold tabular-nums">{usd.format(p.salary)}</p>
                ) : (
                  <p className="shrink-0 text-right text-sm italic text-muted-foreground">Data unavailable</p>
                )}
              </div>
              {p.salary !== null && topSalary > 0 && (
                <div aria-hidden="true" className="h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${(p.salary / topSalary) * 100}%` }} />
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="border-t border-border p-5 text-xs text-muted-foreground md:px-6">
          Source:{' '}
          <a
            href={champion.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Basketball-Reference — {champion.season} {champion.team}
            <ExternalLink aria-hidden="true" className="size-3" />
          </a>
        </div>
      </section>
    </div>
  )
}
