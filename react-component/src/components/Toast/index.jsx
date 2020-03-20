import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'

export default function (opts) {
  let div = document.createElement('div')
  document.body.appendChild(div)
  let toastInit = ReactDOM.render(<Toast />,div),duration = opts.duration || 2000
  toastInit.setOpts(opts.text)
  let timer =  setTimeout(() => {
    div.querySelector('.my-toast').style.animation = "hideToast .3s"
    let timer2 = setTimeout(() => {
      document.body.removeChild(div)
      //至少要在动画完成之后才能删除元素
      clearInterval(timer2)
    }, 300);
    if (opts.onClose) {
      opts.onClose()
    }
    clearInterval(timer)
  }, duration);
}