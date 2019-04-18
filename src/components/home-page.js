import React, { Component } from 'react';

import '../styles/homepage.css';
import '../styles/css/all.css'


class HomePage extends Component {
  render() {
    return (
      <div>
        <header id="hp-header">

        <span className="hp-header-left-icons">
        <a href="https://www.facebook.com/AnaMariaPolo/">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/anapolotv?lang=en">  
          <i class="fab fa-twitter"></i>
        </a>
        <a href="">
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

        {/* <div id="facebook-div"></div> */}
        <div id="facebook-div" className="fb-page" data-href="https://www.facebook.com/AnaMariaPolo/" data-tabs="timeline" data-width="275" data-height="350" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AnaMariaPolo/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AnaMariaPolo/">Ana Maria Polo</a></blockquote></div>

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



      <section id="hp-gallery">

      <h2>Picture Gallery Fill Space</h2>

      <div id="hp-gallery-container">
      </div>
      <button>View All</button>

      </section>


      <div id="join-the-club">

        <div id="join-club-wrapper">


        <h2>Join The Club!</h2>

        <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>


        <form>
          <input placeholder="Email Address"></input>
          <button>Subscribe</button>
        </form>
        
        </div>
      </div>

      <footer id="the-footer">

        <div id="footer-img-contain">
        <img src="/images/name-and-sig.png"></img>
          
        </div>


        
        <div class="column">
        <h6> Connect </h6>
        <div>
          <i class="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </div>
        <div>
           <i class="fab fa-twitter"></i>
          <span>Twitter</span>
        </div>
        <div>
            
        <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </div>
        <div>
        <i class="fab fa-youtube"></i>
          <span>You Tube</span>
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
        <h6> Information </h6>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Ad Choices</a>
        <a>Contest Rules</a>
        <a>Contact Us</a>
        </div>

        <form>
          <h6> Subcribe To Our Newsletter</h6>
          <input placeholder="email address"/>
          <button>OK</button>

        </form>
       
      </footer>



   
      </div>
    );
  }
}

export default HomePage;
