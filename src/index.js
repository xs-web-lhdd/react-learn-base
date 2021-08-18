import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Test from './Test' // 引入第一个组件


ReactDOM.render(
    <div>
      <App />
      <Test />
    </div>,
  document.getElementById('root')
);

