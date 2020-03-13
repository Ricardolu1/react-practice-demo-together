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
    this.startX = 0
    this.startY = 0
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
    // console.log(e.touches[0].pageX,e.touches[0].pageY)
    this.startX = e.touches[0].pageX-this.state.left
    this.startY = e.touches[0].pageY-this.state.right
  }
  touchMove(e){
    // console.log(e.touches[0].pageX,e.touches[0].pageY)
    console.log(e.touches[0].pageX-this.startX,e.touches[0].pageY-this.startY)
    this.setState({
      left:e.touches[0].pageX-this.startX,
      right:e.touches[0].pageY-this.startY,
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
