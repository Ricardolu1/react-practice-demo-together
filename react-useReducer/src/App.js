import React, { useState, useEffect, useReducer } from 'react'
import { CounterReducer, defaultState } from './hooksReducer/counterReducer'
import Counter from './components/Counter'

import ReactContext from './context'

import  "./assets/css/app.scss"

function App() {
  let [state, dispatch] = useReducer(CounterReducer, defaultState)
  // console.log('222222')
  // console.log(ReactContext)
  let { count } = state 
  return (
    <ReactContext.Provider value={{state, dispatch}}>
      <div className="app">
        计数器：{state.count}
        <button type="button"
          onClick={()=>dispatch({type:"inc",payload:{count:++count}})}
        >+</button>
        <button type="button"
          onClick={()=>dispatch({type:"dec",payload:{count:--count}})}
        >-</button>
        <Counter  />
      </div>
    </ReactContext.Provider>
  )
}



export default App
