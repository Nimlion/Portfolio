interface AsymmetricMatcher {
  $$typeof: Symbol
  sample?: string | RegExp | object | Array<any> | Function
}

type StyleValue = string | number | RegExp | AsymmetricMatcher | undefined

interface Options {
  media?: string
  modifier?: string
  supports?: string
}

declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: StyleValue, options?: Options): R
  }
}
