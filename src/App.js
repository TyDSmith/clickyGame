import React, { Component } from 'react';
import './App.css';
import './game.css';
import TopHeader from './components/topheader'
import GameComponent from './components/gamebox';
import cryptocards from './cryptocards.json';

class App extends Component {
  state= {
    cryptocards,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };


  render(){
    return (
      <div className="App">
        <TopHeader />
        <h1>Clicky Game</h1>
        <h2>Click every crypto <strong>once</strong>. If you click the same one twice your score will be reset!</h2>
        <GameComponent />
      </div>
    );
  }

}

export default App;
