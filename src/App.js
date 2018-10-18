import React, { Component } from 'react';
import SideNav from './components/sideNav/SideNav';
import Content from './components/content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <SideNav />
        <Content />
      </div>
    );
  }
}

export default App;
