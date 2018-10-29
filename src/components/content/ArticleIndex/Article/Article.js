import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';


// TODO -> create custom hljs index.js file to
//      -> only load specific languages
//      -> OR -> create another .js file and
//            -> load them manually
// Code Highlighting dependencies
import hljs from 'highlight.js';
// HLJS style
import 'highlight.js/styles/atom-one-dark-reasonable.css';

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

    this.highlightCode = this.highlightCode.bind(this);
  }

  // On mount, highlight code
  componentDidMount() {
    this.highlightCode();
  }

  // Method to highlight code
  highlightCode() {
    const codeCollection = [...document.getElementsByTagName('code')]
    codeCollection.map(eaBlock => hljs.highlightBlock(eaBlock))
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