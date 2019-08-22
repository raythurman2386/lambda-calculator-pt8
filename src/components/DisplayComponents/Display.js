import React from 'react';

const Display = props => {
  return (
    <div>
      {/* Display any props data here */}
      <input placeholder={props.total} />
    </div>
  );
};

export default Display;
