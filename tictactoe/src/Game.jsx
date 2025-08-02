import React, { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import ResetButton from './components/ResetButton';
import { calculateWinner } from './utils/gameLogic';

const Game = () => {
  // State management - demonstrating useState hook
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Calculate winner using the utility function
  const { winner, line, isTie } = calculateWinner(squares);

  // Event handler for square clicks
  const handleSquareClick = (i) => {
    // Don't allow moves if there's a winner or it's a tie
    if (squares[i] || winner || isTie) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  // Event handler for reset button
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game-container">
      {/* Status component with props */}
      <Status winner={winner} xIsNext={xIsNext} isTie={isTie} />
      
      {/* Board component with props */}
      <Board 
        squares={squares} 
        onSquareClick={handleSquareClick} 
        winningLine={line} 
      />
      
      {/* Reset button component with props */}
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default Game;
