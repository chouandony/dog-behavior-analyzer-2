import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: '狗狗行為分析與訓練對策 | Dog Behavior Analyzer',
  description: '從原因判斷到訓練技術選擇的完整流程。分析狗狗不良行為的 ABC 模式，找到最適合的訓練對策，記錄進度改善成效。',
  keywords: '狗狗訓練, 行為分析, 吠叫, 咬人, 爆衝, 分離焦慮, 正向訓練, ABC分析',
  openGraph: {
    title: '狗狗行為分析與訓練對策',
    description: '從原因判斷到訓練技術選擇的完整流程',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-cream min-h-screen text-earth-500">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-6 pb-24">
          {children}
        </main>
      </body>
    </html>
  )
}
