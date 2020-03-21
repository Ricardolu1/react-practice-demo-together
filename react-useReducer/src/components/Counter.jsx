import React, { useContext } from 'react'
import ReactContext from '../context'

function Counter() {
  let counterContext = useContext(ReactContext)
  let { 
    state:{
      count
    }, 
    dispatch 
  } = counterContext
  console.log(counterContext)
  return (
    <div>
      子组件计数器:{count}
      <button type="button"
        onClick={()=>dispatch({type:"inc",payload:{count:++count}})}
      >+</button>
      <button type="button"
        onClick={()=>dispatch({type:"dec",payload:{count:--count}})}
      >-</button>
    </div>
  )
}

export default Counter