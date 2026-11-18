'use client'

import { useEffect, useId, useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { championSeasons } from '@/lib/champions'
import { CPI_2026, CPI_2026_LATEST_MONTH, cpiFor, inflationFactor } from '@/lib/cpi'
import { staffPay } from '@/lib/finance'
import { summarize, usd } from '@/lib/payroll'
import { teamTheme, type TeamTheme } from '@/lib/teams'
import { ThenVsNowBars } from '@/components/finance-charts'

function SeasonSelect({
  id,
  value,
  onChange,
  label,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  label: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full appearance-none rounded-xl border border-white/20 bg-slate-950 px-3 pr-9 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--team-accent)]"
        >
          {championSeasons.map((s) => (
            <option key={s.season} value={s.season}>
              {s.season} — {s.team}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-3.5 size-4 text-slate-300" />
      </div>
    </div>
  )
}

/** Converts any amount from a championship season into 2026 purchasing power. */
export function InflationCalculator({ selectedSeason }: { selectedSeason: string }) {
  const id = useId()
  const [seasonKey, setSeasonKey] = useState(selectedSeason)
  useEffect(() => setSeasonKey(selectedSeason), [selectedSeason])

  const season = championSeasons.find((s) => s.season === seasonKey) ?? championSeasons[0]
  const summary = summarize(season)
  const topPlayer = [...season.players]
    .filter((p) => p.salary !== null)
    .sort((a, b) => (b.salary ?? 0) - (a.salary ?? 0))[0]
  const coach = staffPay(season.season, 'coach')

  const presets = [
    { label: summary.isFullTotal ? 'Team payroll' : 'Verified payroll (partial)', value: summary.payroll },
    ...(topPlayer ? [{ label: `Top salary (${topPlayer.name})`, value: topPlayer.salary as number }] : []),
    ...(coach.amount ? [{ label: `Coach pay (estimate)`, value: coach.amount }] : []),
  ]

  const [amountText, setAmountText] = useState(String(Math.round(summary.payroll)))
  useEffect(() => setAmountText(String(Math.round(summarize(season).payroll))), [seasonKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const amount = Number(amountText.replace(/[^0-9.]/g, '')) || 0
  const factor = inflationFactor(season.endYear)
  const baseCpi = cpiFor(season.endYear)

  return (
    <section aria-labelledby={`${id}-h`} className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 md:p-6">
      <h3 id={`${id}-h`} className="text-xl font-semibold">
        Inflation calculator
      </h3>
      <p className="mt-1 text-sm text-slate-300">
        Pick a championship season and an amount to see its 2026 purchasing power.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <SeasonSelect id={`${id}-season`} label="Championship season" value={seasonKey} onChange={setSeasonKey} />
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${id}-amount`} className="text-sm font-medium text-slate-200">
            Amount in {season.endYear} dollars
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">$</span>
            <input
              id={`${id}-amount`}
              inputMode="decimal"
              value={amountText}
              onChange={(e) => setAmountText(e.target.value)}
              className="h-11 w-full rounded-xl border border-white/20 bg-slate-950 pl-7 pr-3 text-sm tabular-nums text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--team-accent)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setAmountText(String(Math.round(p.value)))}
            className="min-h-9 rounded-full border border-white/20 px-3 text-xs text-slate-200 transition hover:border-[var(--team-accent)] hover:text-white"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-400">Original ({season.endYear} dollars)</p>
          <p className="mt-1 break-words text-xl font-bold tabular-nums">{usd.format(amount)}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-400">Equivalent in 2026 dollars</p>
          <p className="mt-1 break-words text-xl font-bold tabular-nums" style={{ color: 'var(--team-accent)' }}>
            {usd.format(amount * factor)}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-400">Inflation multiplier</p>
          <p className="mt-1 text-xl font-bold tabular-nums">×{factor.toFixed(3)}</p>
          <p className="text-[11px] text-slate-400">
            CPI-U {baseCpi} → {CPI_2026}
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        Formula: 2026 value = original × (2026 CPI-U ÷ {season.endYear} CPI-U). The 2026 CPI-U is the BLS
        January–{CPI_2026_LATEST_MONTH.split(' ')[0]} 2026 average and is provisional.
      </p>
    </section>
  )
}

/** Compare the inflation-adjusted payrolls of two championship teams. */
export function SeasonCompare({ selectedSeason }: { selectedSeason: string }) {
  const id = useId()
  const [a, setA] = useState(selectedSeason)
  const [b, setB] = useState(championSeasons[championSeasons.length - 1].season)
  useEffect(() => setA(selectedSeason), [selectedSeason])

  const pair = useMemo(
    () =>
      [a, b].map((key) => {
        const s = championSeasons.find((x) => x.season === key) ?? championSeasons[0]
        return { s, sum: summarize(s), theme: teamTheme(s.abbr) }
      }),
    [a, b],
  )

  const data = pair.map(({ s, sum }) => ({
    label: `${s.season} ${s.abbr}`,
    then: sum.payroll,
    adjusted: sum.payroll2026,
    flagged: !sum.isFullTotal,
  }))
  const [x, y] = pair
  const diff = x.sum.payroll2026 - y.sum.payroll2026
  const eitherPartial = !x.sum.isFullTotal || !y.sum.isFullTotal

  return (
    <section aria-labelledby={`${id}-h`} className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 md:p-6">
      <h3 id={`${id}-h`} className="text-xl font-semibold">
        Compare two championship payrolls
      </h3>
      <p className="mt-1 text-sm text-slate-300">
        Both payrolls are converted to 2026 dollars so teams from different eras can be compared directly.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <SeasonSelect id={`${id}-a`} label="Team A" value={a} onChange={setA} />
        <SeasonSelect id={`${id}-b`} label="Team B" value={b} onChange={setB} />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {pair.map(({ s, sum, theme }, i) => (
          <CompareCard key={i} label={i === 0 ? 'Team A' : 'Team B'} season={s.season} team={s.team} theme={theme} sum={sum} />
        ))}
      </div>

      <div className="mt-5">
        <ThenVsNowBars
          data={data}
          thenColor={x.theme.muted}
          nowColor={x.theme.accent}
          thenLabel="Original payroll"
          nowLabel="Payroll in 2026 dollars"
          ariaLabel="Bar chart comparing two championship payrolls in original and 2026 dollars"
        />
      </div>

      <p className="mt-3 text-sm text-slate-200">
        In 2026 dollars, the {x.s.season} {x.s.team} payroll is{' '}
        <strong className="tabular-nums">{usd.format(Math.abs(diff))}</strong> {diff >= 0 ? 'more' : 'less'} than the{' '}
        {y.s.season} {y.s.team} payroll.
      </p>
      {eitherPartial && (
        <p className="mt-2 rounded-lg border border-amber-300/30 bg-amber-300/10 p-3 text-xs text-amber-100">
          At least one payroll is partial (some salaries could not be verified), so this comparison understates that
          team&apos;s true payroll. Partial values are shown faded in the chart.
        </p>
      )}
    </section>
  )
}

function CompareCard({
  label,
  season,
  team,
  theme,
  sum,
}: {
  label: string
  season: string
  team: string
  theme: TeamTheme
  sum: ReturnType<typeof summarize>
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }} />
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
        <p className="font-semibold">
          {season} {team}
        </p>
        <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <div>
            <dt className="text-xs text-slate-400">Original</dt>
            <dd className="tabular-nums">{usd.format(sum.payroll)}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">2026 dollars</dt>
            <dd className="font-semibold tabular-nums" style={{ color: theme.accent }}>
              {usd.format(sum.payroll2026)}
            </dd>
          </div>
        </dl>
        <p className="mt-2 text-[11px] text-slate-400">{sum.payrollLabel}</p>
      </div>
    </div>
  )
}
