interface MetricSiSymbol {
  name: string;
  symbol: string;
}

class MetricSiPrefixes {

  constructor() {}

  public static getPrefixeSymbol(arg: number): MetricSiSymbol {
    return { symbol: 'K', name: `${arg}` }
  }

}

export default MetricSiPrefixes