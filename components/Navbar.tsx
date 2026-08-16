'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ClipboardList, BarChart3, BookOpen, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: '首頁', icon: Home },
  { href: '/abc/', label: 'ABC分析', icon: ClipboardList },
  { href: '/tracker/', label: '進度追蹤', icon: BarChart3 },
  { href: '/techniques/', label: '訓練技術', icon: BookOpen },
  { href: '/analysis/', label: '行為分析', icon: Search },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-earth-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-forest-600">
            <span className="text-xl">🐕</span>
            <span className="text-sm">狗狗行為分析</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-earth-100 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-warm-100 text-warm-700 font-medium'
                      : 'text-earth-500 hover:bg-earth-100 hover:text-earth-600'
                  )}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-earth-200 bg-warm-50">
          <div className="max-w-2xl mx-auto px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-warm-100 text-warm-700 font-medium'
                      : 'text-earth-500 hover:bg-earth-100'
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
