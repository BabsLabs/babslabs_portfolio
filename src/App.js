import React from 'react';
import logo from './babslabs-monkey-logo-portfolio.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio Site Coming Soon
        </p>
        <a
          className="App-link"
          href="https://github.com/BabsLabs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p>Featured Projects</p>
        <a
          className="App-link"
          href="https://sumocity.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SumoCity
        </a>
        <a
          className="App-link"
          href="https://babslabs-iss-tracker.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          International Space Station Tracker
        </a>
        <a
          className="App-link"
          href="https://code-songs.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Songs
        </a>
      </body>
    </div>
  );
}

export default App;
