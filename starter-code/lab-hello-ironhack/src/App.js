import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  


    return (
      <div className="App">
        <header className="App-header">
        <div>
        <nav>
          <img src='images/ironhack-logo.svg' className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > 
            Learn React
          </a> */}
          </nav>
          <div className="header-holder">
          <h1 className="header-react">Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
          <button class="awesome-button">Awesome!</button>
          </div>
          </div>
        </header>
        <div className="woah-holder">
          <div>
           <img src="images/icon1.png" className="woah" alt="logo"/>
           <h2>Declaritive</h2>
           <span>React makes it painless to create interactive UIs.</span>
           </div>
           <div>
           <img src="images/icon1.png" className="woah" alt="logo"/>
           <h2>Components</h2>
           <span>Build encapsulated components that manage their state</span>
           </div>
           <div>
           <img src="images/icon1.png" className="woah" alt="logo"/>
           <h2>Single-Way</h2>
           <span>A set of immutable valuies are passed to the component's.</span>
           </div>
           <div>
           <img src="images/icon1.png" className="woah" alt="logo"/> 
           <h2>JSX</h2>
           <span>Statically-typed, designed to run on modern browsers.</span>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
