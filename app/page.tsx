'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ClipboardList, BookOpen, Search, BarChart3 } from 'lucide-react'
import { behaviors } from '@/data/behaviors'
import BehaviorCard from '@/components/BehaviorCard'

export default function HomePage() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleBehavior = useCallback((id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }, [])

  const queryString = selected.length > 0 ? `?behaviors=${selected.join(',')}` : ''

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 py-4">
        <h1 className="text-2xl font-bold text-earth-500">🐕 狗狗行為分析</h1>
        <p className="text-sm text-earth-400">選擇您想了解的問題行為，開始 ABC 分析與對策規劃</p>
      </div>

      <div className="grid gap-3">
        {behaviors.map(b => (
          <BehaviorCard
            key={b.id}
            behavior={b}
            selected={selected.includes(b.id)}
            onToggle={() => toggleBehavior(b.id)}
          />
        ))}
      </div>

      {selected.length > 0 && (
        <div className="fixed bottom-6 left-0 right-0 px-4 z-40">
          <div className="max-w-2xl mx-auto">
            <Link
              href={`/abc/${queryString}`}
              className="flex items-center justify-center gap-2 w-full bg-warm-500 hover:bg-warm-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors active:scale-[0.98]"
            >
              <span>開始分析 ({selected.length})</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 pt-4">
        <Link href="/techniques/" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-warm-300 hover:shadow-sm transition-all">
          <BookOpen size={24} className="text-warm-500" />
          <span className="text-sm font-medium text-earth-500">35個訓練技術</span>
        </Link>
        <Link href="/analysis/" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-warm-300 hover:shadow-sm transition-all">
          <Search size={24} className="text-forest-500" />
          <span className="text-sm font-medium text-earth-500">ABC與九大成因</span>
        </Link>
        <Link href="/tracker/" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-warm-300 hover:shadow-sm transition-all">
          <BarChart3 size={24} className="text-blue-500" />
          <span className="text-sm font-medium text-earth-500">進度追蹤</span>
        </Link>
        <Link href="/abc/" className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-earth-200 hover:border-warm-300 hover:shadow-sm transition-all">
          <ClipboardList size={24} className="text-purple-500" />
          <span className="text-sm font-medium text-earth-500">直接分析</span>
        </Link>
      </div>
    </div>
  )
}
