import { FETCH_FONTS, ADD_SUBSTITUTION } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'

import { assembleDataUri } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: [{
    replace: ['m'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['n'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['o'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['p'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['q'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['r'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  },{
    replace: ['s'],
    glyph: {
      advanceWidth: 1000,
      commands: [
        { type: 'M', x: 100, y: 700 },
        { type: 'L', x: 900, y: 700 },
        { type: 'L', x: 900, y: -100 },
        { type: 'L', x: 100, y: -100 },
        { type: 'Z' }
      ]
    }
  }]
}


export function fonts(state = defaultState, action) {
  if (action && action.type === FETCH_FONTS) {
    switch (action.status) {
      case STATUS_OK:
        return {
          ...state,
          status: STATUS_OK,
          buffer: action.buffer,
          ...assembleDataUri(action.buffer, state.substitutions)
        }
      case STATUS_ERROR:
        return {
          ...state,
          status: STATUS_ERROR,
          buffer: null,
          datauri: null
        }
      default:
        return {
          ...state,
          status: STATUS_PENDING,
          buffer: null,
          datauri: null
        }
    }
  }

  if (action && action.type === ADD_SUBSTITUTION) {
    const { buffer, substitutions } = state
    const newsubs = [...substitutions, action.substitution]
    return {
      ...state,
      ...assembleDataUri(buffer, newsubs),
      substitutions: newsubs
    }
  }
  return state
}