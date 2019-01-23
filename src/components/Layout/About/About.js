import React, { Component } from 'react';
import AboutIMG from './AboutIMG/AboutIMG';
import AboutSecret from './AboutSecret';
import {Link} from '@reach/router';
import './about.css';


/* TODO:
        --> 
*/
class About extends Component {
  render() {
    return (
      <div className="About-container container-fluid">

        <div className="About-info-left col-lg-4 col-xs-3">
          <p>TJ</p>
          <br />
          <br />
          <br />
          <p>Front End</p>
        </div>

        <AboutIMG className="AboutIMG col-lg-4 col-xs-3" />

        <div className="About-info-right col-lg-4 col-xs-3">
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
                  <i className="fa fa-github" aria-hidden="true"></i>
                  <span> Github</span>
              </a>
            </li>

            {/* Left - LinkedIn */}
            <li>
              <a href="https://www.linkedin.com/in/anthonyallen-tj/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  <span> LinkedIn</span>
              </a>
            </li>
          
          </ul>

          <ul className="About-links-inner">
            {/* Right - Angel List */}
            <li>
              <a href="https://angel.co/anthony-j-allen?public_profile=1">
                <i className="fa fa-angellist" aria-hidden="true"></i>
                  <span> Angel List</span>
              </a>
            </li>

            {/* Right - SOMETHING */}
            <li>
              <a href="https://codestumble.com/explore">
              <i className="fa fa-cogs" aria-hidden="true"></i>
                  <span> My Projects</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Commented message for fellow Developers */}
        <AboutSecret />
      </div>
      
    )
  }
}

export default About;