import React from 'react';

const NumberButton = ({ total, className, value, setTotal }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => { setTotal(total + value) }} className={className} value={value}>{value}</button>
    </>
  );
};

export default NumberButton;
