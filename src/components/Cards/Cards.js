import React from 'react';
import './cards.css';
import $ from 'jquery';
export default function Card(props) {


  const data = props.data

  return (
    <div className="Card-container">
      {data.map((card) => 
        <div className="card" key={card.title}>
          <div className="card-content">
            <h1 className="card-title">{card.title}</h1>
            <p className="card-text">{card.text}</p>
            <button className="card-btn">Button</button>
        </div>
      </div>
      )}
    </div>
  );
}
