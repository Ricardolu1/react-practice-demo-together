import React, { Component } from 'react'
import "./assets/css/app.css"


/*eslint-disable */
class App extends Component{
  constructor(){
    super()
    this.state={
      isActive:false,
      left:0,
      right:150,
      amount:1
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
    this.setState({isActive:false})
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
  touchEnd(){
    this.setState({isActive:true})
  }
  changeAmount(e){
    console.log(e.target.value)
    let amount = e.target.value.replace(/[^\d]/g,'')
    if (amount==='' || amount==='0') {
      amount=1
    }
    this.setState({amount})
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
          onTouchEnd={(e)=>this.touchEnd()}
          style={{left:`${this.state.left}px`,top:`${this.state.right}px`}}
        >
        </div>
        <div>
          <input 
            type="text" value={this.state.amount} 
            onChange={(e)=>this.changeAmount(e)}
          />
          <div>数量值{this.state.amount}</div>
        </div>
      </div>
    )
  }
}



export default App
