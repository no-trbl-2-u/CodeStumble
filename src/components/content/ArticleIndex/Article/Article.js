import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import './article.css';

// Import all the articles
import articles from './md_articles/index'

// SINGLE SOURCE OF TRUTH... RULE BROKEN HERE!
class Article extends Component {
  constructor (props) {
    super(props);
    // Include the object containing every MD file in the state
    this.state = {
      articles,
    }
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