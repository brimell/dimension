import React, { useState } from 'react';
import './game.css';
import Navbar from '../Navbar/navbar';
import $ from 'jquery';

const Game = () => { 

  const [currentTab, setCurrentTab] = useState('home');
  

  $("#navbarSupportedContent").on("click","li",function(e){
    setCurrentTab($(this)[0].id)
  })
  

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
      <h1>{currentTab}</h1>
    </div>
  );
};

export default Game;
