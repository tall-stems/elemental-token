import React = require('react');
interface GameOverProps {
  onStartOver: Function;
  onExit: Function;
}

export const GameOver = ({ onStartOver, onExit }: GameOverProps) => {
  return (
    <div>
      <h1>Game Over</h1>
      {/* If win */}
      <h2>Great job! You won!</h2>
      {/* If loss */}
      <h2>You'll get them next time.</h2>
      <p>Want to play again?</p>
      <button onClick={() => onStartOver()}>Yes</button>
      <button onClick={() => onExit()}>No</button>
    </div>
  );
};

export default GameOver;
