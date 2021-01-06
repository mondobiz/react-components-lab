import React from 'react';
import GuessPegs from './GuessPegs';
import GuessScore from './GuessScore';

const GuessRow = (props) => (
  <div className="component" id={`row-${props.rowNum}`}>
    Guess Row {props.rowNum}
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;
