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
        <button onClick={this.toggleDarkMode}>
          {this.state.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Status />
        <Send />
        <Transactions />
      </div>
    );
  }
}

export default App;