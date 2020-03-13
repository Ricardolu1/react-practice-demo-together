import React, { Component } from 'react'
import "./assets/css/app.css"


/*eslint-disable */
class App extends Component{
  constructor(){
    super()
    this.state={
      isActive:false,
      left:0,
      right:0
    }
  }
  click(val){
    alert(val)
  }
  mouseOver(){
    this.setState({isActive:true})
  }
  mouseOut(){
    this.setState({isActive:false})
  }
  mouseMove(val,e){
    // console.log(e.pageX,e.pageY,val)
  }
  touchStart(e){
    console.log(e.touches[0].pageX,e.touches[0].pageY)
  }
  touchMove(e){
    // console.log(e.touches[0].pageX,e.touches[0].pageY)
    this.setState({
      left:e.touches[0].pageX-50,
      right:e.touches[0].pageY-50,
    })
  }
  render(){
    return (
      <div className="App">
        <button type="button" onClick={()=>this.click("点击事件2")}>点击事件</button>
        <div 
          className={this.state.isActive?"box active":"box"} 
          onMouseOver={()=>this.mouseOver()}
          onMouseOut={()=>this.mouseOut()}
          onMouseMove={(e)=>this.mouseMove("move",e)}
          onTouchStart={(e)=>this.touchStart(e)}
          onTouchMove={(e)=>this.touchMove(e)}
          style={{left:`${this.state.left}px`,top:`${this.state.right}px`}}
        >
        </div>
      </div>
    )
  }
}



export default App
