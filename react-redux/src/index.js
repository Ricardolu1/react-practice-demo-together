import React, { Fragment }from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './assets/css/common/public.css';
import RouterCompnent from './Router2.jsx';

//2、商品装车
function counterReducer(state={count:0}, action) {
  switch (action.type) {
    case 'INC':
      return {...state, ...action.payload}
      // return Object.assign({}, state, action.payload)
    case 'DEC':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

let defaultState = {
  username:localStorage['username'] ? localStorage['username'] : "",
  isLogin:localStorage['isLogin'] ? Boolean(localStorage['isLogin']) : false
}

function userReducer(state=defaultState, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action)
      localStorage['username'] = action.payload.username
      localStorage['isLogin'] = true
      console.log(action.payload.username)
      return Object.assign({}, state, action.payload)
    case "OUTLOGIN": //安全退出
      localStorage.clear()
      return Object.assign({}, state, {username:"", isLogin:false})
    default:
      return state
  }

} 

//3、存入仓库
let store = createStore(combineReducers({
  counter:counterReducer,
  user:userReducer
}))

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <RouterCompnent /> 
      </Provider>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

