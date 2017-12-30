import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-main">
        </div>
      </div>
    );
  }
}

export default App;
