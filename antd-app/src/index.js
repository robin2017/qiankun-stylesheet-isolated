import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css'
import App from './App_prefixCls';
 
 
import {ConfigProvider} from 'antd'
ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);

 
