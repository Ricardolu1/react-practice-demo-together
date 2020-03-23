import React, { useState, useEffect, useRef, useCallback } from 'react'

import PropTypes from 'prop-types'


function Hoc(WithComponent) {
  function HocComponent(props) {  
    let [data,setData] = useState([]) 
    //创建一个标识，同用的容器，可以很好的解决setInterval的为题
    const timer = useRef(null)
    const myIndex = useRef(0)
    const didMount = useRef(false)
    const isInit = useRef(true)
    // console.log(timer)

    const changeItem = useCallback((index)=>{
      data.forEach((item=>{
        item.active = false
      }))
      data[index].active = true
      myIndex.current = index
      setData([...data])
    },[data])

    const autoPlay = useCallback(()=>{
      // if (timer.current) {  
      //   clearInterval(timer.current)
      //   timer.current = null
      // }
      let tmpIndex = myIndex.current
      timer.current = setInterval(() => {
        if (data&&data.length) { 
          if (tmpIndex>=data.length-1) {
            tmpIndex = -1
          }
          tmpIndex++
          changeItem(tmpIndex)
        }
      }, 1000);
    },[changeItem, data])

    const stop = ()=>{
      clearInterval(timer.current)
    }

    
    useEffect(() => {
      if (props.data && props.data.length && isInit.current) {
        isInit.current = false
        props.data[0].active = true
        didMount.current = true
        setData(props.data)
      }
      autoPlay()
      return () => {
        clearInterval(timer.current)
      }
    }, [props.data, autoPlay])

    // useEffect(() => {
    //   if (didMount.current) {
    //     autoPlay()
    //     didMount.current = false
    //   }
    //   if (props.data && props.data.length && isInit.current) {
    //     isInit.current = false
    //     props.data[0].active = true
    //     didMount.current = true
    //     setData(props.data)
    //   }
    // })
    useEffect(() => {
      return ()=>{
        clearInterval(timer.current)
      }
    },[])// 相当于willUnMount


    let newProps = {
      data,
      changeItem,
      autoPlay,
      stop
    }

    return (
      <WithComponent 
        {...newProps}
      ></WithComponent>
    )
  }
  HocComponent.propTypes ={
    data:PropTypes.array.isRequired,
  }
  return HocComponent
}


export default  Hoc