import { FETCH_FONTS } from './actionTypes'
import { STATUS_PENDING, STATUS_OK, STATUS_ERROR } from './status'

const defaultState = {
  status: STATUS_PENDING,
  font: null
}

export function fonts(state = defaultState, action) {
  if (action && action.type === FETCH_FONTS) {
    switch (action.status) {
      case STATUS_OK:
        return {
          ...state,
          status: STATUS_OK,
          font: action.font
        }
      case STATUS_ERROR:
        return {
          ...state,
          status: STATUS_ERROR,
          font: null
        }
      default:
        return {
          ...state,
          status: STATUS_PENDING,
          font: null
        }
    }
  }
  return state
}