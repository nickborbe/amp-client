import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Header extends Component {
  render() {
      return(
        <header id="hp-header">

        <span className="hp-header-left-icons">
        <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="">
        <i class="fab fa-youtube"></i>
        </a>
        </span>
          

          ANA MARIA POLO

          <span className="hp-header-right-icons">

          <i class="fas fa-user"></i>
          <i class="fas fa-shopping-cart"></i>
          </span>
        </header>
      )
  }
}

export default Header;