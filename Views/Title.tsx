import * as React from 'react';

type TitleProps = {
  onClick: Function;
};

type TitleState = {};

class Title extends React.Component<TitleProps, TitleState> {
  render() {
    return (
      <div>
        <h1>Elemental Token</h1>
        <p>Game inspired by Fire Emblem.</p>
        <p>Press start to begin.</p>
        <button onClick={() => this.props.onClick()}>Start</button>
      </div>
    );
  }
}

export default Title;
