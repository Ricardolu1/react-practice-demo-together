import React, { Component }  from 'react'
import { withRouter } from 'react-router-dom'

// class GoodsNav extends Component{

//   goPage(url){
//     console.log(this.props)
//     this.props.history.replace(url)
//   }

//   render(){
//     return (
//       <div>
//         <ul>
//           <li
//             onClick={this.goPage.bind(this, '/goods/item')}
//           >商品</li>
//           <li
//             onClick={this.goPage.bind(this, '/goods/details')}
//           >详情</li>
//           <li
//             onClick={this.goPage.bind(this, '/goods/review')}
//           >评价</li>
//         </ul>
//       </div>
//     )
//   }
// }

function GoodsNav(props) {
  const goPage = (url)=>{
    console.log(this, url)
    props.history.replace(url)
  }

  return (
    <div>
      <ul>
        <li
          onClick={goPage.bind(null, '/goods/item')}
        >商品</li>
        <li
          onClick={goPage.bind(null, '/goods/details')}
        >详情</li>
        <li
          onClick={goPage.bind(null, '/goods/review')}
        >评价</li>
      </ul>
    </div>
  )
}

export default withRouter(GoodsNav)