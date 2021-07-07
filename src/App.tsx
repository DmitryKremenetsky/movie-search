import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Искать здесь..."></input>
            <button type="submit"></button>
            <div className="delete">X</div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
