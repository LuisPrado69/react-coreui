import * as React from 'react';
import './App.scss';
import dotenv from 'dotenv';
dotenv.config();
import Noty from 'noty';
import '../node_modules/noty/lib/noty.css'
import '../node_modules/noty/lib/themes/mint.css'

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
