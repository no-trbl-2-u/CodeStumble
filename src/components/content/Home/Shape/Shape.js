import React, { Component } from 'react';

import SVG from './SVG'

export default class Shape extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x_axis : 0,
      y_axis : 0,
    }
  }

  render () {
    return (
      <div className="shape">
        <SVG />
      </div>
    )
  }
}