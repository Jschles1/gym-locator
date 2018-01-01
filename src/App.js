import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-main">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
