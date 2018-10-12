import React, { Component } from 'react';
import portImg from './me.jpg';


class SideNav extends Component {
  render () {
    return (
      <div className = "sideNavBlock">
        <h3> Code Stumble </h3> <br />
        <SideNavIMG /> <br />
        <SideNavLinks />
      </div>
    )
  }
}

class SideNavIMG extends Component {
  render () {
    return (
      <div className = "portImgBlock">
        <img className = {["portfolioImg", "img-circle"].join(' ')}
          alt = "WebmasterIMG"
          src = {portImg}
        />
      </div>
    )
  }
}

class SideNavLinks extends Component {
  render () {
    return (
      <div className = "linkBox">
        <ul>
          <li>Link One</li>
          <li>Link Two</li>
          <li>Link Three</li>
        </ul>
      </div>
    )
  }
}


export default SideNav;