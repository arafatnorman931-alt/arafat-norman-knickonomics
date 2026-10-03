'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { PlayerCard } from '@/components/player-card'
import { SalaryOutlook } from '@/components/salary-outlook'
import { players } from '@/lib/players'

export function EarningsDashboard() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(players[0].id)

  const normalized = query.trim().toLowerCase()
  const filtered = normalized ? players.filter((p) => p.name.toLowerCase().includes(normalized)) : players

  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full max-w-md">
        <label htmlFor="player-search" className="sr-only">
          Search Knicks players
        </label>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          id="player-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Knicks players…"
          autoComplete="off"
          className="h-11 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        />
      </div>

      <section aria-labelledby="roster-heading" className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="roster-heading" className="text-xl font-semibold tracking-tight">
            Player Contracts
          </h2>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filtered.length} of {players.length} players
          </p>
        </div>

        {filtered.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filtered.map((player) => (
              <li key={player.id}>
                <PlayerCard player={player} selected={player.id === selectedId} onSelect={setSelectedId} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            {'No players match "'}
            {query}
            {'".'}
          </div>
        )}
      </section>

      <SalaryOutlook players={players} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  )
}
