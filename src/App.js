import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flashcards from './Flashcards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Flash Cards!</h1>
        </header>
      <Flashcards />
      </div>
    );
  }
}


export default App;
