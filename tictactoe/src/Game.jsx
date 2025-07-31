import React, { useState } from 'react';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    const isWinningSquare = line?.includes(i);
    return (
      <button
        key={i}
        onClick={() => handleClick(i)}
        className={`w-20 h-20 border text-2xl font-bold flex items-center justify-center transition-all duration-300
          ${isWinningSquare ? 'bg-green-400 animate-pulse text-white' : 'hover:bg-gray-200 text-white'}
        `}
      >
        {squares[i]}
      </button>
    );
  };

  return (
    <div className="bg-[url('src/assets/bg.svg')] flex flex-col items-center justify-center min-h-screen bg-gray-600 p-4">
      <div className="mb-4 text-xl font-semibold text-white">{status}</div>
      <div className="grid grid-cols-3 gap-1 mb-4">
        {squares.map((_, i) => renderSquare(i))}
      </div>
      <button
        onClick={handleReset}
        className="px-8 py-2 font-semibold text-xl bg-blue-500 text-white rounded-full hover:bg-red-600 transition-all"
      >
        Reset
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return { winner: null, line: null };
};

export default Game;
