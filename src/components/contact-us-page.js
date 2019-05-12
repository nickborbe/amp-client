import React, { Component } from 'react';

import '../styles/contact.css';
import '../styles/css/all.css'


import SponsoredAd from './layout-components/sponsored-ad'




class ContactUsPage extends Component {
  render() {
    return (

      <div>

        <div className="p-wrapper">
    <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights. Fanny pack quinoa sustainable, affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore wayfarers everyday kogi.</p>
        </div>


        <div className="orange-form">
            <form>

        <div className="fieldSet">
                <label>CONTACT US- DROP DOWN TO SELECT SUBJECT</label>
                <select>
                    <option>FAN MAIL</option>
                    <option>QUESTION/ANSWER</option>
                    <option>RE: CONTEST</option>
                </select>
        </div>


        <div className="fieldSet">
            <label>NAME</label>
            <input placeholder="John Doe"></input>
        </div>

        <div className="fieldSet">
            <label>EMAIL</label>
            <input placeholder="JohnDoe@email.com"></input>
        </div>

        <div className="fieldSet">
            <label>MESSAGE</label>
            <textarea></textarea>
        </div>



            <button>SEND</button>
            </form>
        </div>

 


        


      </div>
    );
  }
}

export default ContactUsPage;
