import React, { Component } from 'react';
import { Router, Link } from '@reach/router'

import SideNav from './components/sideNav/SideNav';
import NavButton from './components/NavButton/NavButton'
import Content from './components/content/Content';

import ArticleIndex from './components/content/ArticleIndex/ArticleIndex';
import About from './components/content/About/About.js'
import Article from './components/content/ArticleIndex/Article/Article'
import Home from './components/content/Home/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <SideNav/>

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
