import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 border text-2xl font-bold flex items-center justify-center transition-all duration-300
        ${isWinningSquare ? 'bg-green-400 animate-pulse text-white' : 'hover:bg-gray-200 text-white'}
      `}
    >
      {value}
    </button>
  );
};

export default Square; 