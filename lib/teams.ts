// Team colours used to re-theme the dashboard for the selected champion.
// [primary, secondary] — approximate official brand colours.
const TEAM_COLORS: Record<string, [string, string]> = {
  CHI: ['#CE1141', '#000000'],
  SAS: ['#C4CED4', '#000000'],
  LAL: ['#552583', '#FDB927'],
  DET: ['#C8102E', '#1D42BA'],
  MIA: ['#98002E', '#F9A01B'],
  BOS: ['#007A33', '#BA9653'],
  DAL: ['#00538C', '#B8C4CA'],
  GSW: ['#1D428A', '#FFC72C'],
  CLE: ['#860038', '#FDBB30'],
  TOR: ['#CE1141', '#A1A1A4'],
  MIL: ['#00471B', '#EEE1C6'],
  DEN: ['#0E2240', '#FEC524'],
  OKC: ['#007AC1', '#EF3B24'],
  NYK: ['#006BB6', '#F58426'],
}

const FALLBACK: [string, string] = ['#006BB6', '#F58426']

function luminance(hex: string): number {
  const n = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Mixes a hex colour toward white by `amount` (0–1). */
function lighten(hex: string, amount: number): string {
  const n = hex.replace('#', '')
  const out = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16)
    return Math.round(c + (255 - c) * amount).toString(16).padStart(2, '0')
  })
  return `#${out.join('')}`
}

export type TeamTheme = {
  primary: string
  secondary: string
  /** Bright colour that stays readable on the dark background (text, 2026 bars). */
  accent: string
  /** Softer companion colour (historical bars). */
  muted: string
}

export function teamTheme(abbr: string): TeamTheme {
  const [primary, secondary] = TEAM_COLORS[abbr] ?? FALLBACK
  const brighter = luminance(primary) >= luminance(secondary) ? primary : secondary
  const darker = brighter === primary ? secondary : primary
  // Guarantee contrast on a near-black background.
  const accent = luminance(brighter) < 0.18 ? lighten(brighter, 0.45) : brighter
  const muted = luminance(darker) < 0.1 ? lighten(darker === '#000000' ? '#64748b' : darker, 0.38) : darker
  return { primary, secondary, accent, muted }
}
