import React, { Component } from 'react';
import './App.css';
import Status from './components/status'
import Send from './components/send'
import Transactions from './components/transactions'
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