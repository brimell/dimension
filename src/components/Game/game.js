import React, { useState } from 'react';
import './game.css';
import Navbar from '../Navbar/navbar';
import $ from 'jquery';
import Research from './Research/Research'
import Map from './Map/Map'
import Home from './Home/Home'

const Game = () => { 

  const [currentTab, setCurrentTab] = useState('home');
  

  $("#navbarSupportedContent").on("click","li",function(e){
    setCurrentTab($(this)[0].id)
  })
  

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
      {if (currentTab === 'home') {<Home />} else if (currentTab === 'research') {<Research />} else if (currentTab === 'map') {<Map />}}
    </div>
  );
};

export default Game;
