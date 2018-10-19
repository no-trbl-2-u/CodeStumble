import React, { Component } from 'react';
import SideNav from './components/sideNav/SideNav';
import NavButton from './components/NavButton/NavButton'
import Content from './components/content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <SideNav />
        <Content />
        <NavButton />
      </div>
    );
  }
}

export default App;
