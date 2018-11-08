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
      <div className="ArticleIndex-container">

        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Articles</h1>
          </div>
        </section>

        <ul className='articleLinks'>
          {this.state.articles.map((ea, index) => {
            return(
              <li className="articleLink" key={index}><Link to={ea.path}>{ea.title}</Link></li>
            )  
          })}
        </ul>
      </div>
    )
  }
}

export default ArticleIndex