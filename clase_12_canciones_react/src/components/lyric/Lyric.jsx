import React from 'react';

const Lyric = ({ lyric, artist, song }) => {
  const letra = lyric.replace(/(\r\n|\r|\n)/g, '<br>');

  const createMarkup = () => {
    return { __html: letra };
  };

  return (
    <div>
      <h2>
        <strong>{artist}</strong> - {song}
      </h2>
      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Lyric;
