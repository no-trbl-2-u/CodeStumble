import React from 'react';

const SpaceInput = (props) => {
  const { spaceVal, handleSpaceChange } = props;
  return (  
    <React.Fragment>
      <label htmlFor="spacing">Spacing:</label>
      <input 
        id="spacing" type="range" name="spacing" 
        min="10" max="200" value={ spaceVal } 
        data-sizing="px"onChange={ handleSpaceChange }
      />
    </React.Fragment>
  );
}
 
export default SpaceInput;