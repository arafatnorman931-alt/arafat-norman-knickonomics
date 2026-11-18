'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { usd, usdCompact } from '@/lib/payroll'

export type ThenVsNowDatum = {
  label: string
  then: number
  adjusted: number
  /** Marks partial / estimated values so the chart can show them faded. */
  flagged?: boolean
  key?: string
}

const tooltipStyle = {
  backgroundColor: 'rgba(2, 6, 23, 0.95)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 12,
  color: '#f8fafc',
  fontSize: 13,
}

type ChartProps = {
  data: ThenVsNowDatum[]
  thenColor: string
  nowColor: string
  thenLabel?: string
  nowLabel?: string
  ariaLabel: string
}

/** Horizontal side-by-side bars: original amount vs 2026 dollars. Works well on phones. */
export function ThenVsNowBars({
  data,
  thenColor,
  nowColor,
  thenLabel = 'Original amount',
  nowLabel = 'In 2026 dollars',
  ariaLabel,
}: ChartProps) {
  const height = Math.max(220, data.length * 52 + 60)
  return (
    <div role="img" aria-label={ariaLabel} className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 4 }} barGap={2}>
          <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.08)" />
          <XAxis
            type="number"
            tickFormatter={(v) => usdCompact.format(Number(v))}
            stroke="rgba(226,232,240,0.6)"
            fontSize={12}
          />
          <YAxis
            type="category"
            dataKey="label"
            width={118}
            stroke="rgba(226,232,240,0.75)"
            fontSize={12}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={tooltipStyle}
            formatter={(value, name) => [usd.format(Number(value)), String(name)]}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: '#e2e8f0' }} />
          <Bar dataKey="then" name={thenLabel} fill={thenColor} radius={[0, 4, 4, 0]} maxBarSize={18}>
            {data.map((d, i) => (
              <Cell key={i} fillOpacity={d.flagged ? 0.45 : 1} />
            ))}
          </Bar>
          <Bar dataKey="adjusted" name={nowLabel} fill={nowColor} radius={[0, 4, 4, 0]} maxBarSize={18}>
            {data.map((d, i) => (
              <Cell key={i} fillOpacity={d.flagged ? 0.45 : 1} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

type TimelineProps = ChartProps & {
  selectedKey: string
  onSelect: (key: string) => void
}

/** Vertical bars for all 30 seasons; click a season to load it. */
export function PayrollTimeline({
  data,
  thenColor,
  nowColor,
  thenLabel = 'Original payroll',
  nowLabel = 'Payroll in 2026 dollars',
  ariaLabel,
  selectedKey,
  onSelect,
}: TimelineProps) {
  const handleClick = (entry: unknown) => {
    const key = (entry as { payload?: ThenVsNowDatum })?.payload?.key
    if (key) onSelect(key)
  }
  return (
    <div role="img" aria-label={ariaLabel} className="w-full overflow-x-auto">
      <div className="min-w-[720px]">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }} barGap={1}>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
            <XAxis
              dataKey="label"
              stroke="rgba(226,232,240,0.7)"
              fontSize={11}
              interval={0}
              angle={-55}
              textAnchor="end"
              height={64}
            />
            <YAxis tickFormatter={(v) => usdCompact.format(Number(v))} stroke="rgba(226,232,240,0.6)" fontSize={12} width={64} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.06)' }}
              contentStyle={tooltipStyle}
              formatter={(value, name) => [usd.format(Number(value)), String(name)]}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: '#e2e8f0' }} />
            <Bar dataKey="then" name={thenLabel} fill={thenColor} onClick={handleClick} className="cursor-pointer">
              {data.map((d) => (
                <Cell
                  key={d.key}
                  fillOpacity={d.flagged ? 0.4 : 1}
                  stroke={d.key === selectedKey ? '#ffffff' : undefined}
                  strokeWidth={d.key === selectedKey ? 2 : 0}
                />
              ))}
            </Bar>
            <Bar dataKey="adjusted" name={nowLabel} fill={nowColor} onClick={handleClick} className="cursor-pointer">
              {data.map((d) => (
                <Cell
                  key={d.key}
                  fillOpacity={d.flagged ? 0.4 : 1}
                  stroke={d.key === selectedKey ? '#ffffff' : undefined}
                  strokeWidth={d.key === selectedKey ? 2 : 0}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
