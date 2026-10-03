import { cn } from '@/lib/utils'
import { CURRENT_SEASON, formatCurrency, type Player } from '@/lib/players'

type PlayerCardProps = {
  player: Player
  selected: boolean
  onSelect: (id: string) => void
}

export function PlayerCard({ player, selected, onSelect }: PlayerCardProps) {
  const stats = [
    { label: 'Career Earnings', value: player.careerEarnings },
    { label: `${CURRENT_SEASON} Salary`, value: player.currentSalary, highlight: true },
    { label: 'Future Guaranteed', value: player.futureGuaranteed },
    { label: 'Projected Career', value: player.projectedCareer },
  ]

  return (
    <button
      type="button"
      onClick={() => onSelect(player.id)}
      aria-pressed={selected}
      className={cn(
        'group flex w-full flex-col gap-5 rounded-xl border bg-card p-5 text-left transition-colors',
        'hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        selected ? 'border-primary ring-1 ring-primary' : 'border-border',
      )}
    >
      <div className="flex items-center gap-3">
        <div
          aria-hidden="true"
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold',
            selected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground',
          )}
        >
          {player.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-balance text-base font-semibold leading-tight">{player.name}</h3>
          <p className="text-sm text-muted-foreground">
            {player.position} · #{player.number}
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="text-xs leading-snug text-muted-foreground">{stat.label}</dt>
            <dd
              className={cn(
                'font-mono text-2xl font-semibold tracking-tight tabular-nums',
                stat.highlight && 'text-primary',
              )}
            >
              {formatCurrency(stat.value)}
            </dd>
          </div>
        ))}
      </dl>
    </button>
  )
}
