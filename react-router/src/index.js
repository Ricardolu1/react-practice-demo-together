import React, { Fragment }from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common/public.css';
import RouterCompnent from './Router';

function App() {
  return (
    <Fragment>
      <RouterCompnent /> 
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

