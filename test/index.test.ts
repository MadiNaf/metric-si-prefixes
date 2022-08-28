import MetricSiPrefixes from '../lib';

describe('MetricSiPrefixes', () => {

  it('Symbol should be K', () => {
    const prefix = MetricSiPrefixes.getPrefixeSymbol(1000)
    expect(prefix.symbol).toEqual('K')
  })

})