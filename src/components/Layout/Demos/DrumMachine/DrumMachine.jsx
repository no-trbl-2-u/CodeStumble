import React, { Component } from 'react';

import DrumSet from './DrumSet/DrumSet';
import keyData from './DrumSet/keyData';

// import sounds from './sounds';

import './DrumMachine.css'

class DrumMachine extends Component {
  // All the data for each key
  state = {
    keyData,
  }
  
  render() {
    // Destructured data for each key
    const { keyData } = this.state
    return (
      <div className="DrumMachine">
        <DrumSet 
          keyData= { keyData }
        />
      </div>
    );
  }
}

export default DrumMachine;