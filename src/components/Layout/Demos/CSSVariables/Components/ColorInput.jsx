import React from 'react';

const ColorInput = (props) => {
  const { colorVal, handleColorChange } = props;
  return (  
    <React.Fragment>
      <label htmlFor="color">Color: </label>
      <input 
        id="base" name="base"
        type="color"
        value={ colorVal } 
        onChange={ handleColorChange }
      />
    </React.Fragment>
  );
}
 
export default ColorInput;
