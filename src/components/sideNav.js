import React, { Component } from 'react';
import portImg from './2018-07-23-00-00-25.png';


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
      <a href="http://www.facebook.com/pn143">
        <img className = {["portfolioImg", "img-circle"].join(' ')}
          alt = "WebmasterIMG"
          src = {portImg}
        /></a>


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
          <li><a href="https://www.google.com/search?q=bogus">Link Three</a></li>
        </ul>
      </div>
    )
  }
}


export default SideNav;