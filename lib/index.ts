import { MetricSiSymbol } from './metric-symbol';
import PREFIXES_CETEGORIES from './prefixes';

class MetricSiPrefixes {

  constructor() {}

  private static includesDotOrComma(str: string): boolean {
    return str.includes('.') || str.includes(',')
  }

  private static isPositivePow(str: string): boolean {
    const min = str.length - 5
    const lastFiveChar = str.slice(min, str.length)
    return lastFiveChar.includes('e+')
  }

  private static isNegativePow(str: string): boolean {
    const min = str.length - 5
    const lastFiveChar = str.slice(min, str.length)
    return lastFiveChar.includes('e-')
  }

  private static handleInteger(str: string): number {
    if (str.length >= 25) return 10 // 10²⁴
    if (str.length >= 22) return 9  // 10²¹
    if (str.length >= 19) return 8  // 10¹⁸
    if (str.length >= 16) return 7  // 10¹⁵
    if (str.length >= 13) return 6  // 10¹²
    if (str.length >= 10) return 5  // 10⁹
    if (str.length >= 7) return 4   // 10⁶
    if (str.length >= 4) return 3   // 10³
    if (str.length === 3) return 2  // 10²
    if (str.length === 2) return 1  // 10¹
    else return 0                   // 10⁰    
  }

  private static handleIntegerWithPow(str: string): number {
    const n = Number(str)
    if (n >= Math.pow(10, 24)) return 10 // 10²⁴
    if (n >= Math.pow(10, 21)) return 9  // 10²¹
    if (n >= Math.pow(10, 18)) return 8  // 10¹⁸
    if (n >= Math.pow(10, 15)) return 7  // 10¹⁵
    if (n >= Math.pow(10, 12)) return 6  // 10¹²
    if (n >= Math.pow(10, 9)) return 5   // 10⁹
    if (n >= Math.pow(10, 6)) return 4   // 10⁶
    if (n >= Math.pow(10, 3)) return 3   // 10³
    if (n >= Math.pow(10, 2)) return 2   // 10²
    if (n >= Math.pow(10, 1)) return 1   // 10¹
    else return 0                                       // 10⁰  
  }

  private static handleFloat(str: string): number { return 0 }

  private static handleFloatWithPow(str: string): number { return 0 }

  public static getPrefixCategory(str: string): string {
    if (this.isPositivePow(str)) return `i${this.handleIntegerWithPow(str)}`
    if (this.isNegativePow(str)) return `f${this.handleFloatWithPow(str)}`
    if (this.includesDotOrComma(str)) return `f${this.handleFloat(str)}`
    else return `i${this.handleInteger(str)}`
  }

  public static getPrefixeSymbol(arg: number): MetricSiSymbol {
    if (!arg) throw new Error('arg must be a number')

    const category = this.getPrefixCategory(arg.toString())
    return PREFIXES_CETEGORIES[category]
  }

}

export default MetricSiPrefixes