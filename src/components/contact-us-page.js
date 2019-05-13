import React, { Component } from 'react';

import '../styles/contact.css';
import '../styles/css/all.css'


import SponsoredAd from './layout-components/sponsored-ad'




class ContactUsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            answerShowing: false
        }
    }

    showAnswer(num){
        this.setState({answerShowing: num})
    }


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


        <section className="faq-section">

        <h2> FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="faq-drop" onClick={()=>{this.showAnswer(0)}}>
         <span>
        THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE.  PLEASE TAKE A MOMENT TO READ
        </span>
        <i className="fas fa-chevron-down" ></i>
        </div>
        {
            this.state.answerShowing === 0 &&  <div className="answer" id="an1">
            This is the answer to the question tiam hendrerit nulla sit amet diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit amet pharetra nulla, a interdum ligula. Maecenas finibus purus libero, at consequat neque consequat a. Vestibulum quis euismod eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc. Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt pulvinar erat, vitae fermentum augue euismod ultricies. Proin a purus at lorem vulputate porttitor id eu felis. Etiam maximus orci urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
        }
       

        <div className="faq-drop" onClick={()=>{this.showAnswer(1)}}>
         <span>
        THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE.  PLEASE TAKE A MOMENT TO READ
        </span>
        <i className="fas fa-chevron-down"></i>
        </div>
        {
            this.state.answerShowing === 1 &&  <div className="answer" id="an2">
            This is the answer to the question tiam hendrerit nulla sit amet diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit amet pharetra nulla, a interdum ligula. Maecenas finibus purus libero, at consequat neque consequat a. Vestibulum quis euismod eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc. Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt pulvinar erat, vitae fermentum augue euismod ultricies. Proin a purus at lorem vulputate porttitor id eu felis. Etiam maximus orci urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
        }
     

        <div className="faq-drop" onClick={()=>{this.showAnswer(2)}}>
         <span>
        THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE.  PLEASE TAKE A MOMENT TO READ
        </span>
        <i className="fas fa-chevron-down" ></i>
        </div>
        {
            this.state.answerShowing === 2 &&  <div className="answer" id="an3">
            This is the answer to the question tiam hendrerit nulla sit amet diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit amet pharetra nulla, a interdum ligula. Maecenas finibus purus libero, at consequat neque consequat a. Vestibulum quis euismod eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc. Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt pulvinar erat, vitae fermentum augue euismod ultricies. Proin a purus at lorem vulputate porttitor id eu felis. Etiam maximus orci urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
        }
     



        </section>
 


        


      </div>
    );
  }
}

export default ContactUsPage;
