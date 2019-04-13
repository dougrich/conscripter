import * as assert from 'assert'

export const defaultVariant = 'default'

export function variant(cases) {
  return (props) => {
    const { variant } = props
    const component = cases[variant || defaultVariant]
    assert(!!component, 'Undefined variant: ' + variant)
    return component(props)
  }
}