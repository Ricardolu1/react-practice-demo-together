import React, { Component } from 'react'

function Hoc(WithComponent) {
  return class  extends Component{
    render(){
      return (
        <WithComponent>

        </WithComponent>
      )
    }
  }
  
  
}
export default  Hoc