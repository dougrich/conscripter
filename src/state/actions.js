import fetch from 'isomorphic-unfetch'
import * as opentype from 'opentype.js'


import {
  FETCH_FONTS
} from './actionTypes'

import {
  STATUS_OK,
  STATUS_ERROR
} from './status'

/**
 * Fetches and parses the base font
 * @returns {*} dispatchable event object
 */
export function fetchFonts() {
  return dispatch => {
    dispatch({ type: FETCH_FONTS })
    return fetch('/static/AVHersheySimplexMedium.otf')
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

