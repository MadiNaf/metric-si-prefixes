export interface scaleName {
  en: string
  fr: string
}

export interface MetricSiSymbol {
  symbol: string
  symbolName: string
  scaleName: scaleName
  factor: string
}

export interface PrefixCategory {
  [key: string]: MetricSiSymbol
}
