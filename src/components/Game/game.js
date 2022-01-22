import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './game.css';

const loading = () => { 

  return (
    <div className="Loading-container">
      <header className="App-header">
        <img src={icon} className="Loading-App-logo" alt="icon" />
        <h1 className="App-title">Direction</h1>
      </header>
    </div>
  );
};

export default loading;
