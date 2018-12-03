import React, { Component } from 'react';
import './App.css';
import SecondComponent from './SecondComponent';

class App extends Component {
  render() {
  


    return (
      <div className="App">
        <header className="App-header">
        <div>
        <nav>
          <img src='images/ironhack-logo.svg' className="App-logo" alt="logo" />
          </nav>
          <div className="Header-holder">
          <h1 className="Header-react">Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
          <button className="Awesome-button">Awesome!</button>
          </div>
          </div>
         
        </header>

          <SecondComponent />
        
      </div>
    );
  }
}

export default App;
