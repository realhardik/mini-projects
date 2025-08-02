import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="px-8 py-2 font-semibold text-xl bg-blue-500 text-white rounded-full hover:bg-red-600 transition-all"
    >
      Reset
    </button>
  );
};

export default ResetButton; 