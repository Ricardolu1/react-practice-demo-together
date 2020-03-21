import React, { useState, useEffect } from 'react'

import  "./assets/css/app.scss"

function App() {
  const [title,setTitle] = useState("首页")
  const changeBtn = ()=>{
    setTitle("hooks",()=>{
      console.log('111')
      console.log(title)
    })
    console.log(title)
  }
  useEffect(() => {
    console.log(title)
    document.title = title
    return ()=>{
      
    }
  },[title])
  return (
    <div className="app">
      {title} 
      <button type="button"
        onClick={changeBtn}
      >改变title</button>
    </div>
  )
}



export default App
