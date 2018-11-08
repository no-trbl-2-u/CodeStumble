import React, { Component } from 'react';

import DemoCard from './DemoCard/DemoCard'

import './demos.css'

class Demos extends Component {
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
            <DemoCard />
            <DemoCard />
            <DemoCard />
          </div>
        </div>
      </div>
        
      </div>
    );
  }
}

export default Demos;