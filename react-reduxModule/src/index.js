import React, { Fragment }from 'react';
import ReactDOM from 'react-dom';
import store from './store/reducers'
import { Provider } from 'react-redux'
import './assets/css/common/public.css';
import RouterCompnent from './Router2.jsx';

//2、商品装车


//3、存入仓库


function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <RouterCompnent /> 
      </Provider>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

