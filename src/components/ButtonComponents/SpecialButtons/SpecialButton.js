import React from 'react';

const SpecialButton = ({ key, value, handleChange, total }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className='btn specialBtn'
        onClick={() => {
          handleChange(value);
        }}
        key={key}
        value={value}
      >
        {value}
      </button>
    </>
  );
};

export default SpecialButton;
