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

          {/* Home Button - House */}
          <li>
            <Link to="/">
            <i className="fa fa-home my-float"></i>
            </Link>
          </li>

          {/* Article Button - List */}
          <li>
            <Link to="articles">
            <i className="fa fa-list-ul my-float"></i>
            </Link>
          </li>

          <li>
            <Link to="explore">
              <i className="fa fa-magic my-float"></i>
            </Link>
          </li>

          {/* About Button - Person */}
          <li>
            <Link to="about">
            <i className="fa fa-user my-float"></i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavButton;