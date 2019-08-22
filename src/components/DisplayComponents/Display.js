import React from 'react';
import './Display.scss';

const Display = props => {
  return (
    <div className='display'>
      {/* Display any props data here */}
      <input className="input" placeholder={props.total} />
    </div>
  );
};

export default Display;
