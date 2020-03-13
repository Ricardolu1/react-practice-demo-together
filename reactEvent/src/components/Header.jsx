import React, { Component } from 'react'
//检查数据类型
import PropTypes from 'prop-types'


class HeaderComponent extends Component{
  changeTitle(){
    this.props.title = "首页2" //props是只读的
    console.log('')
  }
  render(){
    return (
      <div id="header" style={this.props.isShow?{display:"block"}:
      {display:"none"}}>
        <button type="button" onClick={()=>this.changeTitle()}>点我</button>
        {this.props.title}
      </div>
    )
  }
}
//检查属性值的类型
HeaderComponent.propTypes={
  title:PropTypes.string.isRequired,
  isShow:PropTypes.bool.isRequired,
}
//默认属性值
HeaderComponent.defaultProps={
  title:123123
}

export default HeaderComponent  