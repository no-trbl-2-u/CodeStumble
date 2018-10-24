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
          <li>
            <Link to="article">
            <i className="fa fa-list-ul my-float"></i>
            </Link>
          </li>

          <li>
            <Link to="about">
            <i className="fa fa-user my-float"></i>
            </Link>
          </li>

          <li>
            <Link to="/">
            <i className="fa fa-home my-float"></i>
            </Link>
          </li>
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