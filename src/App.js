// Import libraries
import React, { Component } from 'react';
import { Router } from '@reach/router'

// Import all the other components that are direct children
import SideNav from './components/sideNav/SideNav';
import NavButton from './components/NavButton/NavButton'
import Content from './components/content/Content';
import ArticleIndex from './components/content/ArticleIndex/ArticleIndex';
import About from './components/content/About/About.js'
import Article from './components/content/ArticleIndex/Article/Article'
import Home from './components/content/Home/Home'

// Import the App's css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <SideNav/>

        {/* By splitting Content, the Router renders
                the child component within Content */}
        <Content>
          <Router>
            <Home path='/'/>
            <About path='/about' />
            <ArticleIndex path='/article' />
            <Article path='/article/:articleId'/>
          </Router>
        </Content> 

        <NavButton />
      </div>
    );
  }
}

export default App;
