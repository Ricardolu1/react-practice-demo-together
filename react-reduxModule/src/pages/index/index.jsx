import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../../store/actions'

import Count from '../../components/counter/counter'
class Index extends Component{
  constructor(){
    super()
    this.num = 0
  }
  componentDidMount(){
  }
  incCount(){
   //1、选购商品 触发actions
  //  this.props.dispatch(actions.incCount({count:++this.num}))
   this.props.dispatch((dispatch, getState)=>{
     console.log(getState())
     dispatch(actions.incCount({count:++this.num}))
   })
  }
  decCount(){
    this.props.dispatch((dispatch, getState)=>{
      dispatch(actions.decCount({count:--this.num}))
    })
  }
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/news">新闻页面</Link></li>
          <li><Link to="/goods">商品页面</Link></li>
          <li><Link to={"/login"}>会员登录</Link></li>
          <li><Link to={"/user"}>会员中心</Link></li>
        </ul>
        <Count></Count>
        计数器：
        <button type="button"
          onClick={this.incCount.bind(this)}
        >+</button>{this.props.state.counter.count}
        <button type="button"
          onClick={this.decCount.bind(this)}
        >-</button>
      </div>
    )
  }
}


export default connect((state)=>{
  return {
    state
  }
})(Index)