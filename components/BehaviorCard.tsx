'use client'

import { cn } from '@/lib/utils'
import type { Behavior } from '@/data/behaviors'

interface Props {
  behavior: Behavior
  selected: boolean
  onToggle: () => void
}

export default function BehaviorCard({ behavior, selected, onToggle }: Props) {
  const dangerColors = {
    low: 'border-l-4 border-l-forest-400',
    medium: 'border-l-4 border-l-warm-400',
    high: 'border-l-4 border-l-red-400',
  }

  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full text-left rounded-xl border p-4 transition-all duration-200',
        'hover:shadow-md active:scale-[0.98]',
        dangerColors[behavior.dangerLevel],
        selected
          ? 'bg-warm-50 border-warm-400 shadow-sm ring-2 ring-warm-200'
          : 'bg-white border-earth-200 hover:border-warm-300'
      )}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{behavior.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-earth-500">{behavior.name}</h3>
            <div
              className={cn(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                selected
                  ? 'border-warm-500 bg-warm-500'
                  : 'border-earth-300'
              )}
            >
              {selected && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-sm text-earth-400 mt-1 leading-relaxed">{behavior.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {behavior.commonCauses.slice(0, 3).map((cause) => (
              <span
                key={cause}
                className="text-xs px-2 py-0.5 rounded-full bg-earth-100 text-earth-500"
              >
                {cause}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}
