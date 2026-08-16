export interface StrategyStep {
  phase: '安全管理' | '核心訓練' | '日常管理'
  title: string
  description: string
  techniques: number[] // technique IDs
  priority: 'required' | 'recommended' | 'optional'
}

export interface BehaviorStrategy {
  behaviorId: string
  defaultStrategies: StrategyStep[]
  byFunction: Record<string, StrategyStep[]>
}

export const behaviorStrategies: BehaviorStrategy[] = [
  {
    behaviorId: 'barking',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '降低觸發與環境管理',
        description: '先減少吠叫的練習機會，避免行為越練越強。',
        techniques: [1, 25],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '找出功能並建立替代行為',
        description: '透過 ABC 分析找出吠叫功能，教導更適當的溝通方式。',
        techniques: [7, 8, 11, 16, 23],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '情緒調節與環境豐富化',
        description: '降低整體焦慮與無聊，從源頭減少吠叫動機。',
        techniques: [13, 14, 26, 33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      attention: [
        { phase: '安全管理', title: '移除關注獎勵', description: '確定吠叫功能為求關注後，全家一致執行消弱。', techniques: [11, 12], priority: 'required' },
        { phase: '核心訓練', title: '教導安靜替代行為', description: '教導「坐下看主人」或「去墊子」來取得關注。', techniques: [7, 8, 25], priority: 'required' },
        { phase: '日常管理', title: '預防性關注', description: '在狗狗安靜時主動給予關注，減少牠用吠叫求關注的需求。', techniques: [5, 33], priority: 'recommended' },
      ],
      escape: [
        { phase: '安全管理', title: '拉開距離', description: '讓狗狗遠離害怕的刺激，建立安全感。', techniques: [1, 17], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與反制約', description: '從低強度開始，讓刺激與好事連結。', techniques: [13, 14, 15, 16], priority: 'required' },
        { phase: '日常管理', title: '放鬆與 BAT', description: '建立冷靜行為獲得距離的連結。', techniques: [19, 26], priority: 'recommended' },
      ],
      'self-reinforce': [
        { phase: '安全管理', title: '阻斷視覺與聽覺刺激', description: '遮蔽窗戶、管理環境，減少觸發。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: 'LAT 與替代活動', description: '教導看到刺激後回頭看主人，並提供合法出口。', techniques: [16, 34], priority: 'required' },
        { phase: '日常管理', title: '環境豐富化', description: '提供更多合法的感官刺激出口。', techniques: [33], priority: 'recommended' },
      ],
      anxiety: [
        { phase: '安全管理', title: '安全空間', description: '建立讓狗狗感到安全的區域。', techniques: [1, 25], priority: 'required' },
        { phase: '核心訓練', title: '放鬆訓練與減敏感', description: '教導自我調節能力，逐步面對焦慮源。', techniques: [13, 14, 26], priority: 'required' },
        { phase: '日常管理', title: '壓力管理', description: '檢視壓力堆疊，給予充分恢復時間。', techniques: [33], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'biting',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '立即安全防護',
        description: '咬人行為具有高度危險性，必須先確保人犬安全。',
        techniques: [1, 28, 35],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '醫療排查與功能分析',
        description: '排除疼痛與疾病，找出攻擊的功能（恐懼？守護？挫折？）。',
        techniques: [13, 14, 19, 29],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '專業協助與長期計畫',
        description: '攻擊行為建議尋求獸醫行為醫學或合格行為專業人員協助。',
        techniques: [27, 33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      escape: [
        { phase: '安全管理', title: '給予空間與選擇權', description: '恐懼性攻擊需要距離管理，絕對不可懲罰。', techniques: [1, 17, 28], priority: 'required' },
        { phase: '核心訓練', title: '減敏感與 BAT', description: '從極遠距離開始，讓狗狗知道冷靜可以獲得距離。', techniques: [13, 14, 19], priority: 'required' },
        { phase: '日常管理', title: '信任重建', description: '透過合作照護與預測性互動重建信任。', techniques: [27], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '資源管理', description: '管理高價值資源，避免守護情境發生。', techniques: [1, 29], priority: 'required' },
        { phase: '核心訓練', title: '交換遊戲與反制約', description: '教導「人靠近 = 更好的東西出現」。', techniques: [29, 14], priority: 'required' },
        { phase: '日常管理', title: '預防練習', description: '在日常中練習「放開」與「交換」。', techniques: [3, 7], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'pulling',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '裝備檢查與環境管理',
        description: '使用合適的裝備（胸背帶、雙點牽繩），避開高刺激環境。',
        techniques: [1, 22],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '鬆繩增強與 LAT',
        description: '教導「鬆繩 = 前進」，並建立對環境刺激的冷靜反應。',
        techniques: [16, 20, 22, 23],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '衝動控制與需求滿足',
        description: '增加衝動控制練習，確保狗狗有足夠的嗅聞與探索機會。',
        techniques: [21, 33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '距離管理', description: '與移動刺激保持安全距離，避免追逐被強化。', techniques: [1, 17], priority: 'required' },
        { phase: '核心訓練', title: '替代出口與 LAT', description: '提供合法的追逐遊戲，並教導看到刺激後回頭。', techniques: [16, 34], priority: 'required' },
        { phase: '日常管理', title: '驅力管理', description: '透過運動與遊戲滿足追逐驅力。', techniques: [33, 34], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '減少誘惑', description: '避開強烈氣味或獵物區域。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: 'Premack 原則', description: '「先鬆繩 → 再前進去聞」。', techniques: [20, 22], priority: 'required' },
        { phase: '日常管理', title: '嗅聞滿足', description: '在散步中安排足夠的嗅聞時間。', techniques: [33], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'toileting',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '醫療排查與環境管理',
        description: '先排除泌尿系統疾病，限制活動範圍預防失誤。',
        techniques: [1, 30],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '規律排泄與正增強',
        description: '建立固定時間帶出，成功立即獎勵。',
        techniques: [3, 5, 30],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '徹底清潔與壓力管理',
        description: '使用酵素清潔劑去除氣味，檢視是否有焦慮或標記因素。',
        techniques: [1, 33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '安全區域', description: '建立讓狗狗感到安全的排泄區域。', techniques: [1, 25], priority: 'required' },
        { phase: '核心訓練', title: '減敏感', description: '對引發焦慮的線索進行減敏感。', techniques: [13, 14], priority: 'required' },
        { phase: '日常管理', title: '壓力源移除', description: '找出並減少環境中的壓力源。', techniques: [33], priority: 'recommended' },
      ],
      control: [
        { phase: '安全管理', title: '管理標記區域', description: '限制進入標記區域，使用圍欄。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: '建立新習慣', description: '在新的固定地點建立排泄習慣。', techniques: [3, 30], priority: 'required' },
        { phase: '日常管理', title: '絕育考量', description: '與獸醫討論絕育對標記行為的影響。', techniques: [], priority: 'optional' },
      ],
    },
  },
  {
    behaviorId: 'destructive',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '環境管理與限制',
        description: '收好貴重物品，使用圍欄限制活動範圍，提供合法啃咬物。',
        techniques: [1, 33],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '教導合法出口與衝動控制',
        description: '教導「可以咬什麼」與「什麼時候可以咬」。',
        techniques: [7, 8, 21],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '環境豐富化與運動',
        description: '確保狗狗有足夠的身心活動，減少無聊與精力過剩。',
        techniques: [33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '獨處管理', description: '縮短獨處時間，使用攝影機監控。', techniques: [1, 25], priority: 'required' },
        { phase: '核心訓練', title: '分離訓練', description: '漸進式獨處訓練，從極短時間開始。', techniques: [13, 14], priority: 'required' },
        { phase: '日常管理', title: '離家線索減敏感', description: '讓拿鑰匙、穿外套等動作不再預告離開。', techniques: [13], priority: 'recommended' },
      ],
      'self-reinforce': [
        { phase: '安全管理', title: '移除誘惑', description: '收好所有可能被啃咬的物品。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: '合法啃咬訓練', description: '教導並獎勵使用啃咬玩具。', techniques: [3, 7, 33], priority: 'required' },
        { phase: '日常管理', title: '豐富化計畫', description: '每日提供多種類型的環境豐富化。', techniques: [33], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'separation',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '醫療與焦慮評估',
        description: '先排除醫療因素，評估焦慮嚴重程度，必要時藥物輔助。',
        techniques: [1, 25],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '離家線索減敏感與獨處梯度',
        description: '讓離家前兆不再預告分離，從極短獨處時間開始逐步延長。',
        techniques: [13, 14, 26],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '安全區與豐富化',
        description: '建立讓狗狗感到安全的獨處空間，提供益智玩具分散注意力。',
        techniques: [25, 33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      anxiety: [
        { phase: '安全管理', title: '縮短獨處時間', description: '找寵物保母、日托，或暫時調整作息。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: '漸進式獨處', description: '從 1 秒鐘開始，逐步延長。', techniques: [13, 14], priority: 'required' },
        { phase: '日常管理', title: '放鬆訓練', description: '教導狗狗在獨處時自我安撫。', techniques: [26], priority: 'recommended' },
      ],
      attention: [
        { phase: '安全管理', title: '預防性互動', description: '在離家前給予充分的正向互動。', techniques: [33], priority: 'required' },
        { phase: '核心訓練', title: '獨立活動增強', description: '獎勵狗狗自己安靜待著的時刻。', techniques: [5, 9], priority: 'required' },
        { phase: '日常管理', title: '減少離家戲劇化', description: '離家與回家時保持低調，不過度互動。', techniques: [], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'overexcitement',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '降低刺激與環境管理',
        description: '減少引發過度興奮的情境，給予冷靜的空間。',
        techniques: [1, 25],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '衝動控制與替代行為',
        description: '教導「冷靜才能獲得想要的東西」，建立替代行為。',
        techniques: [7, 8, 20, 21, 26],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '規律運動與豐富化',
        description: '確保身心需求被滿足，但避免過度刺激的運動。',
        techniques: [33],
        priority: 'recommended',
      },
    ],
    byFunction: {
      attention: [
        { phase: '安全管理', title: '移除興奮獎勵', description: '撲人時完全轉身不理，不給任何回應。', techniques: [12], priority: 'required' },
        { phase: '核心訓練', title: '坐下替代撲人', description: '教導「坐下 = 人會理我」。', techniques: [7, 8], priority: 'required' },
        { phase: '日常管理', title: '預防性獎勵冷靜', description: '在狗狗自然冷靜時主動獎勵。', techniques: [5], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '管理資源取得', description: '不讓狗狗因興奮就自動獲得想要的東西。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: 'Premack 原則', description: '「先冷靜 → 再玩」。', techniques: [20, 21], priority: 'required' },
        { phase: '日常管理', title: '固定作息', description: '建立可預測的日常生活節奏。', techniques: [33], priority: 'recommended' },
      ],
    },
  },
  {
    behaviorId: 'chasing',
    defaultStrategies: [
      {
        phase: '安全管理',
        title: '距離管理與裝備',
        description: '與移動刺激保持安全距離，使用雙牽繩或胸背帶防止掙脫。',
        techniques: [1, 17, 22],
        priority: 'required',
      },
      {
        phase: '核心訓練',
        title: '召回、LAT 與替代出口',
        description: '建立強大的召回，教導看到移動目標後回頭看主人，提供合法追逐遊戲。',
        techniques: [16, 20, 23, 24, 34],
        priority: 'required',
      },
      {
        phase: '日常管理',
        title: '驅力管理與豐富化',
        description: '透過運動與遊戲滿足追逐驅力，但選擇安全的替代活動。',
        techniques: [33, 34],
        priority: 'recommended',
      },
    ],
    byFunction: {
      'self-reinforce': [
        { phase: '安全管理', title: '絕對避免追逐發生', description: '一旦追逐成功，行為會被極度強化。', techniques: [1, 17], priority: 'required' },
        { phase: '核心訓練', title: '建立「看我就有好事」', description: 'LAT 訓練，讓移動刺激成為看主人的線索。', techniques: [16, 20], priority: 'required' },
        { phase: '日常管理', title: '合法追逐出口', description: '飛盤、拔河、嗅聞追蹤等安全替代活動。', techniques: [33, 34], priority: 'recommended' },
      ],
      tangible: [
        { phase: '安全管理', title: '避開高風險區域', description: '選擇車少、人少的路線散步。', techniques: [1], priority: 'required' },
        { phase: '核心訓練', title: '鬆繩與 Premack', description: '「先鬆繩冷靜 → 再前進」。', techniques: [20, 22], priority: 'required' },
        { phase: '日常管理', title: '運動量調整', description: '確保狗狗有足夠的體能消耗。', techniques: [33], priority: 'recommended' },
      ],
    },
  },
]

export function getStrategies(behaviorId: string, functionId?: string): StrategyStep[] {
  const behavior = behaviorStrategies.find(b => b.behaviorId === behaviorId)
  if (!behavior) return []

  if (functionId && behavior.byFunction[functionId]) {
    return behavior.byFunction[functionId]
  }

  return behavior.defaultStrategies
}
