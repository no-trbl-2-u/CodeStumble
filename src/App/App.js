// App.js
import React, { Component } from 'react';
import { Router } from '@reach/router';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

import SideNav from '../components/SideNav/SideNav';
import NavButton from '../components/NavButton/NavButton';
import Layout from '../components/Layout/Layout';
import ArticleIndex from '../components/Layout/ArticleIndex/ArticleIndex';
import About from '../components/Layout/About/About';
import Article from '../components/Layout/Article/Article';
import Home from '../components/Layout/Home/Home';
import Demos from '../components/Layout/Demos/Demos';

// DEMOS
import MainGame from '../components/Layout/Demos/GameOfLife/Main/Main'
import DrumMachine from '../components/Layout/Demos/DrumMachine/DrumMachine';
import Clock from '../components/Layout/Demos/Clock/Clock';
import CSSVariables from '../components/Layout/Demos/CSSVariables/CSSVariables';
import FlexGallery from '../components/Layout/Demos/FlexGallery/FlexGallery';

import articles from '../components/Layout/Article/md_articles/index';

// Import the App's css
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      articles,
    }
  }

  highlightCode() {
    const codeCollection = [...document.getElementsByTagName('code')]
    codeCollection.map(eaBlock => hljs.highlightBlock(eaBlock))
  }

  render() {
    const {articles} = this.state

    return (
      <div className="App container-fluid">
        <SideNav/>
        {/* By splitting Layout, the Router renders
                the child components within Layout */}
        <Layout>
          <Router>
            <Home 
              path='/'
              highlightCodeBlock={this.highlightCode}
            />

            <About path='/about' />

            <ArticleIndex 
              path='/articles'
              articles={articles} 
            />

            <Article
              path='/articles/:articleId'
              articles={articles}
              highlightCodeBlock={this.highlightCode}
            />

            <Demos path='/explore' />
              <MainGame path='/explore/gameoflife' />
              <DrumMachine path='/explore/drummachine' />
              <Clock path='/explore/clock' />
              <CSSVariables path='/explore/cssvariables' />
              <FlexGallery path='/explore/flexgallery' />
          </Router>
        </Layout> 

        <NavButton />
      </div>
    );
  }
}

export default App;
