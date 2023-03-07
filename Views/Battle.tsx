import * as React from 'react';

interface BattleProps {
  onExit: Function;
  onEnd: Function;
}

const Battle = ({ onExit, onEnd }: BattleProps) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    setTimeout(() => {
      onEnd();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const callExit = () => {
    // TODO: need to cancel interval if quit early
    // clearInterval(interval);
    onExit();
  };

  return (
    <div>
      <h1>Battle Happening</h1>
      <p>{counter}</p>
      <button onClick={() => callExit()}>Quit</button>
    </div>
  );
};

export default Battle;
