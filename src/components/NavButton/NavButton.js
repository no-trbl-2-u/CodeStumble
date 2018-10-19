import React, {Component} from 'react'
import './navButton.css';

class NavButton extends Component{
  render () {
    return(
      <div>
        {/* Actual floating button */}
        <a href="#" className="float">
          <i className="fa fa-plus my-float"></i>
        </a>

        {/* Floating label */}
        <div className="label-container">
          <div className="label-text"> Navigate </div>
          <i className="fa fa-play label-arrow"> </i>
        </div>
      </div>
    )
  }
}

export default NavButton;