import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

// Code Highlighting dependencies
import highlight from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

import './article.css';

// Import all the articles
import articles from './md_articles/index'

class Article extends Component {
  constructor (props) {
    super(props);
    
    // Include the object containing every MD file in the state
    this.state = {
      articles,
    }

    // this.highlightCode = this.highlightCode.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    const codeCollection = [...document.getElementsByTagName('code')]
    codeCollection.map(eaBlock => highlight.highlightBlock(eaBlock))
  }

  render () {
    return (
        <div id="mdArticle">
        {/* Markdown converts the MD file to readable HTML */}
          <Markdown>
            {/* Render an article based on the articleId from the "<Link to=...>" */}
            {this.state.articles[this.props.articleId]}
          </Markdown>
        </div>
    )
  }
}

export default Article;