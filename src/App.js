import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import GameTimer from './components/GameTimer';
import NewGameButton from './components/NewGameButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">React Mastermind</header>
      <GameBoard />
      <ColorPicker />
      <GameTimer />
      <NewGameButton />
      <Footer />
    </div>
  );
}

export default App;