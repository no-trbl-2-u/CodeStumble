import React, {Component} from 'react';
import './home.css';

import Markdown from 'markdown-to-jsx';

import home from './welcome.md'

class Home extends Component {

  componentDidMount() {
    this.props.highlightCodeBlock();
  }

  render () {
    return (
      <div className="Home-container">        
        <Markdown>
          {home}
        </Markdown>
      </div>
    )
  }
}

export default Home;
