import React from 'react';
import { Link } from '@reach/router'


const ArticleIndex = () => (
    <div>
      <h2>This is the Article Index!!</h2>
      <ul>
        <li>    
          <Link to="0">Our first Article!</Link>
        </li>
        <li>
          <Link to="1">Our Second Article!</Link>
        </li>
      </ul>
    </div>
)



export default ArticleIndex