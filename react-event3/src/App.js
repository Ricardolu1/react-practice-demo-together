import React, { Component } from 'react'
import "./assets/css/app.css"
import Header from './components/Header'
import Input from './components/Input'

class App extends Component{
  constructor(){
    super()
    this.state={
      text:""
    }
  }
  getChildren(val){
    console.log(val)
  }
  submitSave(){
    alert("保存")
  }
  render(){
    return (
      <div className="App">
        <Header isShow={true} sendParent={(val)=>this.getChildren(val)}
          onClick={()=>this.submitSave()}
        />
        <Input onChange={e=>this.setState({text:e.target.value})}/><br/>
        {this.state.text }
      </div>
    )
  }
}



export default App
