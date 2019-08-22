import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numbers = ({ setTotal, total }) => {
  // STEP 2 - add the imported data to state
  const [numberButtons, setNumberButtons] = useState(numbers);
  return (
    <div className='number__btn__container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberButtons.map((number, index) =>
        index !== 9
          ? <NumberButton total={total} setTotal={setTotal} value={number} className="btn" />
          : <NumberButton setTotal={setTotal} value={number} className="zeroBtn" />)}
    </div>
  )
};

export default Numbers;
