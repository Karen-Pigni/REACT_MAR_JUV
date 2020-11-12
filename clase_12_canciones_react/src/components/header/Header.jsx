import React, { useState } from 'react';
import './header.css';
const API_URL = 'https://api.lyrics.ovh';
const Header = ({ fetchSongs, showLyric }) => {
  const [inputValue, setinputValue] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    fetchSongs(`${API_URL}/suggest/${inputValue}`);
    showLyric(false);
  };
  return (
    <header>
      <h1>Canciones Piolas</h1>
      <form id="form">
        <input
          type="text"
          id="search"
          placeholder="Canción o Artista...."
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button onClick={formHandler}>Buscar</button>
      </form>
    </header>
  );
};

export default Header;
