import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MyCarousel from './MyCarousel';
import UpArrow from './UpArrow';

function App() {
  return (
    <div className='App'>
      <MyCarousel />
      <UpArrow />
    </div>
  );
}

export default App;
