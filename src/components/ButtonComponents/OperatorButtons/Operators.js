import React, { useState } from 'react';
import styled from 'styled-components';

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorData, setOperatorData] = useState(operators);

  return (
    <div className='operator__btns'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorData.map(operator => {
        return <OperatorButton char={operator.char} value={operator.value} />;
      })}
    </div>
  );
};

export default Operators;
