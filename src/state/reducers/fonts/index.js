import { FETCH_FONTS, ADD_SUBSTITUTION, REMOVE_SUBSTITUTION } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'

import { assembleDataUri } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: []/*[{
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
  }]*/
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
    const idx = substitutions.indexOf(action.replace)
    let newsubs
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), action.substitution, ...substitutions.slice(idx + 1)]
    } else {
      newsubs = [...substitutions, action.substitution]
    }
    return {
      ...state,
      ...assembleDataUri(buffer, newsubs),
      substitutions: newsubs
    }
  }

  if (action && action.type === REMOVE_SUBSTITUTION) {
    const { buffer, substitutions } = state
    const idx = substitutions.indexOf(action.substitution)
    let newsubs = substitutions
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), ...substitutions.slice(idx + 1)]
    }

    return {
      ...state,
      ...assembleDataUri(buffer, newsubs),
      substitutions: newsubs
    }
  }
  return state
}