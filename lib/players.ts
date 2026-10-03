// All dollar figures are illustrative placeholders, not real contract data.

export type SeasonEarning = {
  season: string
  amount: number
  projected: boolean
}

export type Player = {
  id: string
  name: string
  position: string
  number: string
  initials: string
  seasons: SeasonEarning[]
}

export type PlayerFinancials = {
  careerEarnings: number
  currentSalary: number
  futureGuaranteed: number
  projectedCareer: number
  historicalTotal: number
  historicalSeasons: number
  projectedTotal: number
  projectedSeasons: number
}

const SEASONS = [
  '2021–22',
  '2022–23',
  '2023–24',
  '2024–25',
  '2025–26',
  '2026–27',
  '2027–28',
  '2028–29',
  '2029–30',
]

const CURRENT_SEASON_INDEX = 5

function buildSeasons(start: number, step: number): SeasonEarning[] {
  return SEASONS.map((season, i) => ({
    season,
    amount: start + step * i,
    projected: i > CURRENT_SEASON_INDEX,
  }))
}

export const CURRENT_SEASON = SEASONS[CURRENT_SEASON_INDEX]

const sumAmounts = (seasons: SeasonEarning[]) => seasons.reduce((sum, s) => sum + s.amount, 0)

// Single source of truth: every total on the dashboard is derived from `seasons`.
// Identity: careerEarnings + currentSalary + futureGuaranteed = projectedCareer
//           historicalTotal (through current season) + projectedTotal = projectedCareer
export function getPlayerFinancials(player: Player): PlayerFinancials {
  const currentIndex = player.seasons.findIndex((s) => s.season === CURRENT_SEASON)
  const completed = player.seasons.slice(0, currentIndex)
  const historical = player.seasons.filter((s) => !s.projected)
  const future = player.seasons.filter((s) => s.projected)

  const careerEarnings = sumAmounts(completed)
  const currentSalary = player.seasons[currentIndex]?.amount ?? 0
  const futureGuaranteed = sumAmounts(future)
  const historicalTotal = sumAmounts(historical)

  return {
    careerEarnings,
    currentSalary,
    futureGuaranteed,
    projectedCareer: historicalTotal + futureGuaranteed,
    historicalTotal,
    historicalSeasons: historical.length,
    projectedTotal: futureGuaranteed,
    projectedSeasons: future.length,
  }
}

export const players: Player[] = [
  {
    id: 'brunson',
    name: 'Jalen Brunson',
    position: 'Guard',
    number: '11',
    initials: 'JB',
    seasons: buildSeasons(20_000_000, 4_000_000),
  },
  {
    id: 'towns',
    name: 'Karl-Anthony Towns',
    position: 'Center',
    number: '32',
    initials: 'KT',
    seasons: buildSeasons(30_000_000, 3_000_000),
  },
  {
    id: 'anunoby',
    name: 'OG Anunoby',
    position: 'Forward',
    number: '8',
    initials: 'OA',
    seasons: buildSeasons(15_000_000, 4_000_000),
  },
  {
    id: 'bridges',
    name: 'Mikal Bridges',
    position: 'Forward',
    number: '25',
    initials: 'MB',
    seasons: buildSeasons(20_000_000, 3_000_000),
  },
  {
    id: 'hart',
    name: 'Josh Hart',
    position: 'Guard',
    number: '3',
    initials: 'JH',
    seasons: buildSeasons(10_000_000, 2_000_000),
  },
]

export function formatCurrency(value: number, compact = true) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: compact ? 'compact' : 'standard',
    maximumFractionDigits: compact ? 1 : 0,
  }).format(value)
}
