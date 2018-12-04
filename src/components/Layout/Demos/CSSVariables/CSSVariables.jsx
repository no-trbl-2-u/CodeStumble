import React, { Component } from 'react';

import './CSSVariables.css';

import SpaceInput from './Components/SpaceInput';
import BlurInput from './Components/BlurInput';
import ColorInput from './Components/ColorInput';
import RotateInput from './Components/RotateInput';

class CSSVariables extends Component {
  constructor() {
    super();
    this.state = {
      spaceVal : 0,
      blurVal : 0,
      colorVal : '#ffffff',
      rotateVal: 0,
    }

    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleBlurChange = this.handleBlurChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleRotateChange = this.handleRotateChange.bind(this);
  }
  // Unbound method to update the document's style
  handleStyleUpdating(event) {
    const { name,  value, dataset} = event.target
    const suffix = dataset.sizing || '';

    // Update the CSS Variables
    document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
  }

  handleSpaceChange(event) {
    const { value: spaceVal } = event.target

    this.setState({
      spaceVal
    })

    this.handleStyleUpdating(event);
  }

  handleBlurChange(event) {
    const { value: blurVal } = event.target

    this.setState({
      blurVal
    })

    this.handleStyleUpdating(event);
  }

  handleColorChange(event) {
    const { value: colorVal } = event.target

    this.setState({
      colorVal
    })

    this.handleStyleUpdating(event);
  }

  handleRotateChange(event) {
    const { value: rotateVal } = event.target

    this.setState({
      rotateVal
    })

    this.handleStyleUpdating(event);
  }

  render() {

    // "SELF" - DESTRUCTION ;)
    const { spaceVal, blurVal, colorVal, rotateVal } = this.state;
    const { handleSpaceChange, handleBlurChange,
            handleColorChange, handleRotateChange } = this

    return (
      <div className="CSSVariables-container">

        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        <div className="controls">
          <SpaceInput 
            spaceVal={ spaceVal }
            handleSpaceChange={ handleSpaceChange }
          />

          <BlurInput
            blurVal={ blurVal }
            handleBlurChange={ handleBlurChange }
          />

          <ColorInput
            colorVal={ colorVal }
            handleColorChange={ handleColorChange }
          />

          <RotateInput
            rotateVal={ rotateVal }
            handleRotateChange={ handleRotateChange }
          />
        </div>

        <img className="randomImg" src="https://picsum.photos/800/500/?random"alt="A randomly Generated img" />

      </div>
    );
  }
}

export default CSSVariables;
