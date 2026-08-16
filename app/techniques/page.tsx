'use client'

import { useState } from 'react'
import { techniques, categories } from '@/data/techniques'
import TechniqueCard from '@/components/TechniqueCard'

export default function TechniquesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('全部')

  const filtered = activeCategory === '全部'
    ? techniques
    : techniques.filter(t => t.category === activeCategory)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-earth-500">35個訓練技術總彙</h1>
        <p className="text-sm text-earth-400 mt-1">點擊任一技能查看詳細解說與操作方式</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-warm-500 text-white' : 'bg-white border border-earth-200 text-earth-500 hover:border-warm-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(tech => (
          <div key={tech.id} id={`tech-${tech.id}`}>
            <TechniqueCard technique={tech} />
          </div>
        ))}
      </div>
    </div>
  )
}
