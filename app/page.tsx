import { EarningsDashboard } from '@/components/earnings-dashboard'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <nav aria-label="Primary" className="border-b border-border/60 bg-background/30 backdrop-blur">
        <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a
            href="/"
            className="flex min-h-11 items-center text-base font-semibold tracking-tight text-foreground"
          >
            Arafat Analytics
          </a>
          <span
            aria-current="page"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground"
          >
            Champonomics
          </span>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-8 md:py-14">
        <header className="mb-8 flex flex-col gap-3">
          <p className="text-sm font-medium text-foreground/90">
            <span className="text-primary">Champonomics</span>
            <span aria-hidden="true"> — </span>
            The Finances Behind Every NBA Champion
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">New York Knicks</span>
            <span aria-hidden="true">/</span>
            <span>2026–27 Season</span>
            <span className="ml-1 rounded-full border border-border px-2 py-0.5 normal-case tracking-normal">
              Placeholder data
            </span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Knicks Player Earnings Dashboard
          </h1>
          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Explore player contracts, career earnings, and future earning projections.
          </p>
        </header>

        <EarningsDashboard />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-8">
          <p>
            <span className="font-medium text-foreground">Champonomics</span> by Arafat Analytics
          </p>
          <p>NBA financial data and projections are for educational purposes.</p>
        </div>
      </footer>
    </div>
  )
}
