import React, { Component, lazy, Suspense, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GoodsNav from '../goodsNav'
const GoodsItem = lazy(()=>import("./item"))
const GoodsReview = lazy(()=>import("./review"))
const GoodsDetails = lazy(()=>import("./details"))

class Index extends Component{

  goPage(url){
    this.props.history.replace(url)
  }

  render(){
    return (
      <div>
        <GoodsNav></GoodsNav>
        <button type="button"
          onClick = {this.props.history.go.bind(this, -1)}
        >返回</button>
        <div>
          <Switch>
            <Suspense fallback={<Fragment />}>
              <Route path="/goods/item" component={GoodsItem}></Route>
              <Route path="/goods/details" component={GoodsDetails}></Route>
              <Route path="/goods/review" component={GoodsReview}></Route>
              <Redirect to="/goods/item"></Redirect>
            </Suspense>
          </Switch>
        </div>
      </div>
    )
  }
}


export default Index