

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class NavBar extends Component {
  render() {
      return(

        <nav className="hp-navbar">
        <a href="#">ABOUT</a>
        <a href="#">CONTACTS</a>
        <a href="#">VIDEOS</a>
        <a href="#">SHOP</a>
        <a href="#">CONTACT</a>
      </nav>
        
      )
  }
}

export default NavBar;



