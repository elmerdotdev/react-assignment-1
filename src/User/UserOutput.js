import React from 'react';

const UserOutput = (props) => {
  const descStyle = {
    fontSize: '.8rem',
    lineHeight: '1.5',
  };

  let username = null;
  if (props.username) {
    username = <span style={props.userStyle}>{props.username}</span>;
  }

  return (
    <div style={props.textStyle}>
      <p>Hello {username}</p>
      <p style={descStyle}>
        <em>{props.children}</em>
      </p>
    </div>
  );
};

export default UserOutput;
