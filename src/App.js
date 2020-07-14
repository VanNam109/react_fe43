import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
        {/* <BaiTapLayout /> */}
        {/* <BaiTapLayout2 /> */}
        <DataBinding />
        <h1 className="header">hello fe43</h1>
        
    </div>
  );
}

export default App;
