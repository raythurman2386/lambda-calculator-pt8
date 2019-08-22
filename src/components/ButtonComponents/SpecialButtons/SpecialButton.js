import React from 'react';

const SpecialButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value={props.value}>{props.value}</button>
    </>
  );
};

export default SpecialButton;
