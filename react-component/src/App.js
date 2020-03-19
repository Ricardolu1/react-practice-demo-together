import React, { Component } from 'react'
import Swiper from './components/Swiper/Swiper'
import Toast from './components/Toast/Toast'


import "./assets/css/app.css"

class App extends Component{
  constructor(){
    super()
    this.state={
      images:[],
      username:"",
      password:""
    }
  }
  componentDidMount(){
    let images = [
      {src:require('./assets/images/banner1.jpg'),url:'https://yao.tmall.com/?spm=875.7931836/B.2016004.6.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561829993617_2429983'},
      {src:require('./assets/images/banner2.jpg'),url:'https://miao.tmall.com/?spm=875.7931836/B.2016004.5.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561818451146_2429983'},
      {src:require('./assets/images/banner3.jpg'),url:'https://3c.tmall.com/?spm=875.7931836/B.2016004.4.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_2429983'}
    ]
    this.setState({images})
  }
  submitLogin(){
    if (this.state.username.match(/^\s*$/)) {//空格 空字符串
      alert("请输入用户名")
      return
    }
  }
  render(){
    return (
      <div className="App">
        <div className="banner">
          {/* <Swiper data={this.state.images} /> */}
        </div>
        <Toast></Toast>
        <input type="text" placeholder="用户名" value={this.state.username} 
          onChange={(e)=>this.setState({username:e.target.value})}
        />{this.state.username}<br/>
        <input type="password" placeholder="密码" value={this.state.password} 
           onChange={(e)=>this.setState({password:e.target.value})}
        />{this.state.password}<br />
        <button type="button" onClick={()=>this.submitLogin()}>登录</button>
      </div>
    )
  }
}



export default App
