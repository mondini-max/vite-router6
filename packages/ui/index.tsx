import React from 'react';

export const MyButton = ({ children }) => {
  return (
    <button style={{ padding: '10px', background: 'blue', color: 'white' }}>
      {children}
    </button>
  );
};
