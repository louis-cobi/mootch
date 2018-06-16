import React, { Component } from 'react';
import logo from './images/MOOTCH-Logo-Horizontal-blanc.png';
import './App.css';
import { render } from 'react-dom';
import { DuotoneImage } from 'react-duotone';


let messages = ["Match your mood", "How are you feeling ?", "Let us find it", "Simply the best", "Adidas"],
message = messages[Math.floor(Math.random() * messages.length)];

let randomBackground = ["http://java2s.com/style/demo/border.png","https://lemag.nikonclub.fr/wp-content/uploads/2017/07/08.jpg","https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fwww.2Egeo.2Efr.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fle-canyon-de-la-riviere-blyde-en-afrique-du-sud.2F1462232-1-fre-FR.2Fle-canyon-de-la-riviere-blyde-en-afrique-du-sud.2Ejpg/750x406/quality/65/le-canyon-de-la-riviere-blyde-en-afrique-du-sud.jpg","https://www.voyager-en-asie.com/wp-content/uploads/2017/02/parc-national-de-banff-paysage-canada.jpg","https://www.travelercar.com/wp-content/uploads/2016/04/4a36e314016aa914f203ea6b7d579dc6_large.jpeg"],
test = randomBackground[Math.floor(Math.random() * randomBackground.length)];
let correctbackground = "url(" + test + ")"

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
class App2 extends Component {
  render() {
    return <DuotoneImage
      className='image-preview'
      alt='Your image description'
      src='./images/duotone/Duotone Godzilla.jpg'
      primaryColor='#eb8071'
      secondaryColor='#2c2a66' />;
  }
}
class App extends Component {
  render() {
    return (
      <div className="App" style={{'height': "100vh","backgroundImage": correctbackground}}>
        <App2 />
        <Header/>
      </div>
    );
  }
}

export default App;
