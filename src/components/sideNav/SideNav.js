import React, { Component } from 'react';
import { Link } from '@reach/router'; 
import portImg from './images/Retro landscape.jpg';
import './sideNav.css'

class SideNav extends Component {
  render () {
    return (
      <div className = "sideNavBlock">
        <h3> Code Stumble </h3> <br /> <br />
        <SideNavIMG /> <br /> <br /> <br />
        <SideNavLinks />
      </div>
    )
  } 
}


// Porfolio image (retro sunset)
const SideNavIMG = () => (
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


class SideNavLinks extends Component {
  render() {
    return (
      <div className="linkBox">
        <ul>

          <Link to="/">
            <li>
              <i className="fa fa-home my-float"></i>
              <span> Home</span>
            </li>
          </Link> <br />
          
          <Link to="about">
            <li>
              <i className="fa fa-user my-float"></i>
              <span> About</span>
            </li>
          </Link> <br />

          <Link to="articles">
            <li>
              <i className="fa fa-list-ul my-float"></i>
              <span> Article Index</span>
            </li> <br />
          </Link>
        </ul>
      </div>
    )
  }
}

export default SideNav;