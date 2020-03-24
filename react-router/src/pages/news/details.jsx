import React, { Component } from 'react'
import { localParam } from '../../assets/js/utils'


class NewsDetails extends Component{
  componentDidMount(){
    console.log(this.props.location.search)
    console.log("id",localParam(this.props.location.search).search.id, 
    "title" ,decodeURIComponent(localParam(this.props.location.search).search.title))
  }
  render(){
    return (
      <div>
        id:{localParam(this.props.location.search).search.id} <br/>
        title:{decodeURIComponent(localParam(this.props.location.search).search.title)}
      </div>
    )
  }
}


export default NewsDetails