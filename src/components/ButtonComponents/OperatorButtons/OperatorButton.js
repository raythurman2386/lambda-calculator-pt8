import React from 'react';

const OperatorButton = ({ total, setTotal, value, char }) => {
  // handler function
  function handleChange() {
    if (char === '+' || '-' || 'x' || '/') {
      return setTotal(total + value);
    } else if (char === '=') {
      setTotal(eval(total));
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className='btn operatorBtn'
        key={char}
        value={value}
        onClick={() => handleChange()}
      >
        {char}
      </button>
    </>
  );
};

export default OperatorButton;
