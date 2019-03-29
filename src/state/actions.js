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
    opentype.load('/static/AVHersheySimplexMedium.otf', (err, font) => {
      console.log(font)
      if (err) dispatch(fetchFontError())
      else dispatch(fetchFontResult(font))
    })
  }
}

/**
 * Result of fetching the font
 * @returns {*} dispatchable event object
 */
export function fetchFontResult(font) {
  return {
    type: FETCH_FONTS,
    status: STATUS_OK,
    font
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

