import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './game.css';
import Navbar from '../Navbar/navbar';

const loading = () => { 

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
      <h1>test</h1>
    </div>
  );
};

export default loading;
