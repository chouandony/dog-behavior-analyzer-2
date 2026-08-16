'use client'

import { useState } from 'react'
import { abcFunctions, nineCauses } from '@/data/analysis'
import AnalysisCard from '@/components/AnalysisCard'

export default function AnalysisPage() {
  const [tab, setTab] = useState<'abc' | 'causes'>('abc')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-earth-500">行為分析工具</h1>
        <p className="text-sm text-earth-400 mt-1">用 ABC 找出行為功能，用九大成因層次完整檢視</p>
      </div>

      <div className="flex rounded-xl bg-white border border-earth-200 p-1">
        <button
          onClick={() => setTab('abc')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${tab === 'abc' ? 'bg-warm-500 text-white' : 'text-earth-500 hover:bg-earth-100'}`}
        >
          ABC 行為功能
        </button>
        <button
          onClick={() => setTab('causes')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${tab === 'causes' ? 'bg-forest-500 text-white' : 'text-earth-500 hover:bg-earth-100'}`}
        >
          九大成因
        </button>
      </div>

      {tab === 'abc' && (
        <div className="space-y-3">
          <div className="bg-warm-50 rounded-xl border border-warm-200 p-4">
            <h2 className="font-bold text-warm-700 mb-1">ABC 分析核心</h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              A（Antecedent）前事：行為發生前出現了什麼？<br/>
              B（Behavior）行為：狗狗具體做了什麼？<br/>
              C（Consequence）後果：行為發生後，狗狗得到了什麼、逃離了什麼？
            </p>
          </div>
          {abcFunctions.map(fn => (
            <AnalysisCard key={fn.id} item={fn} type="abc" />
          ))}
        </div>
      )}

      {tab === 'causes' && (
        <div className="space-y-3">
          <div className="bg-forest-50 rounded-xl border border-forest-200 p-4">
            <h2 className="font-bold text-forest-700 mb-1">九大成因層次檢查</h2>
            <p className="text-sm text-forest-600 leading-relaxed">
              狗狗行為通常不是單一原因，而是多層因素疊加。如果你只找到一個原因，通常代表分析還不夠完整。
            </p>
          </div>
          {nineCauses.map(cause => (
            <AnalysisCard key={cause.id} item={cause} type="cause" />
          ))}
        </div>
      )}
    </div>
  )
}
