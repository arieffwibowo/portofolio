import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class = "navbar fixed-top navbar-expand-md bg-light navbar-light">
          <a class="navbar-brand" href="#"><img class = "logo" src="logo.png" alt=""></img></a>
          <button class="navbar-toggler" type="button" data-toggle = "collapse" data-target= "#navCol">
              <span class = "navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id = "navCol">
              <ul class = "nav navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#About">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Education">Education</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Experience">Experience</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Skills">Skills</a>
                  </li>
                  
              </ul>
          </div>
        </nav>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
