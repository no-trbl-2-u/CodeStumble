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
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="article">Article Index</Link></li>
        </ul>
      </div>
    )
  }
}


export default SideNav;