export interface Behavior {
  id: string
  name: string
  emoji: string
  description: string
  metaTitle: string
  metaDescription: string
  commonCauses: string[]
  dangerLevel: 'low' | 'medium' | 'high'
}

export const behaviors: Behavior[] = [
  {
    id: 'barking',
    name: '過度吠叫',
    emoji: '🔊',
    description: '對陌生人、聲音或其他刺激反應過度吠叫，影響生活品質。',
    metaTitle: '狗狗吠叫怎麼辦？完整行為分析與訓練對策',
    metaDescription: '狗狗過度吠叫的原因分析與專業訓練對策，從ABC行為分析到具體訓練步驟，幫助您改善狗狗吠叫問題。',
    commonCauses: ['陌生人靠近', '門鈴聲響', '分離焦慮', '尋求關注', '環境刺激'],
    dangerLevel: 'low',
  },
  {
    id: 'biting',
    name: '咬人／攻擊',
    emoji: '⚠️',
    description: '對人或其他動物展現攻擊行為，包含低吼、露齒、咬傷。',
    metaTitle: '狗狗咬人怎麼辦？攻擊行為分析與安全訓練對策',
    metaDescription: '狗狗攻擊與咬人行為的專業分析，從安全評估到行為改造，提供完整的訓練對策與管理方案。',
    commonCauses: ['恐懼防禦', '疼痛不適', '資源守護', '過去創傷', '社會化不足'],
    dangerLevel: 'high',
  },
  {
    id: 'pulling',
    name: '爆衝／拉扯',
    emoji: '🏃',
    description: '散步時過度拉扯牽繩，追逐移動目標，難以控制。',
    metaTitle: '狗狗散步爆衝怎麼辦？鬆繩訓練與行為對策',
    metaDescription: '改善狗狗散步爆衝與拉扯行為，學習鬆繩行走技巧，讓散步成為愉快的互動時光。',
    commonCauses: ['過度興奮', '追逐本能', '缺乏練習', '環境刺激', '需求未滿足'],
    dangerLevel: 'medium',
  },
  {
    id: 'toileting',
    name: '亂尿亂便',
    emoji: '💧',
    description: '在錯誤地點排泄，或標記行為過度，影響居家環境。',
    metaTitle: '狗狗亂尿怎麼辦？排泄訓練與行為分析',
    metaDescription: '狗狗亂尿亂便的原因分析與正確排泄訓練方法，從醫療排查到環境管理，建立良好排泄習慣。',
    commonCauses: ['醫療問題', '標記行為', '焦慮壓力', '訓練不足', '環境變化'],
    dangerLevel: 'low',
  },
  {
    id: 'destructive',
    name: '拆家／破壞',
    emoji: '🪑',
    description: '啃咬家具、挖牆、翻垃圾桶等破壞性行為。',
    metaTitle: '狗狗拆家怎麼辦？破壞行為分析與環境豐富化對策',
    metaDescription: '改善狗狗拆家與破壞行為，了解背後原因並提供環境豐富化與訓練對策，保護您的居家環境。',
    commonCauses: ['無聊精力', '分離焦慮', '換牙不適', '探索本能', '缺乏啃咬物'],
    dangerLevel: 'medium',
  },
  {
    id: 'separation',
    name: '分離焦慮',
    emoji: '💔',
    description: '獨處時過度焦慮，表現為嚎叫、破壞、排泄異常。',
    metaTitle: '狗狗分離焦慮怎麼辦？完整分析與漸進式訓練對策',
    metaDescription: '狗狗分離焦慮的專業分析與漸進式獨處訓練，幫助狗狗建立獨處安全感，改善焦慮行為。',
    commonCauses: ['過度依賴', '創傷經驗', '生活變動', '品種傾向', '早期社會化不足'],
    dangerLevel: 'medium',
  },
  {
    id: 'overexcitement',
    name: '過度興奮',
    emoji: '🤩',
    description: '難以冷靜，見人撲跳、無法控制情緒，影響互動品質。',
    metaTitle: '狗狗過度興奮怎麼辦？衝動控制與冷靜訓練對策',
    metaDescription: '改善狗狗過度興奮與衝動行為，學習衝動控制遊戲與冷靜訓練技巧，建立更好的互動模式。',
    commonCauses: ['精力過剩', '關注取得', '缺乏界限', '遺傳氣質', '環境刺激'],
    dangerLevel: 'low',
  },
  {
    id: 'chasing',
    name: '追車／追逐',
    emoji: '🚗',
    description: '追逐車輛、腳踏車、跑者或動物，具有高度危險性。',
    metaTitle: '狗狗追車怎麼辦？追逐行為分析與安全訓練對策',
    metaDescription: '改善狗狗追車與追逐行為，了解高驅力管理與替代出口訓練，確保狗狗與他人的安全。',
    commonCauses: ['追逐本能', '移動刺激', '挫折累積', '品種驅力', '缺乏替代活動'],
    dangerLevel: 'high',
  },
]
