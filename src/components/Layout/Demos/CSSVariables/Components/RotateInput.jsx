import React from 'react';

const RotateInput = (props) => {
  const { rotateVal, handleRotateChange } = props;
  return (  
    <React.Fragment>
      <label htmlFor="rotate">Rotate:</label>
      <input 
        id="rotate" name="rotate"
        type="range" data-sizing="deg"
        min="0" max="360"
        value={ rotateVal } 
        onChange={ handleRotateChange }
      />
    </React.Fragment>
  );
}
 
export default RotateInput;
