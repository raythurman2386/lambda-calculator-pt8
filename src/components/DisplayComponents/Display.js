import React from 'react';
import './Display.scss';

const Display = props => {
  return (
    <div className='display'>
      {/* Display any props data here */}
      <input type="text" className="input" value={props.total} disabled />
    </div>
  );
};

export default Display;
