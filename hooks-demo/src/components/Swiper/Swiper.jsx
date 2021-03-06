import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Hoc from './Hoc2'

import './style.scss'

const Swiper = (props)=>{
  return (
    <div className="my-swiper-main"
      onMouseEnter={props.stop}
      onMouseLeave={props.autoPlay}
    >
      {
        props.data&&props.data.map((item,index)=>{
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
        (props.data&&props.data.length)&&props.data.map((item,index)=>{
          return (
            <div className={item.active?"dot active":"dot"} key={index}
              onClick={()=>props.changeItem(index)}
            ></div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Hoc(Swiper)




