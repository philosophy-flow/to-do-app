import './assets/ControlPanel.css'
import React from 'react';

const ControlPanel = ({itemsLeft}) => {
  return (
    <div className="ControlPanel">
      <p className="items-left">{itemsLeft} items left</p>
      <div className="type-selector-container">
        <button className="control-btn">All</button>
        <button className="control-btn">Active</button>
        <button className="control-btn">Completed</button>
      </div>
      <button className="control-btn">Clear Completed</button>
    </div>
  );
};

export default ControlPanel;
