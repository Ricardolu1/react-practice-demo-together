import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Toast extends Component{
  constructor(){
    super()
    this.state = {
      text:""
    }
  }
  setOpts(text){
    this.setState({text})
  }
  render(){
    return (
      <div className="my-toast">
        {this.state.text}
      </div>
    )
  }
}



export default Toast