import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './loading.css';

const loading = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="icon" />
        <h1 className="App-title">Dimension</h1>
      </header>
    </div>
  );
};

export default loading;
