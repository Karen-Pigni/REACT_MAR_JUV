import React, { useContext } from 'react';
import { SongsContext } from '../../context/SongsContext';
import { fetchLyric } from '../../actions/songsActions';

import './song.css';

const Song = ({ song }) => {
  const { dispatch } = useContext(SongsContext);
  const getLyrics = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchLyric(dispatch, song.artist.name, song.title));
  };
  return (
    <>
      <li>
        <span id="song">
          <strong>{song.artist.name}</strong> - {song.title}
        </span>
        <button id="btnLyric" className="btn" onClick={getLyrics}>
          Letra
        </button>
        <div id="audio">
          <audio src={song.preview} controls></audio>
        </div>
      </li>
    </>
  );
};

export default Song;
