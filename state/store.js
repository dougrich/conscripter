import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers/list'

export default function CreateStore () {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
  )
}
