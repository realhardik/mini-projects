import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''}`}
    >
      {value}
    </button>
  );
};

export default Square; 