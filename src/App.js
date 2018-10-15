import React, { Component } from 'react';
import SideNav from './components/sideNav/sideNav';
import Content from './components/content/content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Content />
      </div>
    );
  }
}

export default App;
