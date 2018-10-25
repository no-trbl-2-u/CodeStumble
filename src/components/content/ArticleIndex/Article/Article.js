import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import './article.css';

// Specific Article to load
import readMe from './md_articles/README.md';
import example01 from './md_articles/example01.md';

const articles = {
  readMe,
  example01
}

// SINGLE SOURCE OF TRUTH... RULE BROKEN HERE!
class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      articles,
    }
  }
  render () {
    return (
        <div id="mdArticle">
          <Markdown>
            {this.state.articles[this.props.articleId]}
          </Markdown>
        </div>
    )
  }
}

export default Article;