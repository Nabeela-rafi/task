// src/components/TabButtons.js
import React from 'react';
import './tabbuttons.css'

const TabButtons = ({ view, onViewChange }) => {
  return (
    <div className="view-tabs">
      <button
        className={`tab-button ${view === 'grid' ? 'active' : ''}`}
        onClick={() => onViewChange('grid')}
      >
        Grid View
      </button>
      <button
        className={`tab-button ${view === 'tile' ? 'active' : ''}`}
        onClick={() => onViewChange('tile')}
      >
        Tile View
      </button>
    </div>
  );
};

export default TabButtons;
