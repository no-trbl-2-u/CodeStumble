import React, { Component } from 'react';
import './content.css'

class Content extends Component {
  render () {
    return (
      <div className = "content">
        <br /><br /> <br /> <br />
        <h1>This is is currently under construction </h1>
        <br /> <br />
        <Article name="Defined in instantiation" />
      </div>
    )
  }
}

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name : "Defined in constructor - Name of Article",
    }
  }

  render () {
    return (
      <div>
        <p> This one is from the state of the comp </p>
        <p> name: {this.state.name} </p>
        <p> And this one is from the props set by parent comp </p>
        <p> name: {this.props.name} </p>
        <br />
        <p> This will be the content of the Article </p>
        <p> It will likely be in md format </p>
        <p> And placed here probably by some means of </p>
        <p> transforming a .md file! </p>
        <p> Here is a <a href="http://google.com">Test Link</a> &lt;- right there </p>
        <p> Notice how it does not share style with the NavBar </p>
      </div>
    )
  }
}

export default Content;