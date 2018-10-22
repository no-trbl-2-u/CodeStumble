import React, { Component } from 'react';
import { Link } from '@reach/router'; 
import portImg from './images/Retro landscape.jpg';
import './sideNav.css'


class SideNav extends Component {
  render () {
    return (
      <div className = "sideNavBlock col-sm-4 col-md-3 col- col-lg-2">
        <h3> Code Stumble </h3> <br /> <br />
        <SideNavIMG /> <br /> <br /> <br />
        <SideNavLinks />
      </div>
    )
  } 
}

class SideNavIMG extends Component {
  render () {
    return (
      <div className = "portImgBlock">
        <Link to="/">
          <img 
            className = "portfolioImg img-circle"
            alt = "WebmasterIMG"
            src = {portImg}
          />
        </Link>
      </div>
    )
  }
}

class SideNavLinks extends Component {
  render () {
    return (
      <div className="linkBox">
        <ul>
          <li><a href="https://www.google.com/search?q=bogus">Link One</a></li>
          <li><a href="https://www.google.com/search?q=bogus">Link Two</a></li>
          <li><Link to="/"> Home Link </Link></li>
        </ul>
      </div>
    )
  }
}


export default SideNav;