'use client'

import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { championSeasons } from '@/lib/champions'
import { CPI_2026, CPI_2026_LATEST_MONTH, CPI_SOURCE_URL, cpiFor } from '@/lib/cpi'
import { num, summarize, usd } from '@/lib/payroll'
import { teamTheme } from '@/lib/teams'
import { PayrollTimeline, ThenVsNowBars } from '@/components/finance-charts'
import { StaffEarnings } from '@/components/staff-earnings'
import { InflationCalculator, SeasonCompare } from '@/components/inflation-tools'

const TOP_N = 10

function Stat({ label, value, note, accent }: { label: string; value: string; note?: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p
        className="mt-1 break-words text-2xl font-bold tabular-nums md:text-3xl"
        style={accent ? { color: 'var(--team-accent)' } : undefined}
      >
        {value}
      </p>
      {note && <p className="mt-1 text-xs text-slate-400">{note}</p>}
    </div>
  )
}

export function ChampionsDashboard() {
  const [seasonKey, setSeasonKey] = useState(championSeasons[0].season)
  const [showAllPlayers, setShowAllPlayers] = useState(false)

  const index = Math.max(0, championSeasons.findIndex((s) => s.season === seasonKey))
  const champion = championSeasons[index]
  const theme = teamTheme(champion.abbr)
  const summary = summarize(champion)

  // Re-theme the whole page (background gradient, nav, focus rings) for the selected champion.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--team-primary', theme.primary)
    root.style.setProperty('--team-secondary', theme.secondary)
    root.style.setProperty('--team-accent', theme.accent)
    root.style.setProperty('--team-muted', theme.muted)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.primary)
  }, [theme.primary, theme.secondary, theme.accent, theme.muted])

  const style = {
    '--team-primary': theme.primary,
    '--team-secondary': theme.secondary,
    '--team-accent': theme.accent,
    '--team-muted': theme.muted,
  } as CSSProperties

  const players = useMemo(
    () =>
      [...champion.players].sort((a, b) => {
        if (a.onRoster !== b.onRoster) return a.onRoster ? -1 : 1
        return (b.salary ?? -1) - (a.salary ?? -1)
      }),
    [champion],
  )
  const verified = players.filter((p) => p.salary !== null)
  const topSalary = Math.max(0, ...verified.map((p) => p.salary ?? 0))
  const chartPlayers = (showAllPlayers ? verified : verified.slice(0, TOP_N)).map((p) => ({
    label: p.name,
    then: p.salary as number,
    adjusted: (p.salary as number) * summary.factor,
  }))

  const timeline = useMemo(
    () =>
      [...championSeasons].reverse().map((s) => {
        const sum = summarize(s)
        return {
          key: s.season,
          label: `${s.season.slice(2)} ${s.abbr}`,
          then: sum.payroll,
          adjusted: sum.payroll2026,
          flagged: !sum.isFullTotal,
        }
      }),
    [],
  )

  const go = (delta: number) => {
    const next = championSeasons[index + delta]
    if (next) setSeasonKey(next.season)
  }
  const baseCpi = cpiFor(champion.endYear)

  return (
    <div className="flex flex-col gap-7" style={style}>
      {/* Season selector */}
      <div className="flex flex-col gap-2">
        <label htmlFor="season-select" className="text-sm font-semibold">
          Championship season <span className="font-normal text-slate-300">({championSeasons.length} seasons, 1996–97 to 2025–26)</span>
        </label>
        <div className="flex w-full max-w-xl items-center gap-2">
          <button
            type="button"
            onClick={() => go(1)}
            disabled={index === championSeasons.length - 1}
            aria-label="Previous (older) championship season"
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/20 bg-slate-950 text-white transition hover:border-[var(--team-accent)] disabled:opacity-40"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <div className="relative min-w-0 flex-1">
            <select
              id="season-select"
              value={seasonKey}
              onChange={(e) => setSeasonKey(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-white/20 bg-slate-950 px-4 pr-10 text-base text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--team-accent)]"
            >
              {championSeasons.map((s) => (
                <option key={s.season} value={s.season}>
                  {s.season} — {s.team}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-4 size-4" />
          </div>
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Next (newer) championship season"
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/20 bg-slate-950 text-white transition hover:border-[var(--team-accent)] disabled:opacity-40"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Champion summary */}
      <section aria-live="polite" className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 shadow-xl">
        <div
          className="h-2 transition-colors duration-500"
          style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}
        />
        <div className="p-5 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>
            {champion.season} NBA champion
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl">{champion.team}</h2>
          <p className="mt-2 text-sm text-slate-300">
            Head coach {champion.coach} · Lead executive {champion.executive} · {champion.arena}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              label={`Player payroll · ${champion.season} dollars`}
              value={usd.format(summary.payroll)}
              note={summary.payrollLabel}
            />
            <Stat label="Payroll in 2026 dollars" value={usd.format(summary.payroll2026)} note="Inflation-adjusted (CPI-U)" accent />
            <Stat
              label="Inflation multiplier"
              value={`×${summary.factor.toFixed(2)}`}
              note={`CPI-U ${baseCpi} (${champion.endYear}) → ${CPI_2026} (2026)`}
            />
            <Stat
              label="Home attendance"
              value={champion.attendance !== null ? num.format(champion.attendance) : 'Not available'}
              note={
                champion.attendance !== null
                  ? `${champion.attendanceRank} in NBA${champion.attendanceNote ? ` · ${champion.attendanceNote}` : ''}`
                  : 'Could not be verified for this season'
              }
            />
          </div>

          <p className="mt-4 text-sm text-slate-300">
            {summary.playerCount} players listed · {summary.verifiedCount} salaries verified · {summary.missingCount} not
            verified
          </p>
          {!summary.isFullTotal && (
            <p className="mt-2 rounded-lg border border-amber-300/30 bg-amber-300/10 p-3 text-sm text-amber-100">
              Partial payroll: {summary.missingCount} player salaries could not be verified and are excluded. The total
              above is lower than the team&apos;s real payroll. Missing salaries are never estimated.
            </p>
          )}
          {summary.isFullTotal && champion.reportedPayroll && summary.itemized !== summary.payroll && (
            <p className="mt-2 text-sm text-slate-300">
              Team total from {champion.reportedPayroll.label}. Itemized verified salaries below sum to{' '}
              {usd.format(summary.itemized)}.
            </p>
          )}
          {champion.endYear === 2026 && (
            <p className="mt-2 text-xs text-slate-400">
              This season ended in 2026, so its original and 2026-dollar values are almost the same.
            </p>
          )}
        </div>
      </section>

      {/* Player salary chart */}
      <section aria-labelledby="player-chart-h" className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 id="player-chart-h" className="text-xl font-semibold">
              Player salaries: original vs 2026 dollars
            </h3>
            <p className="mt-1 text-sm text-slate-300">Verified salaries only, highest paid first.</p>
          </div>
          {verified.length > TOP_N && (
            <button
              type="button"
              onClick={() => setShowAllPlayers((v) => !v)}
              className="min-h-10 rounded-full border border-white/20 px-4 text-sm transition hover:border-[var(--team-accent)]"
            >
              {showAllPlayers ? `Show top ${TOP_N}` : `Show all ${verified.length}`}
            </button>
          )}
        </div>
        <div className="mt-4">
          {chartPlayers.length > 0 ? (
            <ThenVsNowBars
              data={chartPlayers}
              thenColor={theme.muted}
              nowColor={theme.accent}
              thenLabel={`${champion.season} salary`}
              nowLabel="In 2026 dollars"
              ariaLabel={`Bar chart of ${champion.team} player salaries in ${champion.season} and in 2026 dollars`}
            />
          ) : (
            <p className="text-sm text-slate-300">No verified player salaries for this season.</p>
          )}
        </div>
      </section>

      {/* Roster list */}
      <section className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80">
        <div className="border-b border-white/10 p-5 md:p-6">
          <h3 className="text-xl font-semibold">Championship roster &amp; salaries</h3>
          <p className="mt-1 text-sm text-slate-300">Original-season salary and its 2026 purchasing power.</p>
        </div>
        <ul className="divide-y divide-white/10">
          {players.map((p) => (
            <li key={`${p.id}-${p.onRoster}`} className="p-4 md:px-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-slate-400">
                    {p.onRoster
                      ? [p.position, p.number && `#${p.number}`].filter(Boolean).join(' · ')
                      : 'On payroll only (waived, traded or retired; not on season roster)'}
                  </p>
                </div>
                <div className="text-right">
                  {p.salary === null ? (
                    <p className="text-sm italic text-slate-300">Salary not verified</p>
                  ) : (
                    <>
                      <p className="font-semibold tabular-nums">
                        {usd.format(p.salary)} <span className="text-xs font-normal text-slate-400">original</span>
                      </p>
                      <p className="text-sm tabular-nums text-slate-300">
                        ≈ {usd.format(p.salary * summary.factor)} <span className="text-xs">in 2026</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
              {p.salary !== null && topSalary > 0 && (
                <div aria-hidden="true" className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${(p.salary / topSalary) * 100}%`, backgroundColor: theme.accent }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="space-y-2 border-t border-white/10 p-5 text-xs text-slate-300 md:px-6">
          <p>
            Roster &amp; attendance:{' '}
            <a href={champion.rosterSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
              Basketball-Reference <ExternalLink aria-hidden="true" className="size-3" />
            </a>
            {' · '}Salaries:{' '}
            <a href={champion.salarySource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
              {champion.salarySource.label} <ExternalLink aria-hidden="true" className="size-3" />
            </a>
          </p>
          <p>
            Roster salary sums can differ from official payroll accounting because of trades, partial seasons,
            10-day contracts and cap adjustments.
          </p>
        </div>
      </section>

      <StaffEarnings season={champion} theme={theme} />

      <div className="grid gap-7 xl:grid-cols-2">
        <InflationCalculator selectedSeason={champion.season} />
        <SeasonCompare selectedSeason={champion.season} />
      </div>

      {/* All seasons */}
      <section aria-labelledby="timeline-h" className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 md:p-6">
        <h3 id="timeline-h" className="text-xl font-semibold">
          30 champions: payroll then vs in 2026 dollars
        </h3>
        <p className="mt-1 text-sm text-slate-300">
          Tap a bar to load that season. Faded bars are partial payrolls (some salaries unverified), so they are
          lower than the real totals. Scroll sideways on small screens.
        </p>
        <div className="mt-4">
          <PayrollTimeline
            data={timeline}
            thenColor={theme.muted}
            nowColor={theme.accent}
            ariaLabel="Bar chart of every championship payroll from 1996–97 to 2025–26 in original and 2026 dollars"
            selectedKey={champion.season}
            onSelect={setSeasonKey}
          />
        </div>
      </section>

      {/* Methodology */}
      <section aria-labelledby="method-h" className="rounded-2xl border border-white/15 bg-slate-950/80 p-5 text-sm text-slate-300 md:p-6">
        <h3 id="method-h" className="text-xl font-semibold text-white">
          Inflation-adjusted ≠ today&apos;s salary cap
        </h3>
        <p className="mt-2">
          A payroll &quot;in 2026 dollars&quot; answers one question: how much everyday purchasing power that money
          represents today. It is <strong className="text-white">not</strong> what the same roster would cost under the
          2026 salary cap. NBA salaries have grown much faster than consumer prices, because league revenue and TV deals
          grew far faster than inflation, so a modern payroll for those players would be far higher than the
          inflation-adjusted figure.
        </p>
        <h4 className="mt-5 font-semibold text-white">How figures are labelled</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong className="text-white">Original amount</strong>: the salary or payroll as reported for that season.</li>
          <li><strong className="text-white">In 2026 dollars</strong>: original × (2026 CPI-U ÷ CPI-U for the year the season ended).</li>
          <li><strong className="text-white">Reported estimate</strong>: staff pay or team revenue reported by news outlets or Forbes, not official figures.</li>
          <li><strong className="text-white">Not verified / not disclosed</strong>: no reliable figure was found. Nothing is guessed.</li>
        </ul>
        <h4 className="mt-5 font-semibold text-white">Sources</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Inflation: U.S. Bureau of Labor Statistics CPI-U annual averages, 1997–2025. 2026 uses the provisional
            January–{CPI_2026_LATEST_MONTH} average ({CPI_2026}).{' '}
            <a className="underline" href={CPI_SOURCE_URL} target="_blank" rel="noopener noreferrer">bls.gov/cpi</a>
          </li>
          <li>Champions, rosters, coaches, executives &amp; attendance: Basketball-Reference team pages.</li>
          <li>Player salaries: HoopsHype team and player salary pages, Spotrac team financials, and Basketball-Reference salary tables.</li>
          <li>Staff pay &amp; revenue: contract reports from AP, ESPN, CBS News and SNY, and Forbes revenue estimates, linked next to each figure.</li>
        </ul>
      </section>
    </div>
  )
}
