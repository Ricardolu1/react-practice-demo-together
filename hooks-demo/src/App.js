import React, { Component } from 'react'
import Swiper from './components/Swiper/Swiper'
import  "./assets/css/app.scss"


import Header from './components/Header/Header'

class App extends Component{
  constructor(){
    super()
    this.state={
      images:[],
      images2:[]
    }
  }
  componentDidMount(){
    let images = [
      {src:require('./assets/images/banner1.jpg'),url:'https://yao.tmall.com/?spm=875.7931836/B.2016004.6.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561829993617_2429983'},
      {src:require('./assets/images/banner2.jpg'),url:'https://miao.tmall.com/?spm=875.7931836/B.2016004.5.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561818451146_2429983'},
      {src:require('./assets/images/banner3.jpg'),url:'https://3c.tmall.com/?spm=875.7931836/B.2016004.4.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_2429983'},
      {src:require('./assets/images/banner1.jpg'),url:'https://yao.tmall.com/?spm=875.7931836/B.2016004.6.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561829993617_2429983'},
      {src:require('./assets/images/banner2.jpg'),url:'https://miao.tmall.com/?spm=875.7931836/B.2016004.5.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561818451146_2429983'},
      {src:require('./assets/images/banner3.jpg'),url:'https://3c.tmall.com/?spm=875.7931836/B.2016004.4.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_2429983'},
      
    ]
    let images2 = [
      {src:require('./assets/images/banner1.jpg'),url:'https://yao.tmall.com/?spm=875.7931836/B.2016004.6.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561829993617_2429983'},
      {src:require('./assets/images/banner2.jpg'),url:'https://miao.tmall.com/?spm=875.7931836/B.2016004.5.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561818451146_2429983'},
      {src:require('./assets/images/banner3.jpg'),url:'https://3c.tmall.com/?spm=875.7931836/B.2016004.4.66144265lnzO1x&acm=lb-zebra-148799-667861.1003.4.2429983&scm=1003.4.lb-zebra-148799-667861.OTHER_14561822298635_2429983'}
    ]
    this.setState({
      images,
      images2
    })
  }
  render(){
    return (
      <div className="app">
        <div className="banner">
          <Swiper data={this.state.images} />
        </div>
        {/* <div className="banner">
          <Swiper data={this.state.images2} />
        </div> */}
      </div>
    )
  }
}



export default App
