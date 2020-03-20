import React, { Component } from 'react'
import Swiper from './components/Swiper/Swiper'
import Toast from './components/Toast'
import Confirm from './components/Confirm'

import "./assets/css/app.css"

class App extends Component{
  constructor(){
    super()
    this.state={
      images:[],
      username:"",
      password:"",
      users:[
        {name:"张三"},
        {name:"李四"},
        {name:"王五"}
      ]
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
      Toast({
        text:"请输入用户名",
        duration:2000,
      })
      return
    }
    if (this.state.password.match(/^\s*$/)) {//空格 空字符串
      Toast({
        text:"请输入密码",
        duration:2000,
      })
      return
    }
  }
  del(index){
    Confirm("真的要删除吗",[
      {
        text:"cancel",
        onPress:()=>{
        }
      },
      {
        text:"sure",
        onPress:()=>{
          console.log('点击确认')
          let tmpUsers = this.state.users
          tmpUsers.splice(index,1)
          this.setState({users:tmpUsers})
        }
      }
    ])
  }
  render(){
    return (
      <div className="App">
        <div className="banner">
          {/* <Swiper data={this.state.images} /> */}
        </div>
        <input type="text" placeholder="用户名" value={this.state.username} 
          onChange={(e)=>this.setState({username:e.target.value})}
        />{this.state.username}<br/>
        <input type="password" placeholder="密码" value={this.state.password} 
           onChange={(e)=>this.setState({password:e.target.value})}
        />{this.state.password}<br />
        <button type="button" onClick={()=>this.submitLogin()}>登录</button><br/>
        <ul>
          {
            this.state.users.map((item,index)=>{
              return (
                <li key={index}>
                  {item.name}
                  <button type="button" onClick={()=>this.del(index)}>取消</button>
                </li>
                
              ) 
            })
          }
        </ul>
      </div>
    )
  }
}



export default App
