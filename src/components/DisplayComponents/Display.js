import React from 'react';
import './Display.scss';

const Display = ({ total }) => {
  return (
    <div className='display'>
      {/* Display any props data here */}
      <input maxlength="10" type="text" className="input" value={total} placeholder="0" disabled />
    </div>
  );
};

export default Display;
