import React, { Component } from 'react'
import PropTypes from 'prop-types'

import c from './style.scss'

class Confirm extends Component{
  constructor(){
    super()
    this.state = {
      msg:"",
      btns:[],
    }
    this.div = {}
  }
  setData(msg,btns,div){
    this.setState({
      msg,
      btns,
    })
    this.div = div
  }
  clickBtn(index){
    if (this.state.btns[index].onPress) {
      this.state.btns[index].onPress()
    }
    document.body.removeChild(this.div)
  }
  render(){
    return (
      <div className={c["my-confirm-mask"]}>
        <div className="confirm">
          <div className="message">{this.state.msg}</div>
          <div className="handle">
          {
            this.state.btns.length>0 && this.state.btns.map((item,index)=>{
              return (
                <button type="button" className="button" key={index} 
                  onClick={()=>this.clickBtn(index)}
                >{item.text}</button>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}


export default Confirm