import React, { Component } from 'react';
import P1Count from './P1Count';
import P2Count from './P2Count';
import Winner from './Winner';
class Player extends Component {
  state = {
    Count1: this.props.count1,
    Count2: this.props.count2,
    WinnerP1: false,
    WinnerP2: false,
    disabled: false,
    resetDisabled: true,
  };
  LuckyWinner1 = () => {
    this.setState(() => ({
      WinnerP1: !this.WinnerP1,
      disabled: !this.disabled,
    }));
  };
  LuckyWinner2 = () => {
    this.setState(() => ({
      WinnerP2: !this.Winner2,
      disabled: !this.disabled,
    }));
  };
  handleReset = () => {
    this.setState({
      Count1: this.props.count1,
      Count2: this.props.count2,
      WinnerP1: false,
      WinnerP2: false,
      disabled: false,
      resetDisabled: true,
    });
  };
  getPlayer1Number = () => {
    this.setState(() => ({
      Count1: this.state.Count1 + 1,
      resetDisabled: false,
    }));
  };

  getPlayer2Number = () => {
    this.setState(() => ({
      Count2: this.state.Count2 + 1,
      resetDisabled: false,
    }));
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <P1Count count={this.state.Count1} /> VS{' '}
        <P2Count count={this.state.Count2} />
        <br />
        <button
          className='btn btn-warning'
          disabled={this.state.disabled}
          onClick={() => {
            this.getPlayer1Number();

            this.state.Count1 === 4 ? this.LuckyWinner1() : '';
          }}
        >
          Player1
        </button>{' '}
        <button
          className='btn btn-warning'
          disabled={this.state.disabled}
          onClick={() => {
            this.getPlayer2Number();
            this.state.Count2 === 4 ? this.LuckyWinner2() : '';
          }}
        >
          Player2
        </button>{' '}
        <button
          disabled={this.state.resetDisabled}
          className='btn btn-warning'
          onClick={this.handleReset}
        >
          Reset
        </button>
        <br />
        <br />
        <Winner Winner1={this.state.WinnerP1} Winner2={this.state.WinnerP2} />
      </React.Fragment>
    );
  }
}

export default Player;
