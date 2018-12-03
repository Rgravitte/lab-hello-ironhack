import React, { Component } from 'react';
import './App.css';

class SecondComponent extends Component {
  render() {
  

  return(
    <div className="Woah-holder">
          <div>
           <img src="images/icon1.png" className="Woah" alt="logo"/>
           <h2>Declaritive</h2>
           <span>React makes it painless to create interactive UIs.</span>
           </div>
           <div>
           <img src="images/icon1.png" className="Woah" alt="logo"/>
           <h2>Components</h2>
           <span>Build encapsulated components that manage their state</span>
           </div>
           <div>
           <img src="images/icon1.png" className="Woah" alt="logo"/>
           <h2>Single-Way</h2>
           <span>A set of immutable valuies are passed to the component's.</span>
           </div>
           <div>
           <img src="images/icon1.png" className="Woah" alt="logo"/> 
           <h2>JSX</h2>
           <span>Statically-typed, designed to run on modern browsers.</span>
           </div>
        </div>
  );
}

}

export default SecondComponent;