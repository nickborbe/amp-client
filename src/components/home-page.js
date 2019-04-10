import React, { Component } from 'react';

import '../styles/homepage.css';
import '../styles/css/all.css'


class HomePage extends Component {
  render() {
    return (
      <div>
        <header id="hp-header">

        <span className="hp-header-left-icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        </span>
          

          ANA MARIA POLO

          <span className="hp-header-right-icons">

          <i class="fas fa-user"></i>
          <i class="fas fa-shopping-cart"></i>
          </span>
        </header>

        <nav className="hp-navbar">
          <a href="#">About</a>
          <a href="#">Contacts</a>
          <a href="#">Videos</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>

        <div id="hp-main-image">
         

        </div>


        <h2 id="latest-vid-h2">Latest Featured Videos</h2>
        <section id="mid-hp-vids">


        
        <div className="left">

        <img src="/images/fake-vid.png"/>
        </div>


        <div className="right">

        <div id="first-row-vid-thumbs">
          <img src="/images/fake-vid-thumb.png" />
          <img src="/images/fake-vid-thumb.png" />
        </div>

        <div id="second-row-vid-thumbs">

          <img src="/images/fake-vid-thumb.png" />
          <img src="/images/fake-vid-thumb.png" />
        </div>
        
        </div>
        </section>

      <button id="see-all-vids-btn">See All</button>

        <div id="sponsored-hp-ad">
        Sponsored Ad Goes Here
        </div>

        <section id="contest-section">

        {/* <div class="left-side">

        <h2>Latest Constest!</h2>

        <p>some info about the contest</p>

        <button>Enter Constest</button>
        </div> */}

        {/* <div class="right-side">
        <img src="#"></img>
        </div> */}


        </section>



        <div id="hp-carousel-ads">

        <i class="fas fa-angle-left"></i>

        <img src="/images/carousel-1.png" />

        <img src="/images/carousel-2.png" />

        <img src="/images/carousel-3.png" />

        <i class="fas fa-angle-right"></i>

        </div>


        <section id="hp-soc-med-section">

        <h2>Social Medial Previews</h2>

       <div id="hp-soc-med-prevs">

        <div id="facebook-div"></div>

        <div id="instagram-div"></div>

        <div id="twitter-div"></div>

       </div>

        </section>

        <section id="non-prof-section">

        <div id="non-prof-left-side">
          <h2>This Section Is For Non Profit Work</h2>
          <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights. Fanny pack quinoa sustainable, affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore wayfarers everyday kogi. Mlkshk pug artisan cliche XOXO, vexillologist gochujang quinoa shoreditch affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>
          <button>Donate Today</button>
        </div>

        <img src="/images/nonprofit-section.png" id="nonprofimage" />

        </section>



        <div id="hp-sponsored-add-bottom">
        Sponsored Ad #2 (eventually)
        </div>


      <h2>Picture Gallery Fill Space</h2>

      <section id="hp-gallery">


      <div id="hp-gallery-container">
      </div>

      </section>

      <button>View All</button>

      <div id="join-the-club">

      <h2>Join The Club!</h2>
      <p>some stuff about how awesome it is</p>

      <form>
        <input placeholder="Email Address"></input>
        <button>Subscribe</button>
      </form>
      
      </div>

      <footer>
        <div class="column">
        <h6> Connect </h6>
        <div>
          <img></img>
          <p>Facebook</p>
        </div>
        <div>
          <img></img>
          <p>Twitter</p>
        </div>
        <div>
          <img></img>
          <p>Instagram</p>
        </div>
        <div>
          <img></img>
          <p>You Tube</p>
        </div>
        
        </div>

        <div class="column">
        <h6> Shop </h6>
        <a>Ordering & Payment</a>
        <a>Shipping</a>
        <a>Returns</a>
        <a>FAQ</a>

        </div>
        <div class="column">
        </div>
        <div class="column">
        </div>
        <div class="column">
        </div>
      </footer>



   
      </div>
    );
  }
}

export default HomePage;
