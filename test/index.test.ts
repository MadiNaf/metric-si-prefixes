import MetricSiPrefixes from '../lib';

describe('MetricSiPrefixes', () => {

  it('Should return i3', () => {
    const category = MetricSiPrefixes.getPrefixCategory('1000')
    expect(category).toEqual('i3')
  })
  // it('Should return f - with dot', () => {
  //   const category = MetricSiPrefixes.getPrefixCategory('0,234')
  //   expect(category).toEqual('f')
  // })
  // it('Should return f - with comma', () => {
  //   const category = MetricSiPrefixes.getPrefixCategory('0.222')
  //   expect(category).toEqual('f')
  // })


  it('Symbol should be yotta', () => {
    const nb = 1000000000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Y')
    expect(prefix.symbolName).toEqual('yotta')
  })
  it('Symbol should be zetta', () => {
    const nb = 1000000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Z')
    expect(prefix.symbolName).toEqual('zetta')
  })
  it('Symbol should be exa', () => {
    const nb = 1000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('E')
    expect(prefix.symbolName).toEqual('exa')
  })
  it('Symbol should be peta', () => {
    const nb = 1000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('P')
    expect(prefix.symbolName).toEqual('peta')
  })
  it('Symbol should be tera', () => {
    const nb = 1000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('T')
    expect(prefix.symbolName).toEqual('tera')
  })
  it('Symbol should be giga', () => {
    const nb = 1000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('G')
    expect(prefix.symbolName).toEqual('giga')
  })
  it('Symbol should be mega', () => {
    const nb = 1000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('M')
    expect(prefix.symbolName).toEqual('mega')
  })
  it('Symbol should be kilo', () => {
    const nb = 1000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('k')
    expect(prefix.symbolName).toEqual('kilo')
  })
  it('Symbol should be hecto', () => {
    const nb = 100
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('h')
    expect(prefix.symbolName).toEqual('hecto')
  })

  it('Symbol should be deca', () => {
    const nb = 10
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('da')
    expect(prefix.symbolName).toEqual('deca')
  })
  it('Symbol should be empty', () => {
    const nb = 1
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('')
    expect(prefix.symbolName).toEqual('')
  })


})