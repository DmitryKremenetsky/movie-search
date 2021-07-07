import React from "react";
import './styles.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Искать здесь..."></input>
      <button type="submit"></button>
      <div className="delete">X</div>
    </div>
  );
}

export default SearchBar;
