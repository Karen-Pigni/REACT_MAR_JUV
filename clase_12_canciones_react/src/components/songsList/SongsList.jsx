import React from 'react';
import Song from '../song/Song';

import './songs-list.css';

const SongsList = ({ songs, displayLyric, fetchSongs }) => {
  return (
    <>
      <ul class="songs">
        {songs?.data.map((song) => (
          <Song key={song.id} song={song} displayLyric={displayLyric} />
        ))}
      </ul>
      <div className="container centered">
        {songs?.prev ? (
          <button
            className="btn"
            onClick={() =>
              fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.prev}`)
            }
          >
            Anterior
          </button>
        ) : (
          ''
        )}
        {songs?.next ? (
          <button
            className="btn"
            onClick={() =>
              fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.next}`)
            }
          >
            siguiente
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default SongsList;
