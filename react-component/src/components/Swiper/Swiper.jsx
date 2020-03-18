import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './style.css'
class Swiper extends Component{
  constructor(){
    super()
    this.state = {
    }
    this.aData = []
  }
  render(){
    this.aData = this.props.data
    if (this.aData.length>0) {
      for (let i = 0; i < this.aData.length; i++) {
        if (i===0) {
          this.aData[i].active=true
        }else{
          this.aData[i].active = false
        }
      }
    }
    return (
      <div className="my-swiper-main">
        {
          this.aData&&this.aData.map((item,index)=>{
            return (
              <div className={item.actice?"slide show":"slide"} key={index}>
                <a href={item.url} rel="noopener noreferrer" target="_blank">
                  <img src={item.src} alt=""/>
                </a>
              </div>
            )
          })
        }
        <div className="pagination">
        {
          this.aData.length>0&&this.aData.map((item,index)=>{
            return (
              <div className={} key={index}></div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default Swiper