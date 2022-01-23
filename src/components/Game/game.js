import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './game.css';
import Navbar from '../Navbar/navbar';

const loading = () => { 

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
    </div>
  );
};

export default loading;
