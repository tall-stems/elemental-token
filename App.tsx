import * as React from 'react';
import { useState } from 'react';
import './style.scss';
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
    console.log(view);
  };

  const gameOver = () => {
    setView('GameOver');
  };

  const titleScreen = () => {
    setView('Title');
  };

  return (
    <div>
      <Title startClick={startGame} />
    </div>
  );
}
