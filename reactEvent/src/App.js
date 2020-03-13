import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import HeaderComponent from './components/Header'
import "./assets/css/app.css"


/*eslint-disable */
class App extends Component{
  constructor(){
    super()
    console.log('constructor')
    this.state = {
      bShow:false,
      goods:[
        {id:"1",title:"潮流女装"},
        {id:"2",title:"品牌男装"},
        {id:"3",title:"手机电脑"}
      ],
      stateTitle:"更新state"
    }
  }
  UNSAFE_componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    let header = ReactDOM.findDOMNode(document.getElementById('header'))
    console.log('componentDidMount')
  }
  UNSAFE_componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps',newProps)
  }
  shouldComponentUpdate(newProps,newState){
    console.log('shouldComponentUpdate',newProps,newState)
    if (this.state.bShow===newState.bShow) {
      return false
    }else{
      return true
    }
  }
  UNSAFE_componentWillUpdate(newProps,newState){
    console.log('componentWillUpdate',newProps,newState)
  }
  componentDidUpdate(preProps,preState){
    console.log('componentDidUpdate',preProps,preState)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  changeShow(){
    this.setState({
      bShow:!this.state.bShow,
    })
  }
  changeStateTitle(){
    this.setState({
      stateTitle:"已更新state "
    },()=>{
      console.log(this.state.stateTitle)
    })
  }
  render(){
    console.log('render')
    let name = "张三"
    let content=`<span style="color:red;">你好</span>`
    return (
      <div className="App">
        <HeaderComponent title="首页" isShow={true} />         
        {name}
        <div dangerouslySetInnerHTML={{__html:content}}></div>
        <div ref="goods">潮流女装</div>
        {this.state.bShow && <div className="box"></div>}
        <button type="button" onClick={()=>this.changeShow()}>
          显示/隐藏
        </button>
        <ul>
          {
            this.state.goods.map(item=>{
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
        <button type="button" onClick={()=>this.changeStateTitle() }>{this.state.stateTitle}</button>
      </div>
    )
  }
}



export default App
