import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="reset-button"
    >
      Reset
    </button>
  );
};

export default ResetButton; 