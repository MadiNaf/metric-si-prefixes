import MetricSiPrefixes from '../lib';

describe('=== INT MetricSiPrefixes Classic === ', () => {
  // --------------------- TEST CATEGORY PREFIX ---------------------
  it('Should return i3', () => {
    const category = MetricSiPrefixes.getPrefixCategory('1000')
    expect(category).toEqual('i3')
  })

  // --------------------- TEST EMPTY PREFIX ---------------------
  it('Symbol should be empty', () => {
    const nb = 1
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('')
    expect(prefix.symbolName).toEqual('')
  })

  // --------------------- TEST PREFIX da ---------------------
  it('Symbol should be deca', () => {
    const nb = 10
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('da')
    expect(prefix.symbolName).toEqual('deca')
  })
  it('Symbol should be deca : e+1', () => {
    const nb = 7.2e+1
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('da')
    expect(prefix.symbolName).toEqual('deca')
  })

  // --------------------- TEST PREFIX h---------------------
  it('Symbol should be hecto', () => {
    const nb = 100
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('h')
    expect(prefix.symbolName).toEqual('hecto')
  })

  it('Symbol should be hecto : e+2', () => {
    const nb = 1.2e+2
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('h')
    expect(prefix.symbolName).toEqual('hecto')
  })

  // --------------------- TEST PREFIX k ---------------------
  it('Symbol should be kilo', () => {
    const nb = 1000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('k')
    expect(prefix.symbolName).toEqual('kilo')
  })
  it('Symbol should be kilo : e+3', () => {
    const nb = 9.76e+3
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('k')
    expect(prefix.symbolName).toEqual('kilo')
  })
  it('Symbol should be kilo : e+4', () => {
    const nb = 9.76e+4
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('k')
    expect(prefix.symbolName).toEqual('kilo')
  })
  it('Symbol should be kilo : e+5', () => {
    const nb = 9.76e+5
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('k')
    expect(prefix.symbolName).toEqual('kilo')
  })

  // --------------------- TEST PREFIX M ---------------------
  it('Symbol should be mega', () => {
    const nb = 1000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('M')
    expect(prefix.symbolName).toEqual('mega')
  })
  it('Symbol should be mega : e+6', () => {
    const nb = 9.76e+6
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('M')
    expect(prefix.symbolName).toEqual('mega')
  })
  it('Symbol should be mega : e+8', () => {
    const nb = 9.76e+8
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('M')
    expect(prefix.symbolName).toEqual('mega')
  })

  // --------------------- TEST PREFIX G ---------------------
  it('Symbol should be giga', () => {
    const nb = 1000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('G')
    expect(prefix.symbolName).toEqual('giga')
  })
  it('Symbol should be giga : e+9', () => {
    const nb = 9.76e+9
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('G')
    expect(prefix.symbolName).toEqual('giga')
  })
  it('Symbol should be giga : e+11', () => {
    const nb = 9.76e+11
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('G')
    expect(prefix.symbolName).toEqual('giga')
  })

  // --------------------- TEST PREFIX T ---------------------
  it('Symbol should be tera', () => {
    const nb = 1000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('T')
    expect(prefix.symbolName).toEqual('tera')
  })
  it('Symbol should be tera : e+12', () => {
    const nb = 9.76e+12
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('T')
    expect(prefix.symbolName).toEqual('tera')
  })
  it('Symbol should be tera : e+14', () => {
    const nb = 9.76e+14
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('T')
    expect(prefix.symbolName).toEqual('tera')
  })

  // --------------------- TEST PREFIX P ---------------------
  it('Symbol should be peta', () => {
    const nb = 1000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('P')
    expect(prefix.symbolName).toEqual('peta')
  })
  it('Symbol should be peta : e+15', () => {
    const nb = 9.76e+15
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('P')
    expect(prefix.symbolName).toEqual('peta')
  })
  it('Symbol should be peta : e+17', () => {
    const nb = 9.76e+17
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('P')
    expect(prefix.symbolName).toEqual('peta')
  })

  // --------------------- TEST PREFIX E ---------------------
  it('Symbol should be exa', () => {
    const nb = 1000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('E')
    expect(prefix.symbolName).toEqual('exa')
  })
  it('Symbol should be exa : e+18', () => {
    const nb = 9.76e+18
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('E')
    expect(prefix.symbolName).toEqual('exa')
  })
  it('Symbol should be exa : e+20 ', () => {
    const nb = 9.76e+20
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('E')
    expect(prefix.symbolName).toEqual('exa')
  })

  // --------------------- TEST PREFIX Z ---------------------
  it('Symbol should be zetta', () => {
    const nb = 1000000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Z')
    expect(prefix.symbolName).toEqual('zetta')
  })
  it('Symbol should be zetta : e+21', () => {
    const nb = 9.76e+21
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Z')
    expect(prefix.symbolName).toEqual('zetta')
  })
  it('Symbol should be zetta : e+23', () => {
    const nb = 9.76e+23
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Z')
    expect(prefix.symbolName).toEqual('zetta')
  })

  // --------------------- TEST PREFIX Y ---------------------
  it('Symbol should be yotta', () => {
    const nb = 1000000000000000000000000
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Y')
    expect(prefix.symbolName).toEqual('yotta')
  })
  it('Symbol should be yotta', () => {
    const nb = 9.76e+24
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Y')
    expect(prefix.symbolName).toEqual('yotta')
  })
  it('Symbol should be mega', () => {
    const nb = 9.76e+30
    const prefix = MetricSiPrefixes.getPrefixeSymbol(nb)
    expect(prefix.symbol).toEqual('Y')
    expect(prefix.symbolName).toEqual('yotta')
  })
})