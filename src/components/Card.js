import React from 'react';

export const Card = ({ song }) => {
  return (
    <div>
      <img src={song.albumArt} alt="" />
      <div>
        <h2>{song.name}</h2>
        <span>BY: {song.artist}</span>
      </div>
    </div>
  );
};

export default Card;
