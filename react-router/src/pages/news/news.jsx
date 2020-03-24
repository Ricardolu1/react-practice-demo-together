import React, { Component } from 'react'

class News extends Component{
  render(){
    return (
      <div>
        <ul>
          {/* <li>
            <Link to="/news/details/1/新闻详情1">
              新闻详情1
            </Link>
          </li> */}
          <li 
            onClick = {()=>{
              this.props.history.push({
                pathname:"/news/details",
                search:"?id=1&title=新闻详情2",
                query:{
                  id:1,
                  title:"新闻详情2"
                }
              })
            }}
          >新闻详情2</li>
        </ul>
      </div>
    )
  }
}


export default News