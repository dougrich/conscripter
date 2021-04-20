/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import { reassembleDataUri } from './index'

describe('reassembleDataUri', () => {
  const assemble = () => ({ reassembled: true })

  it('does not rebuild if no changes occur', () => {
    const state = { buffer: true, substitutions: [], reassembled: false }
    const reducer = state => state
    const final = reassembleDataUri(assemble)(reducer)
    const result = final(state, {})
    expect(result.reassembled).to.be.false
  })

  it('rebuilds if any substitution change occurs', () => {
    const state = { buffer: true, substitutions: [], reassembled: false }
    const reducer = () => ({ buffer: true, substitutions: [], reassembled: false })
    const final = reassembleDataUri(assemble)(reducer)
    const result = final(state, {})
    expect(result.reassembled).to.be.true
  })
})

/* eslint-enable no-unused-expressions */
