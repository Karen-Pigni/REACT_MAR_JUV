import React, { createContext, useReducer } from 'react';

export const SongsContext = createContext();

const songsReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        songs: [],
        loading: true,
        error: null,
        showLyric: false,
        lyric: null,
        artist: null,
        songTitle: null,
        prev: null,
        next: null,
      };
    case 'SONGS_RESPONSE':
      return {
        songs: action.payload.songs,
        loading: false,
        error: null,
        showLyric: false,
        lyric: null,
        artist: null,
        songTitle: null,
        prev: action.payload.prev,
        next: action.payload.next,
      };

    case 'LYRIC_RESPONSE':
      return {
        songs: [],
        loading: false,
        error: null,
        showLyric: true,
        lyric: action.payload.song.lyric,
        artist: action.payload.song.artist,
        songTitle: action.payload.song.title,
        prev: null,
        next: null,
      };

    default:
      break;
  }
};

const initialState = {
  songs: [],
  loading: false,
  error: null,
  showLyric: false,
  lyric: null,
  artist: null,
  songTitle: null,
  prev: null,
  next: null,
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myDispatch = (action) => {
    if (typeof action === 'function') {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, myDispatch];
};

export const SongsProvider = ({ children }) => {
  const [songsState, dispatch] = useThunkReducer(songsReducer, initialState);

  const value = { songsState, dispatch };
  return (
    <SongsContext.Provider value={value}>{children}</SongsContext.Provider>
  );
};
