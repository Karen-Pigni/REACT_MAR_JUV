import React, { useContext } from 'react';
import { SongsContext } from '../../context/SongsContext';
import Song from '../song/Song';

import './songs-list.css';

import { fetchSongs } from '../../actions/songsActions';

const SongsList = () => {
  const { songsState, dispatch } = useContext(SongsContext);
  return (
    <>
      <ul className="songs">
        {songsState.songs?.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </ul>
      <div className="container centered">
        {songsState.prev ? (
          <button
            className="btn"
            onClick={() =>
              dispatch((dispatch) => fetchSongs(dispatch, '', songsState.prev))
            }
          >
            Anterior
          </button>
        ) : (
          ''
        )}
        {songsState.next ? (
          <button
            className="btn"
            onClick={() =>
              dispatch((dispatch) => fetchSongs(dispatch, '', songsState.next))
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
