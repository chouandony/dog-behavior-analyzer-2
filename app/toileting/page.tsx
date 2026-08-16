import type { Metadata } from 'next'
import Link from 'next/link'
import { behaviors } from '@/data/behaviors'
import { getStrategies } from '@/data/strategies'
import { techniques } from '@/data/techniques'

export const metadata: Metadata = {
  title: '狗狗亂尿怎麼辦？排泄訓練與行為分析',
  description: '狗狗亂尿亂便的原因分析與正確排泄訓練方法，從醫療排查到環境管理，建立良好排泄習慣。',
}

const behavior = behaviors.find(b => b.id === 'toileting')!
const strategies = getStrategies('toileting')

export default function Page() {
  return (
    <article className="space-y-6">
      <div className="bg-white rounded-xl border border-earth-200 p-6">
        <div className="text-4xl mb-3">{behavior.emoji}</div>
        <h1 className="text-2xl font-bold text-earth-500 mb-2">{behavior.name}</h1>
        <p className="text-earth-400 leading-relaxed">{behavior.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {behavior.commonCauses.map(c => (
            <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-cream text-earth-500 border border-earth-200">{c}</span>
          ))}
        </div>
      </div>

      <div className="bg-warm-50 rounded-xl border border-warm-200 p-5">
        <h2 className="font-bold text-warm-700 mb-3">🎯 推薦訓練對策</h2>
        <div className="space-y-3">
          {strategies.map((s, i) => (
            <div key={i} className="bg-white rounded-lg border border-warm-100 p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-warm-100 text-warm-700">{s.phase}</span>
                <span className="font-bold text-earth-500 text-sm">{s.title}</span>
              </div>
              <p className="text-sm text-earth-400 mb-2">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.techniques.map(tid => {
                  const t = techniques.find(x => x.id === tid)
                  return t ? (
                    <Link key={tid} href={`/techniques/#tech-${tid}`} className="text-xs px-2 py-1 rounded bg-cream border border-earth-200 text-earth-500 hover:border-warm-400 transition-colors">
                      {t.name}
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Link href="/abc/" className="flex-1 text-center py-3 rounded-xl bg-forest-500 text-white font-bold hover:bg-forest-600 transition-colors">
          開始 ABC 分析
        </Link>
        <Link href="/" className="flex-1 text-center py-3 rounded-xl bg-white border border-earth-200 text-earth-500 font-bold hover:border-warm-300 transition-colors">
          回首頁
        </Link>
      </div>
    </article>
  )
}
