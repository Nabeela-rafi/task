import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import GridView from './components/gridview/GridView';
import TileView from './components/tileview/TileView';
import TabButtons from './components/tabs/TabButtons';

function App() {
  const [view, setView] = useState('grid'); // 'grid' or 'tile'

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="App">
      <Menu />
      <TabButtons view={view} onViewChange={handleViewChange} />
      {view === 'grid' ? <GridView /> : <TileView />}
    </div>
  );
}

export default App;
