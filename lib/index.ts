interface MetricSiSymbol {
  name: string;
  symbol: string;
}

class MetricSiPrefixes {

  constructor() {}

  public static getPrefixeSymbol(arg: number): MetricSiSymbol {
    if (!arg) throw new Error('arg must be a number')
    return { symbol: 'K', name: `${arg}` }
  }

}

export default MetricSiPrefixes