import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import './style.css'
export class InputComponent extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <Fragment>
        <button className={`my-button ${this.props.className}`} 
          type={this.props.type}
          style={this.props.style}
          onClick={()=>this.props.onClick()}
        >
          {this.props.children}
        </button>
      </Fragment>
    )
  }
}
InputComponent.defaultProps = {
  type:"button",
  className:""
}

export default InputComponent


