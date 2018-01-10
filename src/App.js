import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import References from "./components/References";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ModEX</h1>
            <h4 className="App-subtitle">Your modular index</h4>
        </header>
          <References/>
      </div>
    );
  }
}

export default App;
