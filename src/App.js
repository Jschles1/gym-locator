import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-main">
          <Search />
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
