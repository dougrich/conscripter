import { FETCH_FONTS } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'

import { assembleDataUri } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: [{ replace: ['co', 'e'], glyph: {
    commands: [
      { type: 'M', x: 500, y: 300 },
      { type: 'L', x: 900, y: 300 },
      { type: 'L', x: 900, y: -100 },
      { type: 'L', x: 500, y: -100 },
      { type: 'Z' },
      { type: 'M', x: 500, y: 300 },
      { type: 'L', x: 100, y: 300 },
      { type: 'L', x: 100, y: 700 },
      { type: 'L', x: 500, y: 700 },
      { type: 'Z' }
    ],
    advanceWidth: 1000
  }}]
}


export function fonts(state = defaultState, action) {
  if (action && action.type === FETCH_FONTS) {
    switch (action.status) {
      case STATUS_OK:
        return {
          ...state,
          status: STATUS_OK,
          buffer: action.buffer,
          datauri: assembleDataUri(action.buffer, state.substitutions)
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
  return state
}