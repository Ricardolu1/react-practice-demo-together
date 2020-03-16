import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'



class InputComponent extends Component{
  render(){
    return (
      <Fragment>
        <input type="text"
          onChange={(e)=>this.props.onChange(e)}
        />
      </Fragment>
    )
  }
}

export default InputComponent  