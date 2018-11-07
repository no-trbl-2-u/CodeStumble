import React, { Component } from 'react';
import AboutIMG from './AboutIMG/AboutIMG'
import './about.css';


/* TODO:
        -> Write a little about who I am and what this site is for
        -> Create a route to include a demos/projects section
*/
class About extends Component {
  render() {
    return (
      <div className="About-container container-fluid">

        <div className="About-info-left col-lg-4">
          <p>TJ</p>
          <br />
          <br />
          <br />
          <p>Front End</p>
        </div>

        <AboutIMG className="AboutIMG col-lg-4" />

        <div className="About-info-right col-lg-4">
          <p>Allen</p>
            <br />
            <br />
            <br />
          <p>Web-Developer</p>
        </div>

        <div className="About-links">
          <ul>
            <li>Place One</li>
            <li>Place Two</li>
            <li>Place Three</li>
          </ul>
        </div>
      
      </div>
      
    )
  }
}

export default About;