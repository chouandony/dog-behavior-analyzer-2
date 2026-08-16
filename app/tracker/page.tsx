'use client'

import { useState, useEffect, useMemo } from 'react'
import { Plus, Trash2, AlertCircle } from 'lucide-react'
import ProgressChart from '@/components/ProgressChart'

interface Record {
  id: string
  date: string
  count: number
  intensity: number
  recovery: number
  note: string
}

function getTodayString() {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function TrackerPage() {
  const [records, setRecords] = useState<Record[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ date: getTodayString(), count: 1, intensity: 3, recovery: 5, note: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('dog-behavior-tracker')
    if (saved) {
      try {
        setRecords(JSON.parse(saved))
      } catch {
        setRecords([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dog-behavior-tracker', JSON.stringify(records))
  }, [records])

  const addRecord = () => {
    setError('')
    if (!form.date) {
      setError('請選擇日期')
      return
    }
    if (form.count < 0) {
      setError('發生次數不能為負數')
      return
    }
    const newRecord: Record = {
      id: Date.now().toString(),
      date: form.date,
      count: Number(form.count),
      intensity: Number(form.intensity),
      recovery: Number(form.recovery),
      note: form.note,
    }
    setRecords(prev => [...prev, newRecord])
    setForm({ date: getTodayString(), count: 1, intensity: 3, recovery: 5, note: '' })
    setShowForm(false)
    setError('')
  }

  const deleteRecord = (id: string) => {
    setRecords(prev => prev.filter(r => r.id !== id))
  }

  const stats = useMemo(() => {
    if (records.length === 0) return null
    const avgIntensity = records.reduce((a, b) => a + b.intensity, 0) / records.length
    const avgRecovery = records.reduce((a, b) => a + b.recovery, 0) / records.length
    const totalCount = records.reduce((a, b) => a + b.count, 0)
    return { avgIntensity: avgIntensity.toFixed(1), avgRecovery: avgRecovery.toFixed(1), totalCount }
  }, [records])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-earth-500">進度追蹤</h1>
        <p className="text-sm text-earth-400 mt-1">記錄每日數據，觀察行為改善趨勢</p>
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-earth-200 p-3 text-center">
            <p className="text-xs text-earth-400">總次數</p>
            <p className="text-xl font-bold text-warm-600">{stats.totalCount}</p>
          </div>
          <div className="bg-white rounded-xl border border-earth-200 p-3 text-center">
            <p className="text-xs text-earth-400">平均強度</p>
            <p className="text-xl font-bold text-red-500">{stats.avgIntensity}</p>
          </div>
          <div className="bg-white rounded-xl border border-earth-200 p-3 text-center">
            <p className="text-xs text-earth-400">平均恢復(分)</p>
            <p className="text-xl font-bold text-forest-600">{stats.avgRecovery}</p>
          </div>
        </div>
      )}

      <ProgressChart records={records} />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-earth-500">記錄列表</h2>
          <button
            onClick={() => { setShowForm(!showForm); setError('') }}
            className="flex items-center gap-1 text-sm bg-warm-500 hover:bg-warm-600 text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            <Plus size={16} />
            新增
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl border border-earth-200 p-4 space-y-3">
            {error && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                <AlertCircle size={16} />
                {error}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-earth-400 block mb-1">日期 <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-earth-200 text-sm focus:outline-none focus:border-warm-400"
                />
              </div>
              <div>
                <label className="text-xs text-earth-400 block mb-1">發生次數</label>
                <input
                  type="number"
                  min={0}
                  value={form.count}
                  onChange={e => setForm({ ...form, count: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-earth-200 text-sm focus:outline-none focus:border-warm-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-earth-400 block mb-1">強度 (1-5)</label>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={form.intensity}
                  onChange={e => setForm({ ...form, intensity: Number(e.target.value) })}
                  className="w-full accent-warm-500"
                />
                <div className="text-center text-sm font-medium text-earth-500">{form.intensity}</div>
              </div>
              <div>
                <label className="text-xs text-earth-400 block mb-1">恢復時間(分鐘)</label>
                <input
                  type="number"
                  min={0}
                  value={form.recovery}
                  onChange={e => setForm({ ...form, recovery: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-earth-200 text-sm focus:outline-none focus:border-warm-400"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-earth-400 block mb-1">備註</label>
              <input
                type="text"
                value={form.note}
                onChange={e => setForm({ ...form, note: e.target.value })}
                placeholder="例如：遇到大型犬、下雨天人少..."
                className="w-full px-3 py-2 rounded-lg border border-earth-200 text-sm focus:outline-none focus:border-warm-400"
              />
            </div>
            <button
              onClick={addRecord}
              className="w-full bg-forest-500 hover:bg-forest-600 text-white font-bold py-2.5 rounded-lg transition-colors"
            >
              儲存記錄
            </button>
          </div>
        )}

        <div className="space-y-2">
          {records.length === 0 && <p className="text-sm text-earth-400 text-center py-8">尚無記錄</p>}
          {[...records].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(r => (
            <div key={r.id} className="bg-white rounded-xl border border-earth-200 p-3 flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-earth-500">{r.date}</p>
                <p className="text-xs text-earth-400 truncate">
                  次數: {r.count} | 強度: {r.intensity} | 恢復: {r.recovery}分
                  {r.note && ` | ${r.note}`}
                </p>
              </div>
              <button onClick={() => deleteRecord(r.id)} className="p-2 text-earth-300 hover:text-red-500 transition-colors shrink-0">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
