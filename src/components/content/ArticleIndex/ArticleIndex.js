import React, {Component} from 'react'
import { Link } from '@reach/router'
import './articleIndex.css'

// Simple functional component to create the links to the articles
// TODO -> Import the "articles" object to map over and create { previews? }
class ArticleIndex extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: Object.values(this.props.articles)
      // or -> : Object.keys(this.props.articles).map(i => this.props.articles[i])
    }
  }

  render() {
    return (
      <div>
        <h2>All The Articles</h2>
        <ul className='articleLinks'>
          {this.state.articles.map((ea, index) => {
            return(
              <li key={index}><Link to={ea.path}>{ea.title}</Link></li>
            )  
          })}
        </ul>
      </div>
    )
  }
}

export default ArticleIndex