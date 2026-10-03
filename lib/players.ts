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
  careerEarnings: number
  currentSalary: number
  futureGuaranteed: number
  projectedCareer: number
  seasons: SeasonEarning[]
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

export const players: Player[] = [
  {
    id: 'brunson',
    name: 'Jalen Brunson',
    position: 'Guard',
    number: '11',
    initials: 'JB',
    careerEarnings: 100_000_000,
    currentSalary: 40_000_000,
    futureGuaranteed: 120_000_000,
    projectedCareer: 300_000_000,
    seasons: buildSeasons(20_000_000, 4_000_000),
  },
  {
    id: 'towns',
    name: 'Karl-Anthony Towns',
    position: 'Center',
    number: '32',
    initials: 'KT',
    careerEarnings: 200_000_000,
    currentSalary: 50_000_000,
    futureGuaranteed: 100_000_000,
    projectedCareer: 350_000_000,
    seasons: buildSeasons(30_000_000, 3_000_000),
  },
  {
    id: 'anunoby',
    name: 'OG Anunoby',
    position: 'Forward',
    number: '8',
    initials: 'OA',
    careerEarnings: 90_000_000,
    currentSalary: 40_000_000,
    futureGuaranteed: 110_000_000,
    projectedCareer: 250_000_000,
    seasons: buildSeasons(15_000_000, 4_000_000),
  },
  {
    id: 'bridges',
    name: 'Mikal Bridges',
    position: 'Forward',
    number: '25',
    initials: 'MB',
    careerEarnings: 110_000_000,
    currentSalary: 30_000_000,
    futureGuaranteed: 130_000_000,
    projectedCareer: 280_000_000,
    seasons: buildSeasons(20_000_000, 3_000_000),
  },
  {
    id: 'hart',
    name: 'Josh Hart',
    position: 'Guard',
    number: '3',
    initials: 'JH',
    careerEarnings: 70_000_000,
    currentSalary: 20_000_000,
    futureGuaranteed: 40_000_000,
    projectedCareer: 140_000_000,
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
