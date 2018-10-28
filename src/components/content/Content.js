// Import Libraries
import React, { Component } from 'react';

// Import css file for content component
import './content.css'

class Content extends Component {

  render () {
    return (
      // TODO -> Fix bootstrap classes for Content & NavBar
      <div className = "content col-sm-8 col-md-9 col-lg-10">

        {/* TODO -> Replace w/ Header component */}
        <br />
        <h2 id="construction"><i>This site is currently under construction</i> </h2>
        <hr />

        {/* Render all children Components! */}
        {this.props.children}
      </div>
    )
  }
}

export default Content;