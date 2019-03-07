import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Maincontent from './Maincontent.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Maincontent />
        <Footer />
      </div>
    );
  }
}

export default App;

