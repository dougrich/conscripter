import fetch from 'isomorphic-unfetch'
import * as opentype from 'opentype.js'
import * as PathParser from './reducers/fonts/parsePath'
import MultipleError from '../multiple-error'
import encoder from './encoders'


import {
  FETCH_FONTS,
  ADD_SUBSTITUTION,
  SELECT_SUBSTITUTION,
  UPDATE_SUBSTITUTION,
  CANCEL_SUBSTITUTION,
  REMOVE_SUBSTITUTION,
  DOWNLOAD,
  SET_FONTNAME,
  SWAP_SUBSTITUTION,
  SAVE,
  LOAD,
  CLEAR
} from './actionTypes'

import {
  STATUS_OK,
  STATUS_ERROR
} from './status'
import slugify from 'slugify';

/**
 * Fetches and parses the base font
 * @returns {*} dispatchable event object
 */
export function fetchFonts() {
  return dispatch => {
    dispatch({ type: FETCH_FONTS })
    return fetch(BASE_LINK + '/static/AVHersheySimplexMedium.otf')
      .then(response => {
        if (response.status !== 200) {
          dispatch(fetchFontError())
          throw new Error('Non 200 response')
        } else {
          return response.arrayBuffer()
        }
      })
      .then(buffer => {
        dispatch(fetchFontResult(buffer))
      })
  }
}

/**
 * Result of fetching the font
 * @returns {*} dispatchable event object
 */
export function fetchFontResult(buffer) {
  return {
    type: FETCH_FONTS,
    status: STATUS_OK,
    buffer
  }
}

/**
 * Result of fetching the font when an error occurs
 * @returns {*} dispatchable event object
 */
export function fetchFontError() {
  return {
    type: FETCH_FONTS,
    status: STATUS_ERROR
  }
}

export function updateSubstitutionGlyph(meta,svg) {
  const parser = new PathParser(meta)
  const { commands, warnings } = parser.parse(svg)
  return {
    type: UPDATE_SUBSTITUTION,
    field: 'glyph/commands',
    warnings,
    value: parser.simplify(commands)
  }
}

export function updateSubstitutionReplace(value) {
  return {
    type: UPDATE_SUBSTITUTION,
    field: 'replace',
    value
  }
}

export function updateSubstitutionAdvanceWidth(value) {
  return {
    type: UPDATE_SUBSTITUTION,
    field: 'glyph/advanceWidth',
    value
  }
}

export function updateSubstitutionDiacritic(value) {
  return {
    type: UPDATE_SUBSTITUTION,
    field: 'glyph/diacritic',
    value
  }
}

export function removeSubstitution({ active }) {
  return dispatch => {
    dispatch({
      type: REMOVE_SUBSTITUTION,
      substitution: active
    })
    dispatch(cancelSubstitution())
  }
}

export function cancelSubstitution() {
  return { type: CANCEL_SUBSTITUTION }
}

export function submitSubstitution({ active, currentGlyph, currentReplace }) {
  return dispatch => {
    dispatch({
      type: ADD_SUBSTITUTION,
      substitution: {
        replace: [currentReplace],
        glyph: currentGlyph
      },
      replace: active
    })
    dispatch(cancelSubstitution())
  }
}

export function selectSubstitution(substitution) {
  return {
    type: SELECT_SUBSTITUTION,
    substitution: substitution || {
      replace: [''],
      glyph: {
        commands: []
      }
    }
  }
}

export function download() {
  return { type: DOWNLOAD }
}

export function setFontName(value) {
  return {
    type: SET_FONTNAME,
    value
  }
}

export function swapSubstitution(a, b) {
  return {
    type: SWAP_SUBSTITUTION,
    a,
    b
  }
}

export function save(state) {
  const data = encoder.MSGPACK.encode(state)
  const blob = new Blob([data])
  const url = window.URL.createObjectURL(blob)
  const container = document.createElement('a')
  container.setAttribute('style', 'display: none;')
  container.setAttribute('href', url)
  container.setAttribute('download', slugify(state.fonts.fontname || 'conscripter-custom-font') + '.cwk')
  document.body.appendChild(container)
  container.click()
  setTimeout(() => {
    window.URL.revokeObjectURL(url)
    document.body.removeChild(container)
  }, 1000)
  return {
    type: SAVE
  }
}

export function load() {
  return dispatch => {
    const loader = document.createElement('input')
    loader.setAttribute('type', 'file')
    loader.onchange = e => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        try {
          let data = { substitutions: [], fontname: 'My Custom Font' }
          if (file.name.endsWith('.json')) {
            data = encoder.JSON.decode(Buffer.from(reader.result).toString('utf8'))
          } else {
            data = encoder.MSGPACK.decode(Buffer.from(reader.result))
          }
          dispatch({
            type: LOAD,
            error: null,
            ...data
          })
        } catch (e) {
          dispatch({
            type: LOAD,
            error: new Error('Unable to parse selected file: did it come from Conscripter?'),
            substitutions: [],
            fontname: 'My Custom Font'
          })
        }
      }
      reader.readAsArrayBuffer(file)
    }
    loader.click()
  }
}

export function clear() {
  return {
    type: CLEAR
  }
}