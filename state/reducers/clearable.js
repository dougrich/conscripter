import { CLEAR } from "../actionTypes";

export default function clearable(defaultState) {
  return reducer => {
    return (state = defaultState, action) => {
      if (action.type === CLEAR) {
        return defaultState
      } else {
        return reducer(state, action)
      }
    }
  }
}