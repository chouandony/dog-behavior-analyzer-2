import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { behaviors } from '@/data/behaviors'
import { getStrategies } from '@/data/strategies'
import { techniques } from '@/data/techniques'

export const metadata: Metadata = {
  title: '🐕 狗狗追車怎麼辦？追逐行為分析與安全訓練對策',
  description: '改善狗狗追車與追逐行為，了解高驅力管理與替代出口訓練，確保狗狗與他人的安全。',
}

const behavior = behaviors.find(b => b.id === 'chasing')!
const strategies = getStrategies('chasing')

export default function Page() {
  return (
    <article className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-pink-100 p-6 shadow-soft">
        <div className="text-5xl mb-4 drop-shadow-sm">{behavior.emoji}</div>
        <h1 className="text-2xl font-black text-ink-800 mb-2">{behavior.name}</h1>
        <p className="text-ink-500 leading-relaxed font-semibold">{behavior.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {behavior.commonCauses.map(c => (
            <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-lavender-50 text-pink-600 font-extrabold border border-pink-100">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-lavender-50 rounded-3xl border-2 border-pink-100 p-5 shadow-soft">
        <h2 className="font-extrabold text-pink-700 mb-4 text-lg flex items-center gap-2">
          <Sparkles size={18} className="text-pink-500" />
          🎯 推薦訓練對策
        </h2>
        <div className="space-y-4">
          {strategies.map((s, i) => (
            <div key={i} className="bg-white/90 rounded-2xl border-2 border-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                  s.phase === '安全管理' ? 'bg-pink-100 text-pink-600' :
                  s.phase === '核心訓練' ? 'bg-mint-100 text-mint-600' :
                  'bg-lemon-100 text-lemon-700'
                }`}>
                  {s.phase}
                </span>
                <span className="font-extrabold text-ink-700 text-sm">{s.title}</span>
              </div>
              <p className="text-sm text-ink-500 mb-3 font-semibold leading-relaxed">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.techniques.map(tid => {
                  const t = techniques.find(x => x.id === tid)
                  return t ? (
                    <Link key={tid} href={`/techniques/#tech-${tid}`} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-lavender-50 border border-pink-100 text-pink-600 font-extrabold hover:border-pink-300 hover:shadow-soft transition-all hover:scale-105">
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
        <Link href="/abc/" className="flex-1 text-center py-4 rounded-2xl bg-gradient-mint text-white font-extrabold shadow-mint btn-bounce flex items-center justify-center gap-2">
          開始 ABC 分析 <ArrowRight size={18} />
        </Link>
        <Link href="/" className="flex-1 text-center py-4 rounded-2xl bg-white/80 border-2 border-pink-100 text-ink-600 font-extrabold hover:border-pink-300 transition-all">
          回首頁
        </Link>
      </div>
    </article>
  )
}
