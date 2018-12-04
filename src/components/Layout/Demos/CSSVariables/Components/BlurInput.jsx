import React from 'react';

const BlurInput = (props) => {
  const { blurVal, handleBlurChange } = props;
  return (  
    <React.Fragment>
      <label htmlFor="blur">Blur:</label>
      <input 
        id="blur" name="blur"
        type="range" data-sizing="px"
        min="0" max="25"
        value={ blurVal } 
        onChange={ handleBlurChange }
      />
    </React.Fragment>
  );
}
 
export default BlurInput;
