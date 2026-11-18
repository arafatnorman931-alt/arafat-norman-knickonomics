import type { ChampionSeason } from '@/lib/champions'
import { inflationFactor } from '@/lib/cpi'

export const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const usdCompact = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const num = new Intl.NumberFormat('en-US')

export type PayrollSummary = {
  /** Sum of every verified individual salary listed for the season. */
  itemized: number
  /** Payroll figure used for comparisons. */
  payroll: number
  /** Where `payroll` comes from, shown to visitors. */
  payrollLabel: string
  /** True when `payroll` is a published team total rather than a partial sum. */
  isFullTotal: boolean
  verifiedCount: number
  missingCount: number
  playerCount: number
  factor: number
  payroll2026: number
}

export function summarize(season: ChampionSeason): PayrollSummary {
  const verified = season.players.filter((p) => p.salary !== null)
  const itemized = verified.reduce((sum, p) => sum + (p.salary ?? 0), 0)
  const missingCount = season.players.length - verified.length
  const factor = inflationFactor(season.endYear)

  let payroll = itemized
  let payrollLabel = 'Sum of verified player salaries'
  let isFullTotal = missingCount === 0

  if (season.reportedPayroll) {
    payroll = season.reportedPayroll.amount
    payrollLabel = season.reportedPayroll.label
    isFullTotal = true
  } else if (missingCount > 0) {
    payrollLabel = `Partial: sum of ${verified.length} verified salaries`
  }

  return {
    itemized,
    payroll,
    payrollLabel,
    isFullTotal,
    verifiedCount: verified.length,
    missingCount,
    playerCount: season.players.length,
    factor,
    payroll2026: payroll * factor,
  }
}
