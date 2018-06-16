import React, { Component } from 'react';
import logo from './images/MOOTCH-Logo-Horizontal-blanc.png';
import './App.css';
import ImageFilter from 'react-image-filter';

let messages = ["Match your mood", "How are you feeling ?", "Let us find it", "Simply the best", "Adidas"],
message = messages[Math.floor(Math.random() * messages.length)];

let randomBackground = ["http://java2s.com/style/demo/border.png","https://lemag.nikonclub.fr/wp-content/uploads/2017/07/08.jpg","https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fwww.2Egeo.2Efr.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fle-canyon-de-la-riviere-blyde-en-afrique-du-sud.2F1462232-1-fre-FR.2Fle-canyon-de-la-riviere-blyde-en-afrique-du-sud.2Ejpg/750x406/quality/65/le-canyon-de-la-riviere-blyde-en-afrique-du-sud.jpg","https://www.voyager-en-asie.com/wp-content/uploads/2017/02/parc-national-de-banff-paysage-canada.jpg","https://www.travelercar.com/wp-content/uploads/2016/04/4a36e314016aa914f203ea6b7d579dc6_large.jpeg"],
test = randomBackground[Math.floor(Math.random() * randomBackground.length)];
let correctbackground = "url(" + test + ")"

let randomMovie = ["Interstellar", "Godzilla", "Man of Steel", "Poppey", "The Hobbit"],
randomfilm = randomMovie[Math.floor(Math.random() * randomMovie.length)];

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo-div">
          <a href=""><img src={logo} className="App-logo" alt="Logo-Mootch" /></a>
        </div>
        <div className="App-menu">
          <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>Discover</li></a>
            <a href=""><li>Watchlists</li></a>
            <a href=""><li>Movies</li></a>
            <a href=""><li>Profil</li></a>
          </ul>
        </div>
      </header>
    );
  }
}
class RandomMovie extends Component {
  render() {
    return(
      <div className="randomMovie">
        <h2>{randomfilm}</h2>
      </div>
    );
  }
}
class Backgroundimage extends Component {
  render(){
    return(
      <div className="backgroundimage">
        <ImageFilter
          image={test}
          filter={ 'duotone' }
          colorOne={ [44, 42, 102] }
          colorTwo={ [235, 128, 113] }>
        </ImageFilter>
        <RandomMovie/>
      </div>
    );
  }
}
class BackgroundHeader extends Component {
  render() {
    return(
      <div>
        <Header/>
          <Backgroundimage />
      </div>
    );
  }
}

class Catchphrase extends Component{
  render(){
    return(
      <div className="catchphrase">
        <h2>{message}</h2>
        <p>Find your movie tonight</p>
        <button>MOOTCH</button>
      </div>
    );
  }
}
class MainContener extends Component {
  render() {
    return(
      <div className="main-contener">
        <Catchphrase/>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <BackgroundHeader/>
        <MainContener/>
      </div>
    );
  }
}

export default App;
