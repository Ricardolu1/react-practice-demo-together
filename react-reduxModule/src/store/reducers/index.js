import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer  from './counter'
import userReducer from './user'
import thunk from 'redux-thunk'

let store = createStore(combineReducers({
  counter:counterReducer,
  user:userReducer
}),applyMiddleware(thunk))

export default store



