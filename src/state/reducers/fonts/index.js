import { FETCH_FONTS, ADD_SUBSTITUTION, REMOVE_SUBSTITUTION, DOWNLOAD } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'

import { assembleDataUri, download } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: []
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

  if (action && action.type === DOWNLOAD) {
    const { buffer, substitutions } = state
    download(buffer, substitutions)
    return state
  }

  return state
}