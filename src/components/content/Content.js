import React, { Component } from 'react';
import './content.css'

class Content extends Component {

  render () {
    return (
      <div className = "content col-sm-8 col-md-9 col-lg-10">
        <br />
        <h2 id="construction"><i>This is is currently under construction</i> </h2>
        <hr />

        {/* Render all children Components! */}
        {this.props.children}
      </div>
    )
  }
}

export default Content;