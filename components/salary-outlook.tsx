'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { formatCurrency, type Player } from '@/lib/players'

const chartConfig = {
  historical: { label: 'Historical', color: 'var(--chart-1)' },
  projected: { label: 'Projected', color: 'var(--chart-2)' },
} satisfies ChartConfig

type SalaryOutlookProps = {
  players: Player[]
  selectedId: string
  onSelect: (id: string) => void
}

export function SalaryOutlook({ players, selectedId, onSelect }: SalaryOutlookProps) {
  const player = players.find((p) => p.id === selectedId) ?? players[0]

  const data = player.seasons.map((s) => ({
    season: s.season,
    historical: s.projected ? null : s.amount,
    projected: s.projected ? s.amount : null,
  }))

  const historicalSeasons = player.seasons.filter((s) => !s.projected)
  const projectedSeasons = player.seasons.filter((s) => s.projected)
  const historicalTotal = historicalSeasons.reduce((sum, s) => sum + s.amount, 0)
  const projectedTotal = projectedSeasons.reduce((sum, s) => sum + s.amount, 0)

  return (
    <section aria-labelledby="salary-outlook-heading" className="rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="salary-outlook-heading" className="text-xl font-semibold tracking-tight">
            Salary Outlook
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Historical and projected annual earnings for {player.name}.
          </p>
        </div>

        <div role="group" aria-label="Select player" className="flex flex-wrap gap-2">
          {players.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              aria-pressed={p.id === player.id}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                p.id === player.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-3">
        <div>
          <dt className="flex items-center gap-2 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-chart-1" />
            Historical ({historicalSeasons.length} seasons)
          </dt>
          <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums md:text-3xl">
            {formatCurrency(historicalTotal)}
          </dd>
        </div>
        <div>
          <dt className="flex items-center gap-2 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-chart-2" />
            Projected ({projectedSeasons.length} seasons)
          </dt>
          <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums text-primary md:text-3xl">
            {formatCurrency(projectedTotal)}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <dt className="text-xs text-muted-foreground">Projected Career Total</dt>
          <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums md:text-3xl">
            {formatCurrency(player.projectedCareer)}
          </dd>
        </div>
      </dl>

      <ChartContainer config={chartConfig} className="mt-6 aspect-auto h-72 w-full md:h-80">
        <BarChart data={data} margin={{ left: 0, right: 0, top: 8 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="season" tickLine={false} axisLine={false} tickMargin={8} fontSize={11} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={52}
            fontSize={11}
            tickFormatter={(v: number) => formatCurrency(v)}
          />
          <ChartTooltip
            cursor={{ fill: 'var(--accent)', opacity: 0.4 }}
            content={
              <ChartTooltipContent
                formatter={(value, name) => (
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-muted-foreground">
                      {chartConfig[name as keyof typeof chartConfig]?.label}
                    </span>
                    <span className="font-mono font-medium tabular-nums">{formatCurrency(Number(value), false)}</span>
                  </div>
                )}
              />
            }
          />
          <Bar dataKey="historical" stackId="earnings" fill="var(--color-historical)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="projected" stackId="earnings" fill="var(--color-projected)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </section>
  )
}
