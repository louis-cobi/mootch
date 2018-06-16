import React, { Component } from 'react';
import logo from './images/MOOTCH-Logo-Horizontal-blanc.png';
import './App.css';

let messages = ["Match your mood", "How are you feeling ?", "Let us find it", "Simply the best", "Adidas"],
message = messages[Math.floor(Math.random() * messages.length)];

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo-div">
          <img src={logo} className="App-logo" alt="Logo-Mootch" />
        </div>
        <div className="App-menu">
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Watchlists</li>
            <li>Movies</li>
            <li>Profil</li>
          </ul>
        </div>
      </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
