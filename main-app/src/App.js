import React, { useEffect } from 'react';
import { loadMicroApp } from 'qiankun'
import './App.scss'
import { Button } from 'antd'
function App() {
  const btnClick = () => {
    loadMicroApp({
      name: 'subApp',
      entry: '//localhost:12081',
      container: "#sub-app-container"
    })
  }
  useEffect(() => { }, [])
  return (
    <div className="App">
      <div className='im-layout' style={{background:'lightgray'}}>
        <span>业务：</span>
        <Button type='primary' className='my-btn' onClick={btnClick} style={{ margin: '10px' }}>加载应用</Button>
      </div>
      <div className='im-app' style={{background:'lightblue',height:'400px'}}>
        <span>应用：</span>
        <div id='sub-app-container'></div>
      </div>
    </div>
  );
}

export default App;
