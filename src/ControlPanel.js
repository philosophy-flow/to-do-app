import './assets/ControlPanel.css'
import React from 'react';

const ControlPanel = ({itemsLeft, listType, handleListChange, clearAllCompleted, listVisibility, lightTheme}) => {

  return (
    <div className={`ControlPanel ${!listVisibility && 'no-list'} ${!lightTheme ? 'dark' : ''}`}>
      <p className="items-left">{itemsLeft} items left</p>
      <div className={`type-selector-container ${!lightTheme ? 'dark' : ''}`}>
        <button
          className={`control-btn ${listType === 'all' ? 'active' : ''}`}
          onClick={() => handleListChange('all')}
        >
          All
        </button>
        <button
          className={`control-btn ${listType === 'active' ? 'active' : ''}`}
          onClick={() => handleListChange('active')}
          >
          Active
        </button>
        <button
          className={`control-btn ${listType === 'complete' ? 'active' : ''}`}
          onClick={() => handleListChange('complete')}
          >
          Completed
        </button>
      </div>
      <button
        className="control-btn"
        onClick={clearAllCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ControlPanel;
