import React, { Component } from 'react';
import { Link } from '@reach/router'; 
import portImg from './images/Retro landscape.jpg';
import './sideNav.css'

class SideNav extends Component {
  render () {
    return (
      <div className="sideNavBlock">
        <h2> &lt; CS /&gt; </h2>
        <SideNavIMG />
        <SideNavLinks />
      </div>
    )
  } 
}


// Porfolio image (retro sunset)
const SideNavIMG = () => (
  <div className="portImgBlock">
    <Link to="/">
      <img 
        className="portfolioImg img-circle"
        alt="SideNavIMG"
        src={portImg}
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
              <i className="fa fa-home"></i>
              <span> Home</span>
            </li>
          </Link>

          <Link to="articles">
            <li>
              <i className="fa fa-list-ul"></i>
              <span> Learn </span>
            </li>
          </Link>

          <Link to="explore">
            <li>
              <i className="fa fa-magic"></i>
              <span> Explore </span>
            </li>
          </Link>
          
          <Link to="about">
            <li>
              <i className="fa fa-user"></i>
              <span> About Me</span>
            </li>
          </Link> 
        </ul>
      </div>
    )
  }
}

export default SideNav;