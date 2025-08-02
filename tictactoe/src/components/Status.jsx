import React from 'react';

const Status = ({ winner, xIsNext, isTie }) => {
  let status;
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isTie) {
    status = "It's a tie!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="status">
      {status}
    </div>
  );
};

export default Status; 