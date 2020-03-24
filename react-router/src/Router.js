import React, { Component, Fragment } from 'react'
import  { HashRouter as Router, Route }  from  'react-router-dom';
/*router.js 页面里的代码
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import "./assets/css/app.css"
import IndexPages from './pages/index/index'
import NewsPages from './pages/news/news'
import NewsDetailPages from './pages/news/details'
class RouterComponent extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Route path="/" exact component={IndexPages}  />
            <Route path="/news" exact component={NewsPages}  />
            {/* <Route path="/news/details/:id/:title" component={NewsDetailPages}  /> */}
            <Route path="/news/details" component={NewsDetailPages}  />
          </Fragment>
        </Router>
      </Fragment>
    )
  }
}



export default RouterComponent
