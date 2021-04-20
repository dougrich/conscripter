import { expect } from 'chai'
import { substitution as reducer } from './substitution'
import { SELECT_SUBSTITUTION } from '../actionTypes'

describe('substitution', () => {
  it('uses last advance width manually set if no advance width is set', () => {
    const state = reducer()
    state.lastAdvanceWidth = 592
    const substitution = {
      glyph: {
        stuff: '1234'
      },
      replace: ['a']
    }
    const updated = reducer(state, {
      type: SELECT_SUBSTITUTION,
      substitution
    })
    expect(updated.active).to.equal(substitution)
    expect(updated.currentGlyph.advanceWidth).to.equal(state.lastAdvanceWidth)
  })

  it('uses current advance width if an advance width is set', () => {
    const state = reducer()
    state.lastAdvanceWidth = 592
    const substitution = {
      glyph: {
        stuff: '1234',
        advanceWidth: 999
      },
      replace: ['a']
    }
    const updated = reducer(state, {
      type: SELECT_SUBSTITUTION,
      substitution
    })
    expect(updated.active).to.equal(substitution)
    expect(updated.currentGlyph.advanceWidth).to.equal(substitution.glyph.advanceWidth)
  })
})
