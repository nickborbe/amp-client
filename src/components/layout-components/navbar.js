

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class NavBar extends Component {
  render() {
      return(

        <nav className="hp-navbar">
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <a href="#">Videos</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </nav>
        
      )
  }
}

export default NavBar;



