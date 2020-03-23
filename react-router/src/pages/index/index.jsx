import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Index extends Component{
  constructor(){
    super()
    
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            <Link to="/news">新闻页面</Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default Index