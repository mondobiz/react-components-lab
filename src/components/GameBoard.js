import React from 'react';
import GuessRow from './GuessRow';

const GameBoard = (props) => (
  <div className="component">
    GameBoard
    <GuessRow rowNum={1} />
    <GuessRow rowNum={2} />
  </div>
);

export default GameBoard;