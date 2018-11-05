// App.js
import React, { Component } from 'react';
import { Router } from '@reach/router'

import SideNav from '../components/SideNav/SideNav';
import NavButton from '../components/NavButton/NavButton'
import Layout from '../components/Layout/Layout';
import ArticleIndex from '../components/Layout/ArticleIndex/ArticleIndex';
import About from '../components/Layout/About/About.js'
import Article from '../components/Layout/Article/Article'
import Home from '../components/Layout/Home/Home'

import articles from '../components/Layout/Article/md_articles/index'

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
        {/* By splitting Layout, the Router renders
                the child component within Layout */}
        <Layout>
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
        </Layout> 

        <NavButton />
      </div>
    );
  }
}

export default App;
