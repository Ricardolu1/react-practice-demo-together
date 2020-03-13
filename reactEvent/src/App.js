import React, { Component } from 'react'
import "./assets/css/app.css"


/*eslint-disable */
class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }
  click(a,b,c,d){
    console.log(a,b,c,d)
  }
 
  render(){
    return (
      <div className="App">
        <button type="button" onClick={(e)=>this.click(1,2,4,e)}>点击事件</button>
        {/* <button type="button" onClick={this.click}>点击事件2</button> */}
      </div>
    )
  }
}



export default App
