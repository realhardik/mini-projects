export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];
  
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line, isTie: false };
    }
  }
  
  // Check for tie - all squares are filled
  const isTie = squares.every(square => square !== null);
  
  return { 
    winner: null, 
    line: null,
    isTie: isTie
  };
}; 