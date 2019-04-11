import { FETCH_FONTS, ADD_SUBSTITUTION, REMOVE_SUBSTITUTION, DOWNLOAD, SET_FONTNAME, SWAP_SUBSTITUTION, SAVE, LOAD } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'

import { assembleDataUri, download } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: [],
  fontname: 'My Custom Font'
}

export function fonts(state = defaultState, action) {
  if (action && action.type === FETCH_FONTS) {
    switch (action.status) {
      case STATUS_OK:
        return {
          ...state,
          status: STATUS_OK,
          buffer: action.buffer,
          ...assembleDataUri(action.buffer, state.substitutions, state.fontname)
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
    const { fontname, buffer, substitutions } = state
    const idx = substitutions.indexOf(action.replace)
    let newsubs
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), action.substitution, ...substitutions.slice(idx + 1)]
    } else {
      newsubs = [...substitutions, action.substitution]
    }
    return {
      ...state,
      ...assembleDataUri(buffer, newsubs, fontname),
      substitutions: newsubs
    }
  }

  if (action && action.type === REMOVE_SUBSTITUTION) {
    const { fontname, buffer, substitutions } = state
    const idx = substitutions.indexOf(action.substitution)
    let newsubs = substitutions
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), ...substitutions.slice(idx + 1)]
    }

    return {
      ...state,
      ...assembleDataUri(buffer, newsubs, fontname),
      substitutions: newsubs
    }
  }

  if (action && action.type === DOWNLOAD) {
    const { buffer, substitutions, fontname } = state
    download(buffer, substitutions, fontname)
    return state
  }

  if (action && action.type === SET_FONTNAME) {
    return {
      ...state,
      fontname: action.value
    }
  }

  if (action && action.type === SWAP_SUBSTITUTION) {
    const { substitutions } = state
    const newsubs = substitutions.slice()
    const a = newsubs[action.a]
    const b = newsubs[action.b]
    newsubs[action.a] = b
    newsubs[action.b] = a
    return {
      ...state,
      substitutions: newsubs
    }
  }

  if (action && action.type === LOAD) {
    const { substitutions, fontname, error } = action
    const { buffer } = state
    return {
      ...state,
      ...assembleDataUri(buffer, substitutions, fontname),
      error,
      substitutions,
      fontname,
    }
  }

  return state
}