import React, { useState } from 'react';

import Header from './components/header/Header';
import SongsList from './components/songsList/SongsList';
import Lyric from './components/lyric/Lyric';

import useFetch from './hooks/useFetch';

import './App.css';
const API_URL = 'https://api.lyrics.ovh';
function App() {
  const [songsURL, setSongsURL] = useState('');
  const [artist, setArtist] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [showLyric, setShowLyric] = useState(false);

  const { loading, data: songs, error } = useFetch(songsURL);

  const { loading: load, data: lyric, error: error2 } = useFetch(songUrl);

  const handlerLyric = (artist, song) => {
    setArtist(artist);
    setSongTitle(song);
    setSongUrl(`${API_URL}/v1/${artist}/${song}`);
    setShowLyric(true);
  };
  console.log(songs);
  return (
    <div className="App">
      <Header fetchSongs={setSongsURL} showLyric={setShowLyric} />
      <div className="container">
        {!showLyric && (
          <SongsList
            songs={songs}
            displayLyric={handlerLyric}
            fetchSongs={setSongsURL}
          />
        )}
        {showLyric && lyric?.lyrics ? (
          <Lyric lyric={lyric.lyrics} artist={artist} songTitle={songTitle} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
