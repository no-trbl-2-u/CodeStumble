/* eslint-disable jsx-a11y/img-has-alt */
import React, { Component } from 'react';

import DemoCard from './DemoCard/DemoCard';
import demos from './demoInfo';

import './demos.css'

class Demos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demos
    }
  }
  render() {
    return (
      <div className="Demo-container">

        {/* Header */}
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Demos</h1>
          </div>
        </section>

        {/* Album */}
      <div className="album py-5 bg-light">
        <div className="container-fluid">
          <div className="row">
            {this.state.demos
              .map((ea, index) =>{
                const {demoName, path, img, text, codeLink} = ea
                return (
                  <DemoCard
                    key={index}
                    demoName={demoName}
                    path={path}
                    image={img}
                    text={text}
                    codeLink={codeLink}
                  />
              )})}

          </div>
        </div>
      </div>
        
      </div>
    );
  }
}

export default Demos;