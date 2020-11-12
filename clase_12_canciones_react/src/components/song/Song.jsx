import React from 'react';

const Song = ({ song, displayLyric }) => {
  return (
    <>
      <li>
        <span>
          <strong>{song.artist.name}</strong> - {song.title}
        </span>
        <button
          className="btn"
          onClick={() => displayLyric(song.artist.name, song.title)}
        >
          Letra
        </button>
      </li>
    </>
  );
};

export default Song;
