import React from 'react';
import PropTypes from 'prop-types'


function GridSizeDropDown ({setGridSize}) {

  function handleOptionChange ({target}) {
    setGridSize(target.value.toUpperCase())
  } 

  return (
    <div>
      <select onChange={ handleOptionChange }>
        <option>Large</option>
        <option>Medium</option>
        <option>Small</option>
      </select>
    </div>
  );
}

 GridSizeDropDown.propTypes = {
  setGridSize: PropTypes.func.isRequired
};

export default GridSizeDropDown