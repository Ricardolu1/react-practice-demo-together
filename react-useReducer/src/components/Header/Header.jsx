import React, { Component } from 'react'
//检查数据类型
import PropTypes from 'prop-types'

import  './style.scss'

class HeaderComponent extends Component{
  changeTitle(){
    this.props.title = "首页2" //props是只读的
    console.log('')
  }
  render(){
    return (
      <div className='header-comp' style={this.props.isShow?{display:"block"}:
      {display:"none"}}>
        {this.props.title}
        {/* <button type="button" onClick={()=>this.changeTitle()}>点我</button> */}
        <button type="button" 
          onClick={this.props.sendParent &&( ()=>this.props.sendParent("我是子组件的值"))}
        >
          给父组件传值
        </button>
        <button type="button" onClick={()=>this.props.onClick()}>保存</button>
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
  title:"默认导航",
  isShow:true
}

export default HeaderComponent  