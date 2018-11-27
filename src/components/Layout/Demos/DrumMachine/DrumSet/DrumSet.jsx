import React, { Component } from 'react';
import DrumPad from './DrumPad/DrumPad';

class DrumSet extends Component {

  constructor() {
    super();
    this.handleKBD = this.handleKBD.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleKBD :: Event -> *Side-Effect*
  handleKBD(event) {

    // Isolate each pad via the keyboard KeyCode
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    // Null any unused key Presses
    if(!audio) return;

    this.handleClassNames(key);
    this.playAudio(audio);
  }

  // handleClick :: keyCode -> *Side-Effect*
  handleClick(keyCode) {

    // Isolate each pad via the passed KeyCode
    const key = document.querySelector(`.key[data-key="${keyCode}"`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    this.handleClassNames(key);
    this.playAudio(audio);
  }
  
  // handleClassNames :: HTMLElement -> * Changes CSS
  handleClassNames(key) {
    key.className = 'key playing';                         // ADD
    setTimeout(() => key.classList.remove('playing'), 100) // REMOVE
  }

  // playAudio :: <audio> -> * Plays Audio Clip
  playAudio(audio) {
    audio.currentTime = 0; // Rewind to start of sample
    audio.play(); // Play the .wav file associated w/ key
  }

  componentDidMount() {
    // Listen for and handle Keyboard Events
    document.addEventListener('keydown', event => {
      this.handleKBD(event);
    })

    const audioTest = Array.from(document.querySelectorAll('audio'))
    console.log(audioTest)
  }

  render() {
    const { keyData } = this.props;
    return (
      <div className="keys-container">
      {/* Map over keyData to construct each DrumPad */}
      { keyData.map((each, index) => (
        <div key={ index }>
          <DrumPad
            dataKey={ each.dataKey }
            kbdKey={ each.kbdKey }
            sound={ each.sound }
            handleClick={ this.handleClick }
          />

          <audio
            data-key={ each.dataKey }
            src={ each.source }
          />
        </div>
      )) }
      
      </div>
    );
  }
}
 
export default DrumSet;