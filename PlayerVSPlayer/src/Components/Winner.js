import React from 'react';

const Winner = (props) => {
  return (
    <React.Fragment>
      <p>Winning Score is 5</p>
      <p>{props.Winner1 ? 'Player 1 is a Winner' : ''}</p>
      <p>{props.Winner2 ? 'Player 2 is a Winner' : ''}</p>
    </React.Fragment>
  );
};

export default Winner;
