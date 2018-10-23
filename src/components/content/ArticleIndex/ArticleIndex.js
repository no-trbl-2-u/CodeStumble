import React from 'react';
import { Link } from '@reach/router'


const ArticleIndex = props => (
    <div>
      <h2>This is the Article Index!!</h2>
      <ul>
        <li>    
          <Link to="001">Our first Article!</Link>
        </li>
      </ul>
    </div>
)



export default ArticleIndex