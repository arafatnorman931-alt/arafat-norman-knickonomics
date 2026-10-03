import { EarningsDashboard } from '@/components/earnings-dashboard'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 md:px-8 md:py-14">
        <header className="mb-8 flex flex-col gap-3">
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
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground md:px-8">
          NBA financial data and projections are for educational purposes.
        </p>
      </footer>
    </div>
  )
}
