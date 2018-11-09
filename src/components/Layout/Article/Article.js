import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

import './article.css';

class Article extends Component {
  constructor (props) {
    super(props);
    
    // Include the object containing every MD file in the state
    this.state = {
      articles: this.props.articles,
      articleId: this.props.articleId
    }
  }
  
  // On mount, highlight code
  componentDidMount() {
    this.props.highlightCodeBlock();
  }

  render () {
    const {articles, articleId } = this.state;
    return (
        <div className="mdArticle">
        {/* Markdown converts the MD file to readable HTML */}
          <Markdown>
            {/* Render an article based on the articleId from the "<Link to=...>" */}
            {articles[articleId].md}
          </Markdown>
        </div>
    )
  }
}

export default Article;