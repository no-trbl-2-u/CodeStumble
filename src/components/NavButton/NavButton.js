import React, {Component} from 'react'
import { Link } from '@reach/router'
import './navButton.css'

class NavButton extends Component{
  render () {
    return(
      <div>
        {/* Actual floating button */}
        <a href="#" className="float" id="menu-share">
        <i className="fa fa-diamond my-float" aria-hidden="true"></i>
        </a>

        {/* List of Link icons */}
        <ul id="navButtonMenu">
          <li><Link to="article">
          <i className="fa fa-facebook my-float"></i>
          </Link></li>

          <li><a href="#">
          <i className="fa fa-google-plus my-float"></i>
          </a></li>

          <li><Link to="/">
          <i className="fa fa-twitter my-float"></i>
          </Link></li>
        </ul>


        {/* Floating label */}
        <div className="label-container">
          <div className="label-text"> Navigate </div>
          <i className="fa fa-play label-arrow"> </i>
        </div>
      </div>
    )
  }
}

export default NavButton;