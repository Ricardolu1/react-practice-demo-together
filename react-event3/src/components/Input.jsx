import React, { Component } from 'react'
import PropTypes from 'prop-types'



class InputComponent extends Component{
  render(){
    return (
      <div className="InputComponent">
        <input type="text"
          onChange={(e)=>this.props.onChange(e)}
        />
      </div>
    )
  }
}

export default InputComponent  