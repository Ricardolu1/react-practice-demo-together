import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class News extends Component{
  render(){
    return (
      <div>
        <li>
          <Link to="/news/details/1/新闻详情1">
            新闻详情1
          </Link>
        </li>
        <li>
          <Link to="/news/details/1/新闻详情1">
            新闻详情1
          </Link>
        </li>
      </div>
    )
  }
}


export default News