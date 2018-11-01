// App.js
import React, { Component } from 'react';
import { Router } from '@reach/router'

import SideNav from '../components/sideNav/SideNav';
import NavButton from '../components/NavButton/NavButton'
import Content from '../components/content/Content';
import ArticleIndex from '../components/content/ArticleIndex/ArticleIndex';
import About from '../components/content/About/About.js'
import Article from '../components/content/Article/Article'
import Home from '../components/content/Home/Home'

import articles from '../components/content/Article/md_articles/index'

// Import the App's css
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      articles,
    }
  }

  componentDidMount() {
  }

  render() {
    const {articles} = this.state

    return (
      <div className="App container-fluid">
        <SideNav/>
        {/* By splitting Content, the Router renders
                the child component within Content */}
        <Content>
          <Router>
            <Home path='/'/>
            <About path='/about' />
            <ArticleIndex 
              path='/articles'
              articles={articles} 
            />
            <Article
              path='/articles/:articleId'
              articles={articles}
            />
          </Router>
        </Content> 

        <NavButton />
      </div>
    );
  }
}

export default App;
