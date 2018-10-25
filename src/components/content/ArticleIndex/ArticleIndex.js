import React from 'react';
import { Link } from '@reach/router'


const ArticleIndex = () => (
    <div>
      <h2>This is the Article Index!!</h2>
      <ul>
        <li>
          <Link to="readMe">Our first Article!</Link>
        </li>
        <li>
          <Link to="example01">Our Second Article!</Link>
        </li>
      </ul>
    </div>
)



export default ArticleIndex