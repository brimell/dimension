import React, { useState } from 'react';
import './game.css';
import Navbar from '../Navbar/navbar';
import $ from 'jquery';
import Research from './Research/Research';
import Map from './Map/Map.js';
import Home from './Home/Home';

const Game = () => {
  const [currentTab, setCurrentTab] = useState('home');

  $('#navbarSupportedContent').on('click', 'li', function (e) {
    setCurrentTab($(this)[0].id);
  });
  function RenderTab(props) {
    if (props.tab === 'home') {
      return <Home />;
    } else if (props.tab === 'research') {
      return <Research />;
    } else if (props.tab === 'map') {
      return <Map />;
    }
  }

  return (
    <div className="Game-container">
      <Navbar toggle={false} title="Direction" />
      <RenderTab tab={currentTab} />
    </div>
  );
};

export default Game;
