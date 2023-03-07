import * as React from 'react';

type TitleProps = {
  startClick: Function;
};

type TitleState = {};

class Title extends React.Component<TitleProps, TitleState> {
  public buttonClick = () => {
    this.props.startClick;
  };

  render() {
    return (
      <div>
        <h1>Elemental Token</h1>
        <p>Game inspired by Fire Emblem.</p>
        <p>Press start to begin.</p>
        <button onClick={this.buttonClick}>Start</button>
      </div>
    );
  }
}

export default Title;
