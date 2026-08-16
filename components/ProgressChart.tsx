'use client'

import { useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface Record {
  date: string
  count: number
  intensity: number
  recovery: number
}

interface Props {
  records: Record[]
}

export default function ProgressChart({ records }: Props) {
  const data = useMemo(() => {
    return [...records]
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((r) => ({
        ...r,
        displayDate: new Date(r.date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' }),
      }))
  }, [records])

  if (records.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-earth-200 p-8 text-center">
        <p className="text-earth-400">尚無資料，請先新增記錄</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-earth-200 p-4">
      <h3 className="font-bold text-earth-500 mb-4">趨勢圖表</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E0D0" />
            <XAxis
              dataKey="displayDate"
              tick={{ fontSize: 12, fill: '#8B7D6B' }}
              axisLine={{ stroke: '#D4C9B0' }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#8B7D6B' }}
              axisLine={{ stroke: '#D4C9B0' }}
              domain={[0, 'auto']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFBF5',
                border: '1px solid #D4C9B0',
                borderRadius: '12px',
                fontSize: '13px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line
              type="monotone"
              dataKey="count"
              name="發生次數"
              stroke="#E86A33"
              strokeWidth={2}
              dot={{ fill: '#E86A33', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="intensity"
              name="強度 (1-5)"
              stroke="#2D5A3D"
              strokeWidth={2}
              dot={{ fill: '#2D5A3D', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="recovery"
              name="恢復時間(分)"
              stroke="#A89880"
              strokeWidth={2}
              dot={{ fill: '#A89880', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
