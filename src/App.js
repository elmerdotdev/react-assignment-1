import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './User/UserInput.css';
import Assignment from './Assignment/Assignment';
import './Assignment/Assignment.css';

class App extends Component {
  state = {
    users: [
      {
        username: 'elmerdotdev',
      },
    ],
  };

  changeUserName = (event) => {
    this.setState({
      users: [
        {
          username: event.target.value,
        },
      ],
    });
  };

  render() {
    const textStyle = {
      margin: '1rem 0 1.5rem',
    };

    const userStyle = {
      padding: '2px 4px',
      backgroundColor: 'green',
      color: '#fff',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="React Logo" />
          <div>
            <UserInput
              username={this.state.users[0].username}
              textStyle={textStyle}
              change={this.changeUserName}
            />
            <UserOutput
              username={this.state.users[0].username}
              textStyle={textStyle}
              userStyle={userStyle}
            >
              Nothing fancy. This just outputs whatever you enter inside the
              input box.
            </UserOutput>
          </div>
          <Assignment />
        </header>
      </div>
    );
  }
}

export default App;
