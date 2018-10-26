import React, {Component} from 'react';
import './home.css';

import Shape from './Shape/Shape'

class Home extends Component {
  render () {
    return (
      <div>
        <h1 id="welcome_banner">Welcome to Code Stumble</h1>
        <Shape />
      </div>
    )
  }
}

export default Home;