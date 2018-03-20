import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

//containers
import Primary from './Primary';

//Components
import NavBar from '../components/app/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Primary/>
      </div>
    );
  }
}

export default App;
