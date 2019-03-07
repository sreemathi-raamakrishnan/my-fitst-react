import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <img src={logo} className="App-logo" alt="logo" />
       <h2> My First React App </h2>
       <img src={'images/info.png'} className="Info" alt="info" />
      </div>
    );
  }
}

export default Header;
