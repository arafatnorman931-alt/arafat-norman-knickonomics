'use client'

import { ExternalLink } from 'lucide-react'
import type { ChampionSeason } from '@/lib/champions'
import { staffPay, teamRevenue } from '@/lib/finance'
import { to2026 } from '@/lib/cpi'
import { usd } from '@/lib/payroll'
import type { TeamTheme } from '@/lib/teams'
import { ThenVsNowBars } from '@/components/finance-charts'

type Props = { season: ChampionSeason; theme: TeamTheme }

function SourceLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-white"
    >
      {label}
      <ExternalLink aria-hidden="true" className="size-3" />
    </a>
  )
}

function Badge({ kind }: { kind: 'estimate' | 'none' | 'actual' }) {
  const styles = {
    estimate: 'border-amber-300/40 bg-amber-300/10 text-amber-200',
    none: 'border-white/15 bg-white/5 text-slate-300',
    actual: 'border-emerald-300/40 bg-emerald-300/10 text-emerald-200',
  }
  const text = { estimate: 'Reported estimate', none: 'Not disclosed', actual: 'Historical amount' }
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles[kind]}`}>
      {text[kind]}
    </span>
  )
}

export function StaffEarnings({ season, theme }: Props) {
  const rows = [
    { role: 'Head coach', name: season.coach, pay: staffPay(season.season, 'coach') },
    { role: 'Lead executive', name: season.executive, pay: staffPay(season.season, 'executive') },
  ]
  const chartData = rows
    .filter((r) => r.pay.amount !== null)
    .map((r) => ({
      label: r.name.split(' / ').pop() ?? r.name,
      then: r.pay.amount as number,
      adjusted: to2026(r.pay.amount as number, season.endYear),
      flagged: true,
    }))
  const revenue = teamRevenue(season.season)

  return (
    <section
      id="staff-earnings"
      aria-labelledby="staff-heading"
      className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80"
    >
      <div className="border-b border-white/10 p-5 md:p-6">
        <h3 id="staff-heading" className="text-xl font-semibold">
          Staff earnings &amp; team revenue
        </h3>
        <p className="mt-1 text-sm text-slate-300">
          Coaches and executives for the {season.season} {season.team}. NBA teams do not publish staff pay, so
          only figures reported by major news outlets appear here. They are labelled as estimates.
        </p>
      </div>

      <ul className="divide-y divide-white/10">
        {rows.map((r) => (
          <li key={r.role} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between md:px-6">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-slate-400">{r.role}</p>
              <p className="font-medium">{r.name}</p>
              <p className="mt-1 max-w-xl text-xs text-slate-400">{r.pay.basis}</p>
              {r.pay.source && (
                <p className="mt-1 text-xs text-slate-300">
                  Source: <SourceLink {...r.pay.source} />
                </p>
              )}
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <Badge kind={r.pay.amount === null ? 'none' : 'estimate'} />
              {r.pay.amount !== null && (
                <>
                  <p className="mt-1 font-semibold tabular-nums">
                    ~{usd.format(r.pay.amount)} <span className="text-xs font-normal text-slate-400">per season</span>
                  </p>
                  <p className="text-sm tabular-nums text-slate-300">
                    ≈ {usd.format(to2026(r.pay.amount, season.endYear))}{' '}
                    <span className="text-xs">in 2026 dollars</span>
                  </p>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {chartData.length > 0 && (
        <div className="border-t border-white/10 p-4 md:p-6">
          <p className="mb-2 text-sm font-medium">Staff pay: original vs 2026 dollars (estimates shown faded)</p>
          <ThenVsNowBars
            data={chartData}
            thenColor={theme.muted}
            nowColor={theme.accent}
            thenLabel="Reported per-season pay"
            nowLabel="In 2026 dollars"
            ariaLabel="Bar chart comparing reported staff pay with its 2026 inflation-adjusted value"
          />
        </div>
      )}

      <div className="border-t border-white/10 p-4 md:p-6">
        <p className="text-xs uppercase tracking-wider text-slate-400">Team revenue, {season.season}</p>
        {revenue ? (
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <Badge kind="estimate" />
              <p className="mt-2 text-2xl font-bold tabular-nums">{usd.format(revenue.amount)}</p>
              <p className="text-xs text-slate-400">Original-season revenue</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="inline-flex rounded-full border border-sky-300/40 bg-sky-300/10 px-2 py-0.5 text-[11px] font-medium text-sky-200">
                Inflation-adjusted
              </span>
              <p className="mt-2 text-2xl font-bold tabular-nums">
                {usd.format(to2026(revenue.amount, season.endYear))}
              </p>
              <p className="text-xs text-slate-400">In 2026 dollars</p>
            </div>
            <p className="text-xs text-slate-400 sm:col-span-2">
              {revenue.basis} Source: <SourceLink {...revenue.source} />
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-slate-300">
            No verified revenue figure is available for this season. Team revenue is private; this site shows it
            only where a published estimate could be checked, and does not fill the gap with a guess.
          </p>
        )}
      </div>
    </section>
  )
}
