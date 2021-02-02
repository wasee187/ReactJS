import React from 'react';

const P2Count = (props) => {
  return (
    <p
      style={{
        backgroundColor: 'Blue',
        borderRadius: '50%',
        color: 'white',
        display: 'inline-block',
        width: '3em',
        height: '3em',
        paddingTop: '0.75em',
        textAlign: 'center',
        marginRight: '0.5em',
        fontWeight: 'bold',
        fontSize: '1.5em',
      }}
    >
      {props.count}
    </p>
  );
};

export default P2Count;
