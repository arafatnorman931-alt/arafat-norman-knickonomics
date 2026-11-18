// Consumer Price Index for All Urban Consumers (CPI-U), U.S. city average,
// all items, not seasonally adjusted, 1982–84 = 100.
// Source: U.S. Bureau of Labor Statistics (https://www.bls.gov/cpi/).
//
// Annual averages 1997–2025 are the BLS published annual averages.
// BLS did not collect October 2025 data (2025 lapse in appropriations), so the
// 2025 annual average is the BLS average of the 11 available months.

export const CPI_ANNUAL: Record<number, number> = {
  1997: 160.5, 1998: 163.0, 1999: 166.6, 2000: 172.2, 2001: 177.1,
  2002: 179.9, 2003: 184.0, 2004: 188.9, 2005: 195.3, 2006: 201.6,
  2007: 207.342, 2008: 215.303, 2009: 214.537, 2010: 218.056, 2011: 224.939,
  2012: 229.594, 2013: 232.957, 2014: 236.736, 2015: 237.017, 2016: 240.007,
  2017: 245.12, 2018: 251.107, 2019: 255.657, 2020: 258.811, 2021: 270.97,
  2022: 292.655, 2023: 304.702, 2024: 313.689, 2025: 321.943,
}

// 2026 monthly CPI-U (Jan–Oct 2026, the latest BLS release as of Nov 2026).
export const CPI_2026_MONTHLY = [
  325.252, 326.785, 330.213, 333.02, 335.123,
  333.952, 333.918, 334.98, 336.94, 337.511,
]

export const CPI_2026_LATEST_MONTH = 'October 2026'

/**
 * Provisional 2026 reference value: average of the 2026 months published so far.
 * BLS has not published a full-year 2026 average yet, so this will change slightly
 * when November and December data are released.
 */
export const CPI_2026 =
  Math.round((CPI_2026_MONTHLY.reduce((a, b) => a + b, 0) / CPI_2026_MONTHLY.length) * 1000) / 1000

export const CPI_SOURCE_URL = 'https://www.bls.gov/cpi/'

/** CPI value used for a calendar year (2026 uses the provisional year-to-date average). */
export function cpiFor(year: number): number | null {
  if (year === 2026) return CPI_2026
  return CPI_ANNUAL[year] ?? null
}

/** Multiplier that converts dollars from `year` into 2026 dollars. */
export function inflationFactor(year: number): number {
  const base = cpiFor(year)
  return base ? CPI_2026 / base : 1
}

export function to2026(amount: number, year: number): number {
  return amount * inflationFactor(year)
}
