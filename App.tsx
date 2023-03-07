import * as React from 'react';
import { useState } from 'react';
import './style.scss';
import Battle from './Views/Battle';
import GameOver from './Views/GameOver';
import Title from './Views/Title';

/*
 * App component will handle switching between views.
 * Current Views: Title, Battle, Game Over.
 * Use state to change view.
 * Adjust shown components depening on state (no router currently).
 */
export default function App() {
  const [view, setView] = useState('Title');

  const startGame = () => {
    setView('Battle');
  };

  const gameOver = () => {
    setView('GameOver');
  };

  const titleScreen = () => {
    setView('Title');
  };

  return (
    <div>
      {'Title' === view && <Title onClick={startGame} />}
      {'Battle' === view && <Battle onExit={titleScreen} onEnd={gameOver} />}
      {'GameOver' === view && (
        <GameOver onStartOver={startGame} onExit={titleScreen} />
      )}
    </div>
  );
}
