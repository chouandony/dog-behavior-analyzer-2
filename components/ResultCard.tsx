'use client'

import { useState } from 'react'
import { ChevronDown, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StrategyStep } from '@/data/strategies'
import { techniques } from '@/data/techniques'

interface Props {
  step: StrategyStep
  index: number
}

const phaseColors = {
  '安全管理': 'bg-red-50 border-red-200 text-red-700',
  '核心訓練': 'bg-warm-50 border-warm-200 text-warm-700',
  '日常管理': 'bg-forest-50 border-forest-200 text-forest-700',
}

const priorityIcons = {
  required: <AlertCircle size={16} className="text-red-500" />,
  recommended: <CheckCircle2 size={16} className="text-warm-500" />,
  optional: <HelpCircle size={16} className="text-earth-400" />,
}

const priorityLabels = {
  required: '必要',
  recommended: '建議',
  optional: '選用',
}

export default function ResultCard({ step, index }: Props) {
  const [expanded, setExpanded] = useState(index === 0)
  const stepTechniques = techniques.filter(t => step.techniques.includes(t.id))

  return (
    <div className={cn('rounded-xl border overflow-hidden', phaseColors[step.phase].split(' ')[1])}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          'w-full flex items-center justify-between p-4 text-left transition-colors',
          phaseColors[step.phase]
        )}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/80 text-sm font-bold shrink-0">
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/60">
                {step.phase}
              </span>
              <span className="flex items-center gap-1 text-xs">
                {priorityIcons[step.priority]}
                <span>{priorityLabels[step.priority]}</span>
              </span>
            </div>
            <h3 className="font-bold mt-0.5">{step.title}</h3>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={cn('transition-transform shrink-0', expanded && 'rotate-180')}
        />
      </button>

      {expanded && (
        <div className="p-4 bg-white">
          <p className="text-earth-500 text-sm leading-relaxed mb-4">{step.description}</p>

          {stepTechniques.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-earth-400 uppercase tracking-wider">推薦技術</p>
              <div className="flex flex-wrap gap-2">
                {stepTechniques.map((tech) => (
                  <span
                    key={tech.id}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-cream border border-earth-200 text-earth-500"
                  >
                    <span className="text-xs">{tech.id}.</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
