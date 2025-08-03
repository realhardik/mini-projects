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
    <div className="board">
      {squares.map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;