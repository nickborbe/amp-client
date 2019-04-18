

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Carousel extends Component {
  render() {
      return(


        <div id="hp-carousel-ads">

        <i class="fas fa-angle-left"></i>

        <img src="/images/carousel-1.png" />

        <img src="/images/carousel-2.png" />

        <img src="/images/carousel-3.png" />

        <i class="fas fa-angle-right"></i>

        </div>
        
      )
  }
}

export default Carousel;



