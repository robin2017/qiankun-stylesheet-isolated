import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import './index.css'
import {ConfigProvider} from 'antd'

ReactDOM.render(
  <ConfigProvider prefixCls='im-layout'>
    <App />
  </ConfigProvider>,
  document.getElementById('main-root')
);
 
