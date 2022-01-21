import React from 'react';
import './Popup.css';
import Loading from '../../components/loading/loading.js';

var loading_status = true;

const Popup = () => {
  return (
    <div className="App">
      <Loading display={loading_status ? 1 : 0} />
    </div>
  );
};

export default Popup;
