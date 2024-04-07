// 24色比色卡
const referenceColor24 = [
  {
    title: '安全范围',
    values: [
      {
        color: '#E3E4A8',
        value: 0
      },
      {
        color: '#DFE88D',
        value: 0.02
      },
      {
        color: '#C8DD7E',
        value: 0.04
      },
      {
        color: '#B5D17C',
        value: 0.06
      },
      {
        color: '#A3CE72',
        value: 0.08
      },
      {
        color: '#9ACD71',
        value: 0.081
      }
    ]
  },
  {
    title: '轻度污染',
    values: [
      {
        color: '#8EC373',
        value: 0.081
      },
      {
        color: '#79C388',
        value: 0.082
      },
      {
        color: '#65BC78',
        value: 0.084
      },
      {
        color: '#57BA7A',
        value: 0.087
      },
      {
        color: '#38B46E',
        value: 0.09
      },
      {
        color: '#0DAE6B',
        value: 0.1
      }
    ]
  },
  {
    title: '中度污染',
    values: [
      {
        color: '#08A771',
        value: 0.101
      },
      {
        color: '#159D6D',
        value: 0.12
      },
      {
        color: '#0F8F6E',
        value: 0.14
      },
      {
        color: '#14938C',
        value: 0.16
      },
      {
        color: '#10878B',
        value: 0.18
      },
      {
        color: '#0A8692',
        value: 0.2
      }
    ]
  },
  {
    title: '重度污染',
    values: [
      {
        color: '#027E8A',
        value: 0.201
      },
      {
        color: '#036F7C',
        value: 1
      },
      {
        color: '#025C65',
        value: 1.3
      },
      {
        color: '#014656',
        value: 1.4
      },
      {
        color: '#01384D',
        value: 1.7
      },
      {
        color: '#012A3E',
        value: 1.999
      }
    ]
  }
]
// 嘉维仕比色卡
const carvisColors = [
  {
    title: '安全范围',
    values: [
      {
        color: '#E1E5AA',
        value: 0
      },
      {
        color: '#DEE88F',
        value: 0.02
      },
      {
        color: '#C8DD82',
        value: 0.04
      },
      {
        color: '#B6D27E',
        value: 0.06
      },
      {
        color: '#A4CF75',
        value: 0.08
      },
      {
        color: '#9CCC76',
        value: 0.1
      }
    ]
  },
  {
    title: '轻度污染',
    values: [
      {
        color: '#91C477',
        value: 0.12
      },
      {
        color: '#7CC38B',
        value: 0.14
      },
      {
        color: '#6BBD7D',
        value: 0.16
      },
      {
        color: '#60BA7D',
        value: 0.18
      },
      {
        color: '#4CB572',
        value: 0.2
      },
      {
        color: '#0BAE6F',
        value: 0.26
      },
      {
        color: '#0AA875',
        value: 0.3
      },
      {
        color: '#0F9E71',
        value: 0.35
      },
      {
        color: '#049171',
        value: 0.4
      }
    ]
  },
  {
    title: '中度污染',
    values: [
      {
        color: '#0C958E',
        value: 0.5
      },
      {
        color: '#038A8D',
        value: 0.6
      },
      {
        color: '#058794',
        value: 0.7
      },
      {
        color: '#0F808E',
        value: 0.8
      },
      {
        color: '#05767E',
        value: 0.9
      }
    ]
  },
  {
    title: '重度污染',
    values: [
      {
        color: '#0D616B',
        value: 1.0
      },
      {
        color: '#0A4F5E',
        value: 0.2
      },
      {
        color: '#1D4255',
        value: 1.3
      },
      {
        color: '#223949',
        value: 1.4
      }
    ]
  }
]
const referenceColor30 = [
  {
    title: '安全范围',
    values: [
      {
        color: '#F3EFCC',
        value: 0.01
      },
      {
        color: '#EEEFD0',
        value: 0.02
      },
      {
        color: '#EAF1D4',
        value: 0.03
      },
      {
        color: '#DDECD9',
        value: 0.05
      },
      {
        color: '#CFE4D5',
        value: 0.1
      }
    ]
  },
  {
    title: '轻度污染',
    values: [
      {
        color: '#C5DDD0',
        value: 0.15
      },
      {
        color: '#B7D3CB',
        value: 0.2
      },
      {
        color: '#ADCDCA',
        value: 0.25
      },
      {
        color: '#B9D4CD',
        value: 0.3
      },
      {
        color: '#ADCDCA',
        value: 0.35
      },
      {
        color: '#9FC1C3',
        value: 0.4
      },
      {
        color: '#86B5BB',
        value: 0.5
      }
    ]
  },
  {
    title: '中度污染',
    values: [
      {
        color: '#8EBDC5',
        value: 0.55
      },
      {
        color: '#81B5C2',
        value: 0.6
      },
      {
        color: '#76B0BE',
        value: 0.65
      },
      {
        color: '#68AABA',
        value: 0.7
      },
      {
        color: '#56A3B7',
        value: 0.75
      },
      {
        color: '#449DB3',
        value: 0.8
      },
      {
        color: '#3399B0',
        value: 0.85
      },
      {
        color: '#2392AE',
        value: 0.9
      }
    ]
  },
  {
    title: '中度污染',
    values: [
      {
        color: '#218EAB',
        value: 0.95
      },
      {
        color: '#218BA9',
        value: 1.0
      },
      {
        color: '#2286A8',
        value: 1.05
      },
      {
        color: '#1A7CA3',
        value: 1.1
      },
      {
        color: '#1F81A4',
        value: 1.15
      },
      {
        color: '#1D80A0',
        value: 1.2
      },
      {
        color: '#187C9C',
        value: 1.25
      },
      {
        color: '#157895',
        value: 1.3
      },
      {
        color: '#127791',
        value: 1.4
      }
    ]
  }
]

export default {
  referenceColor24,
  carvisColors,
  referenceColor30
}
