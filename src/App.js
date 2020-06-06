import React from 'react';
import logo from './babslabs-monkey-logo-portfolio.png';
import space from './components/Space';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          href="https://code-songs.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Songs
        </a>
      </header>
    </div>
  );
}

export default App;
