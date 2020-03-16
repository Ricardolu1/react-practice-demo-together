import React, { Component } from 'react'
import Button from './components/Button/Button'
import "./assets/css/app.css"
class App extends Component{
  constructor(){
    super()
    this.state={
    }
  }
  del(){
    alert("删除")
  }
  render(){
    return (
      <div className="App">
        <form action="http://www.lucklnk.com" target="_blank">
          <input type="text"/>
          <Button type="submit">
            提交
          </Button>&nbsp;&nbsp;
          <Button type="reset">
            重置
          </Button>
        </form>
        <Button className="btn-bg"
          style={{width:"100px",height:"50px",fontSize:"20px",color:"#f00"}}
          onClick={()=>this.del()}
        >
          删除
        </Button><br/><br/>
        <Button>修改</Button>
      </div>
    )
  }
}



export default App
