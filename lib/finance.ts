// Staff compensation and team revenue for Champonomics.
//
// NBA teams do not publish coach or executive pay. The only figures shown here are
// contract totals reported by major news outlets, converted to a per-season average.
// They are labelled as ESTIMATES. Everything else is shown as "Not publicly disclosed".
// Nothing in this file is invented.

export type StaffPay = {
  /** Reported per-season amount in USD, or null when not publicly disclosed. */
  amount: number | null
  /** How the figure was derived, shown to visitors. */
  basis: string
  source: { label: string; url: string } | null
}

type StaffKey = `${string}|coach` | `${string}|executive`

const jackson1999: StaffPay = {
  amount: 6_000_000,
  basis: 'Estimate: per-season average of a reported 5-year, $30 million contract (June 1999).',
  source: { label: 'CBS News / AP', url: 'https://www.cbsnews.com/news/jackson-takes-over-lakers' },
}
const jackson2008: StaffPay = {
  amount: 12_000_000,
  basis: 'Estimate: per-season average of a reported 2-year, ~$24 million extension through 2009–10.',
  source: { label: 'Associated Press (via Sun Journal)', url: 'https://www.sunjournal.com/?p=440356' },
}
const kerr2014: StaffPay = {
  amount: 5_000_000,
  basis: 'Estimate: per-season average of a reported 5-year, $25 million contract (May 2014).',
  source: {
    label: 'CBS News / AP',
    url: 'https://www.cbsnews.com/sacramento/news/warriors-kerr-complete-5-year-25m-deal',
  },
}

const STAFF: Partial<Record<StaffKey, StaffPay>> = {
  '1999–00|coach': jackson1999,
  '2000–01|coach': jackson1999,
  '2001–02|coach': jackson1999,
  '2003–04|coach': {
    amount: 5_000_000,
    basis: 'Estimate: per-season average of a reported 5-year, ~$25 million contract (June 2003).',
    source: { label: 'ESPN / AP', url: 'https://www.espn.com/nba/news/2003/0602/1561971.html' },
  },
  '2008–09|coach': jackson2008,
  '2009–10|coach': jackson2008,
  '2014–15|coach': kerr2014,
  '2016–17|coach': kerr2014,
  '2017–18|coach': kerr2014,
  '2025–26|coach': {
    amount: 10_000_000,
    basis: 'Estimate: per-season average of a reported 4-year, $40 million contract (July 2025).',
    source: { label: 'SNY report (via TalkBasket)', url: 'https://www.talkbasket.net/199552-knicks-commit-40m-to-mike-brown' },
  },
}

const NOT_DISCLOSED: StaffPay = {
  amount: null,
  basis: 'Not publicly disclosed. NBA teams do not publish coach or front-office salaries.',
  source: null,
}

export function staffPay(season: string, role: 'coach' | 'executive'): StaffPay {
  return STAFF[`${season}|${role}`] ?? NOT_DISCLOSED
}

export type Revenue = { amount: number; basis: string; source: { label: string; url: string } }

// Team revenue is only shown where a published figure was found and checked.
const REVENUE: Record<string, Revenue> = {
  '2021–22': {
    amount: 765_000_000,
    basis: 'Forbes estimate of 2021–22 team revenue (net of revenue sharing). Not an audited figure.',
    source: {
      label: 'Forbes, reported by CBS News',
      url: 'https://www.cbsnews.com/sanfrancisco/news/golden-state-warriors-most-valuable-nba-team',
    },
  },
}

export function teamRevenue(season: string): Revenue | null {
  return REVENUE[season] ?? null
}
