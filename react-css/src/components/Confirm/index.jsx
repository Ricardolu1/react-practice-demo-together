import React from 'react'
import ReactDOM from 'react-dom'
import Confirm from './Confirm'



export default function (msg,btns) {
  let div = document.createElement('div')
  document.body.appendChild(div)
  let confirmInit =  ReactDOM.render(<Confirm />, div)
  console.log(msg)
  confirmInit.setData(msg,btns,div)
}