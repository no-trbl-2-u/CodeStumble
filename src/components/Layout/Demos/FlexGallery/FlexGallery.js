import React, { Component } from 'react';

import Panels from './Panels/Panels'

import './FlexGallery.css';

class FlexGallery extends Component {

  componentDidMount() {
    // Target the panels
    const panels = document.querySelectorAll('.panel');

    const toggleOpen = node => {

      // Add class
      node.classList.toggle('open');

      // Remove class
      setTimeout(() => {
        node.classList.toggle('open');
      }, 3000);
    }

    // Class Handler
    const toggleActive = event => {
      if(event.propertyName.includes('flex')){
        event.target.classList.toggle('open-active')
      }
    }

    // Click Events
    panels.forEach(
      panel => panel.addEventListener('click',
        event => toggleOpen(event.target)
      )
    )
    
    // Transition End Listener
    panels.forEach(
      panel => panel.addEventListener('transitionend',
        event => toggleActive(event)
      )
    )
  }

  render() {
    return (
      <div className="Flex-container">
        <Panels />
      </div>
    );
  }
}

export default FlexGallery;
