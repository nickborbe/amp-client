import React, { Component } from 'react';

import '../styles/contests.css';
import '../styles/css/all.css'


import SponsoredAd from './layout-components/sponsored-ad'





import Footer from './layout-components/footer'

class ConestPage extends Component {
  render() {
    return (

      <div>

        <section id="contest-image-section">
        <img src="/images/nonprofit-section.png" id="contest-image" className="hide-when-tiny" />

        <div id="contest-right-side">
        <h2>This Would Be The Contest Image</h2>
        <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights. Fanny pack quinoa sustainable, affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore wayfarers everyday kogi. Mlkshk pug artisan cliche XOXO, vexillologist gochujang quinoa shoreditch affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>
        <button>Register</button>
        </div>
        </section>

        <SponsoredAd/>

        <section id="be-the-first-to-know-section">

        <h2>BE THE FIRST TO KNOW ABOUT GIVEAWAYS</h2>

        <p>A Short description about the contest or giveaway. This could decribe what to expect from the contest and hopefully leave the user wanting to learn more and register</p>

        <form>
          <input placeholder="Email Address"></input>
          <button>Subscribe</button>
        </form>

        </section>

       

        


      </div>
    );
  }
}

export default ConestPage;
