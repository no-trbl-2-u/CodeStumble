import React, { Component } from 'react';
import { Router } from '@reach/router';

import './content.css'
import ArticleIndex from './ArticleIndex/ArticleIndex';
import About from './About/About.js'
import Article from './ArticleIndex/Article/Article'
import Home from './Home/Home'

class Content extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <div className = "content col-sm-8 col-md-9 col-lg-10">
        <br />
        <h2 id="construction"><i>This is is currently under construction</i> </h2>
        <br />
        <hr />

        {/* Here is the content's routing setup */}
        <Router>
          <Home path='/'/>
          <About path='/about' />
          <ArticleIndex path='/article' />
          <Article path='/article/:articleId'/>
        </Router>
      </div>
    )
  }
}

export default Content;