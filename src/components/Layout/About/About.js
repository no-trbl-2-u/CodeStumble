import React, { Component } from 'react';
import AboutIMG from './AboutIMG/AboutIMG';
import AboutSecret from './AboutSecret'
import './about.css';


/* TODO:
        --> 
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

        <div className="About-links container">
          <ul className="About-links-inner">
            
            {/* Left - Github */}
            <li>
              <a href="https://github.com/no-trbl-2-u">
                  <i className="fa fa-github"></i>
                  <span> Github</span>
              </a>
            </li>

            {/* Left - SOMETHING */}
            <li>Place Two</li>
          
          </ul>

          <ul className="About-links-inner">
            {/* Right - SOMETHING */}
            <li>Place Three</li>

            {/* Right - SOMETHING */}
            <li>Place Four</li>
          </ul>
        </div>

        {/* Commented message for fellow Developers */}
        <AboutSecret />
      </div>
      
    )
  }
}

export default About;