import { FETCH_FONTS, ADD_SUBSTITUTION, REMOVE_SUBSTITUTION, DOWNLOAD, SET_FONTNAME, SWAP_SUBSTITUTION, SAVE, LOAD } from '../../actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from '../../status'
import { KEY_FONTS } from '../../keys'
import clearable from '../clearable'

import { assembleDataUri, download } from './assembleDataUri'

const defaultState = {
  status: STATUS_PENDING,
  buffer: null,
  datauri: null,
  substitutions: [],
  fontname: 'My Custom Font'
}

export function reassembleDataUri(assembleDataUri) {
  return (reducer) => {
    return (state, action) => {
      const newstate = reducer(state, action)

      const needToRebuildDataUri = !!newstate && !!newstate.buffer && (
        !state ||
        state.buffer !== newstate.buffer ||
        state.substitutions !== newstate.substitutions ||
        state.fontname !== newstate.fontname
      )

      if (needToRebuildDataUri) {
        const { buffer, substitutions, fontname } = newstate
        return {
          ...newstate,
          ...assembleDataUri(buffer, substitutions, fontname)
        }
      }

      return newstate
    }
  }
}

const hasLocalStorage = typeof localStorage !== 'undefined'

function saveLocally(key) {
  return (reducer) => {
    if (!hasLocalStorage) {
      return reducer
    }

    return (state, action) => {
      if (!state) {
        const previous = localStorage.getItem(key)
        if (previous) {
          state = JSON.parse(previous)
        }
      }
      const newstate = reducer(state, action)
      if (newstate !== state) {
        localStorage.setItem(key, JSON.stringify(newstate))
      }
      return newstate
    }
  }
}

export const fonts = saveLocally(KEY_FONTS)(clearable(defaultState)(reassembleDataUri(assembleDataUri)((state, action) => {
  
  // loading from a saved slate
  if (typeof state === 'string') state = JSON.parse(state)

  if (action && action.type === FETCH_FONTS) {
    switch (action.status) {
      case STATUS_OK:
        return {
          ...state,
          status: STATUS_OK,
          buffer: action.buffer
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
    const { substitutions } = state
    const idx = substitutions.indexOf(action.replace)
    let newsubs
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), action.substitution, ...substitutions.slice(idx + 1)]
    } else {
      newsubs = [...substitutions, action.substitution]
    }
    return {
      ...state,
      substitutions: newsubs
    }
  }

  if (action && action.type === REMOVE_SUBSTITUTION) {
    const { substitutions } = state
    const idx = substitutions.indexOf(action.substitution)
    let newsubs = substitutions
    if (idx >= 0) {
      newsubs = [...substitutions.slice(0, idx), ...substitutions.slice(idx + 1)]
    }

    return {
      ...state,
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
    return {
      ...state,
      error,
      substitutions,
      fontname,
    }
  }

  return state
})))