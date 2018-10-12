import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  let sideBar = document.getElementsByClassName('sideNavBlock');
  sideBar[0].addEventListener('click', () => {
    alert("Okay, nevermind, this is easy!");
  })
})
