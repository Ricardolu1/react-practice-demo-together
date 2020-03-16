import React, { Component, lazy, Suspense,Fragment } from 'react'
import "./assets/css/app.css"

const Input = lazy(()=>import('./components/Input/Input'))
const Button = lazy(()=>import('./components/Button/Button'))

class App extends Component{
  constructor(){
    super()
    this.state={
      isShow:false
    }
  }
  del(){
    alert("删除")
  }
  showInput(){
    this.setState({isShow:!this.state.isShow})
  }
  render(){
    return (
      <div className="App">
        <form action="http://www.lucklnk.com" target="_blank">
        {
          this.state.isShow && 
          <Suspense fallback={<Fragment>加载中</Fragment>}>  
            <Input />
          </Suspense>
        }
          <Suspense fallback={<Fragment>加载中</Fragment>}>  
            <Button type="submit">
            提交
            </Button>&nbsp;&nbsp;
          </Suspense>
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
        <Button>修改</Button>&nbsp;
        <Button type="Button" onClick={()=>this.showInput()}>显示input组件</Button>
      </div>
    )
  }
}



export default App
