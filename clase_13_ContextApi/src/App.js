import React, { useContext, useState } from 'react';

import Header from './components/header/Header';
import SongsList from './components/songsList/SongsList';
import Lyric from './components/lyric/Lyric';

import './App.css';
import { SongsContext } from './context/SongsContext';
function App() {
  const { songsState } = useContext(SongsContext);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {songsState.loading ? (
          <p>loading....</p>
        ) : songsState.showLyric ? (
          <Lyric
            lyric={songsState.lyric}
            artist={songsState.artist}
            song={songsState.songTitle}
          />
        ) : (
          <SongsList />
        )}
      </div>
    </div>
  );
}

export default App;
