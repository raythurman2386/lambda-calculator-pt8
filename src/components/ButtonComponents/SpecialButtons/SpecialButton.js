import React from 'react';

const SpecialButton = ({ key, value, total, setTotal }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='btn specialBtn' key={key} value={value}>
        {value}
      </button>
    </>
  );
};

export default SpecialButton;
