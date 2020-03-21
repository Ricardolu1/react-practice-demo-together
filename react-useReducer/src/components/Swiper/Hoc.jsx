import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Hoc(WithComponent) {
  return class extends Component{
    //检查类型
    static propTypes = {
      data:PropTypes.array.isRequired,
    }
    //默认值
    // static defaultProps = {
    //   data:[]
    // }
    constructor(){
      super()
      this.state = {
        data:[]
      }
      this.aData = []
      this.isInit = true
      this.index = 0
      this.abb = {
        a:3,
        b:4
      }
    }
    //自动播放
    componentDidMount(){
      this.autoPlay()
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
    autoPlay(){
      this.timer = setInterval(() => {
        if (this.aData&&this.aData.length>0) {//保证aDate是有值的
          if (this.index===this.aData.length) {
            this.index=0
          }
          this.changeItem(this.index)
          ++this.index
        }
      }, 3000);
    }
    //点击切换图片
    changeItem(index){
      this.aData.forEach((item=>{
        item.active = false
      }))
      this.aData[index].active = true
      this.setState({data:this.aData})
      this.isInit = false
    }
    stop(){
      clearInterval(this.timer)
    }
    render(){
      this.aData = this.props.data
      if (this.aData && this.aData.length && this.isInit) {
        this.aData[0].active = true
      }
      return (
        <WithComponent 
          changeItem = {(index)=>this.changeItem(index)}
          stop = {()=>this.stop()}
          autoPlay = {()=>this.autoPlay()}
          {...this.props}
        ></WithComponent>
      )
    }
  }
}
export default  Hoc