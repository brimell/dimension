import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './loading.css';

const loading = () => { 

  return (
    <div className="Loading-container">
      <header className="App-header">
        <img src={icon} className="Loading-App-logo" alt="icon" />
        <h1 className="App-title">Direction</h1>
        <h1 style={{fontSize: "1rem", marginTop: "-20px"}} className="loading-text">Loading</h1>
      </header>
    </div>
  );
};

export default loading;
