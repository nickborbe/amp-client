import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







class App extends Component {
  render() {
    return (
      <div className="App">

      <HomePage></HomePage>

      
   
      </div>
    );
  }
}

export default App;
