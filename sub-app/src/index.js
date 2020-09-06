import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
//if (!window.__POWERED_BY_QIANKUN__)  感觉没用！！！
if(document.querySelector('#sub-root')){
  console.log('独立模式')
  ReactDOM.render(<App/>, document.querySelector('#sub-root'))
}else{
  console.log('集成模式')
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props);
  ReactDOM.render(<App/>, document.querySelector('#sub-app-container'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.querySelector('#sub-app-container'));
}

export async function update(props) {
  console.log('update props', props);
}