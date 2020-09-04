import React from 'react';

const UserInput = (props) => {
  return (
    <div style={props.textStyle}>
      <input
        type="text"
        onChange={props.change}
        value={props.username}
        placeholder="Enter your name..."
      ></input>
    </div>
  );
};

export default UserInput;
