import { ChampionsDashboard } from '@/components/champions-dashboard'

const highlights = [
  { value: '30', label: 'Championship seasons' },
  { value: 'Salaries', label: 'Player & staff pay' },
  { value: '2026 $', label: 'BLS CPI-adjusted' },
  { value: 'Attendance', label: 'Arena attendance' },
]

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <nav aria-label="Primary" className="border-b border-border/60 bg-background/30 backdrop-blur">
        <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="/" className="flex min-h-11 items-center text-base font-semibold tracking-tight text-foreground">
            Arafat Analytics
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#about"
              className="hidden min-h-11 items-center rounded-full px-4 text-sm font-medium text-foreground/80 hover:text-foreground sm:inline-flex"
            >
              About
            </a>
            <span
              aria-current="page"
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--team-accent)] px-4 text-sm font-medium text-foreground transition-colors duration-500"
            >
              Champonomics
            </span>
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-8 md:py-14">
        <header className="mb-8 flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground/90">
            <span className="text-[var(--team-accent)] transition-colors duration-500">Champonomics</span>
            <span aria-hidden="true"> — </span>
            The Finances Behind Every NBA Champion
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            NBA Champions Payroll Dashboard
          </h1>
          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Pick any of the last 30 championship seasons to see the title team&apos;s roster, each player&apos;s
            salary, total payroll, staff earnings and arena attendance, all shown in original and 2026 dollars.
          </p>
        </header>

        {/* About This Project: placed directly beneath the title so recruiters see it first */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="mb-10 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/70 shadow-lg backdrop-blur"
        >
          <div
            className="h-1 transition-colors duration-500"
            style={{ background: 'linear-gradient(90deg, var(--team-primary), var(--team-secondary))' }}
          />
          <div className="grid gap-6 p-5 md:grid-cols-[1.4fr_1fr] md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--team-accent)] transition-colors duration-500">
                About this project
              </p>
              <h2 id="about-heading" className="mt-2 text-xl font-semibold md:text-2xl">
                Champonomics by Arafat Analytics
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-slate-200 md:text-lg">
                Developed and published a website displaying financial data for NBA championship teams, including
                player salaries, team earnings, and arena attendance.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Built with Next.js, TypeScript, Tailwind CSS and Recharts, and deployed on Vercel. Figures are sourced
                from Basketball-Reference, HoopsHype, Spotrac, Forbes, major news outlets and the U.S. Bureau of Labor
                Statistics, and missing data is never estimated.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 self-center">
              {highlights.map((h) => (
                <li key={h.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-bold">{h.value}</p>
                  <p className="text-xs text-slate-400">{h.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ChampionsDashboard />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-8">
          <p>
            <span className="font-medium text-foreground">Champonomics</span> by Arafat Analytics
          </p>
          <p>
            Data: Basketball-Reference, HoopsHype, Spotrac, Forbes, BLS CPI-U. For educational purposes. Not
            affiliated with the NBA or any team.
          </p>
        </div>
      </footer>
    </div>
  )
}
