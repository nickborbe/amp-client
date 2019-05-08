import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page'

import { Switch, Route } from 'react-router-dom';


import Header from './components/layout-components/header'
import NavBar from './components/layout-components/navbar'

import Footer from './components/layout-components/footer'




class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} /> */}
        </Switch>

        <Footer />
   
      </div>
    );
  }
}

export default App;
