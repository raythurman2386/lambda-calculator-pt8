import React from 'react';

const SpecialButton = ({ special, total, setTotal }) => {
  // Reset the total back to 0
  function clearData() {
    switch (special) {
      case 'C':
        setTotal('');
        break;
      case '+/-':
        setTotal(total * -1);
        break;
      case '%':
        setTotal(total / 100);
        break;
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className='btn specialBtn'
        value={special}
        onClick={() => clearData()}
      >
        {special}
      </button>
    </>
  );
};

export default SpecialButton;
