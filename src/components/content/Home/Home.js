import React, {Component} from 'react';
import './home.css';

import Markdown from 'markdown-to-jsx';

import hljs from 'highlight.js';
// HLJS style
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import home from './welcome.md'

class Home extends Component {

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    const codeCollection = [...document.getElementsByTagName('code')]
    codeCollection.map(eaBlock => hljs.highlightBlock(eaBlock))
  }

  render () {
    return (
      <div className="Home-container">
        <h1 className="welcome_banner">Welcome to Code Stumble</h1>
        <h3 align="center"> If you're not lost, you're not exploring! </h3>
        
        <Markdown>
          {home}
        </Markdown>
      </div>
    )
  }
}

export default Home;
