import React, {Component} from 'react'
import { Link } from '@reach/router'
import './navButton.css'

class NavButton extends Component{
  render () {
    return(
      <div>
        <span className="float" id="menu-share">
        <i className="fa fa-diamond my-float" aria-hidden="true"></i>
        </span>

        {/* List of Link icons */}
        <ul id="navButtonMenu">

          {/* Article Button - List */}
          <li>
            <Link to="article">
            <i className="fa fa-list-ul my-float"></i>
            </Link>
          </li>

          {/* About Button - Person */}
          <li>
            <Link to="about">
            <i className="fa fa-user my-float"></i>
            </Link>
          </li>

          {/* Home Button - House */}
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