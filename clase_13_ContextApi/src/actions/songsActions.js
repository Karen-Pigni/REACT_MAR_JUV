import { ENDPOINT, ENDPOINT_LYRIC, CORS_URL } from '../constans/endpoints';

export const fetchSongs = (dispatch, suggest, proxy = false) => {
  let url = proxy ? CORS_URL + proxy : ENDPOINT + `/suggest/${suggest}`;
  dispatch({ type: 'LOADING' });
  fetch(url)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: 'SONGS_RESPONSE',
        payload: {
          songs: response.data,
          prev: response.prev,
          next: response.next,
        },
      })
    );
};

export const fetchLyric = (dispatch, artist, song) => {
  dispatch({ type: 'LOADING' });
  fetch(ENDPOINT_LYRIC + `/${artist}/${song}`)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: 'LYRIC_RESPONSE',
        payload: {
          song: { lyric: response.lyrics, artist: artist, title: song },
        },
      })
    );
};
