import { CLEAR } from "../actionTypes";

const defaultOptions = {
  only: null
}

export default function clearable(defaultState, options = defaultOptions) {
  return reducer => {
    return (state = defaultState, action) => {
      if (action.type === CLEAR) {
        if (options.only) {
          const next = { ...state }
          for (const field of options.only) {
            next[field] = defaultState[field]
          }
          return next
        } else {
          return defaultState
        }
      } else {
        return reducer(state, action)
      }
    }
  }
}