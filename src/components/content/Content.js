import React, { Component } from 'react';
import { Router } from '@reach/router';

import './content.css'
import Article from './Article/Article.js';
import About from './About/About.js'


class Content extends Component {
  render () {
    return (
      <div className = "content col-sm-8 col-md-9 col-lg-10">
        <br />
        <h1 id="construction"><i>This is is currently under construction</i> </h1>
        <br />
        <hr />

        {/* Here is the site's routing setup */}
        <Router>
          <About path='/about' />
          <Article path='/article' />
          
        </Router>
      </div>
    )
  }
}

export default Content;