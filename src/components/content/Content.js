// Import Libraries
import React, { Component } from 'react';
import { Link } from '@reach/router'

// Import css file for content component
import './content.css'

class Content extends Component {

  render () {
    return (
      // TODO -> Fix bootstrap classes for Content & NavBar
      <div className = "content-container">

        {/* TODO -> Replace w/ Header component */}
        <header>
          <Link to="/">
            <h2 className="App-header">
              <i>Code Stumble</i> 
            </h2>
          </Link>
        </header>

        {/* Render all children Components! */}
        {this.props.children}
      </div>
    )
  }
}

export default Content;