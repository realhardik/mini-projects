import React from 'react';
import Square from './Square';

const Board = ({ squares, onSquareClick, winningLine }) => {
  const renderSquare = (i) => {
    const isWinningSquare = winningLine?.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-1 mb-4">
      {squares.map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board; 