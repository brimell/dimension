import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './game.css';
import Navbar from '../Navbar/navbar';

const loading = () => { 

  return (
    <div className="Game-container">
      <div className="topBar">
        <h1 className="App-title">Direction</h1>
      </div>
      <Navbar toggle={false} title="Direction" />
    </div>
  );
};

export default loading;
