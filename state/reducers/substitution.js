import { SELECT_SUBSTITUTION, UPDATE_SUBSTITUTION, CANCEL_SUBSTITUTION } from '../actionTypes'
import clearable from './clearable'

const defaultState = {
  active: null,
  currentGlyph: null,
  currentReplace: null,
  warnings: null,
  lastAdvanceWidth: 1000
}

export const substitution = clearable(defaultState)((state, action) => {
  if (action && action.type === SELECT_SUBSTITUTION) {
    return {
      ...state,
      active: action.substitution,
      currentGlyph: {
        ...action.substitution.glyph,
        advanceWidth: action.substitution.glyph.advanceWidth || state.lastAdvanceWidth || 1000
      },
      currentReplace: action.substitution.replace[0]
    }
  }

  if (action && action.type === UPDATE_SUBSTITUTION) {
    switch (action.field) {
      case 'glyph/commands':
        return {
          ...state,
          currentGlyph: {
            ...state.currentGlyph,
            commands: action.value
          },
          warnings: action.warnings
        }
      case 'replace':
        return {
          ...state,
          currentReplace: action.value
        }
      case 'glyph/advanceWidth':
        return {
          ...state,
          currentGlyph: {
            ...state.currentGlyph,
            advanceWidth: action.value
          },
          lastAdvanceWidth: action.value
        }
      case 'glyph/diacritic':
        return {
          ...state,
          currentGlyph: {
            ...state.currentGlyph,
            isDiacritic: action.value
          }
        }
    }
  }

  if (action && action.type === CANCEL_SUBSTITUTION) {
    return {
      ...defaultState,
      lastAdvanceWidth: state.lastAdvanceWidth
    }
  }

  return state
})
