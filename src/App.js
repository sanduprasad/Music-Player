import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import List from './Components/List/List';
import Profile from './Components/Profile/Profile';
import Player from './Components/Player/Player';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-auto-m">
        <Navigation />
        <Profile />
        <List />
        <Player />
      </div>
    );
  }
}

export default App;
