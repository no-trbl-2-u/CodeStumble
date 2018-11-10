import React, { Component } from 'react';
import { Link } from '@reach/router'

import Header from './Header/Header'

import './layout.css'

class Layout extends Component {
  render () {
    return (
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