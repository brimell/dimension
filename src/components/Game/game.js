import React, { useState } from 'react';
import './game.css';
import Navbar from '../Navbar/navbar';
import $ from 'jquery';
import Research from './Research/Research'
import Map from './Map/Map.js'
import Home from './Home/Home'

const Game = () => { 

  const [currentTab, setCurrentTab] = useState('home');
  

  $("#navbarSupportedContent").on("click","li",function(e){
    setCurrentTab($(this)[0].id)
  })
  function renderPage(page) {
    if (page === 'home') { return <Home />} else if (page === 'research') { return <Research />} else if (page === 'map') { return <Map />}
  }

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
      {renderPage(currentTab)}
    </div>
  );
};

export default Game;
