import React, { Component } from 'react';
import './App.css';
import Status from './components/status.js'
import Send from './components/send.js'
import Transactions from './components/transactions.js'
import axios from 'axios';



const endpoint = '/mine_block'
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  componentWillMount() {
    axios.get(endpoint);
  }

  render() {
  return (
    <div className={`App ${this.state.darkMode ? 'dark-mode' : ''}`}>
      <label className="toggle-label">
        {this.state.darkMode ? 'Dark Mode' : 'Light Mode'}
      </label>
      <input
        type="checkbox"
        className="toggle-input"
        checked={this.state.darkMode}
        onChange={this.toggleDarkMode}
      />
      <div
        className={`toggle-button ${this.state.darkMode ? 'checked' : ''}`}
        onClick={this.toggleDarkMode}
      ></div>
      <Status />
      <Send />
      <Transactions />
    </div>
    );
  }
}

export default App;