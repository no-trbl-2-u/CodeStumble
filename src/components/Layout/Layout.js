import React, { Component } from 'react';
import { Link } from '@reach/router'

import Header from './Header/Header'

import './layout.css'

class Layout extends Component {

  render () {
    return (
      // TODO -> Fix bootstrap classes for Content & NavBar
      <div className="content-container">
        <Link to="/">
          <Header />
        </Link>

        {/* Render all children Components! */}
        {this.props.children}
      </div>
    )
  }
}

export default Layout;