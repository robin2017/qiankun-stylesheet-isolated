import React, { useEffect } from 'react';
 import {loadMicroApp} from 'qiankun'
 

function App() {
  const btnClick = ()=>{
    loadMicroApp({
      name:'subApp',
      entry:'//localhost:12081',
      container:"#sub-app-container"
    })
  }
  useEffect(()=>{},[])
  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={btnClick}>加载react子应用</button>
        </li>
      </ul>
      <div id='sub-app-container'></div>
    </div>
  );
}

export default App;
