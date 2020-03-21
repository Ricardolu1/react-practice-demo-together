import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './style.scss'

class Swiper extends Component{
  constructor(){
    super()
    this.state = {
      data:[]
    }
    this.aData = []
    this.isInit = true
    this.index = 0
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
    console.log('111')
    clearInterval(this.timer)
  }
  render(){
    this.aData = this.props.data
    if (this.aData&&this.aData.length>0&&this.isInit) {
      this.aData[0].active = true
    }
    return (
      <div className="my-swiper-main" onMouseEnter={()=>this.stop()} onMouseLeave={()=>this.autoPlay()}>
        {
          this.aData&&this.aData.map((item,index)=>{
            return (
              <div className={item.active?"slide show":"slide"} key={index}>
                <a href={item.url} rel="noopener noreferrer" target="_blank">
                  <img src={item.src} alt=""/>
                </a>
              </div>
            )
          })
        }
        <div className="pagination">
        {
          (this.aData&&this.aData.length>0)&&this.aData.map((item,index)=>{
            return (
              <div className={item.active?"dot active":"dot"} key={index}
                onClick={()=>this.changeItem(index)}
              ></div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

Swiper.propTypes = {
  data:PropTypes.array.isRequired,
}


export default Swiper