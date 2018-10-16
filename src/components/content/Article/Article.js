import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import './article.css';

// Specific Article to load
import test from './md_articles/README.md';

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name : "Article-Name",
    }
  }
  render () {
    return (
        <div id="mdArticle">
          <Markdown>
            {test}
          </Markdown>
        </div>
    )
  }
}

export default Article;