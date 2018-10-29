// Import Libraries
import React from 'react'
import { Link } from '@reach/router'

// Import Articles
import './Article/md_articles/'

// Import stylesheet
import './articleIndex.css'

// Simple functional component to create the links to the articles
// TODO -> Import the "articles" object to map over and create { previews? }
const ArticleIndex = () => (
    <div>
      <h2>This is the Article Index!!</h2>
      <ul className="articleLinks">
        <li>
          <Link to="intro">Our first Article!</Link>
        </li>
        <li>
          <Link to="example01">Our Second Article!</Link>
        </li>
      </ul>
    </div>
)



export default ArticleIndex