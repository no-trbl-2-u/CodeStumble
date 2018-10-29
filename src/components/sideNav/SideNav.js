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

// Simple functional component to wrap all the links
// TODO -> Spruce up links:
//      -> Find icons from fa for decoration
//      -> <icon> <text/link> {<icon>}
const SideNavLinks = () => (
  <div className="linkBox">
    <ul>
      <li>
        <i className="fa fa-home my-float"></i>
        <Link to="/"> Home</Link>
      </li><br />
      <li>
        <i className="fa fa-user my-float"></i>
        <Link to="about"> About</Link>
      </li><br />
      <li>
        <i className="fa fa-list-ul my-float"></i>
        <Link to="article"> Article Index</Link>
      </li><br />
    </ul>
  </div>
)

export default SideNav;