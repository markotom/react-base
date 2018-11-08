import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      healthApiCheck: false,
    };
  }

  componentWillMount() {
    this.checkApiHealth();
  }

  async checkApiHealth() {
    const response = await fetch('/_health');
    const body = await response.json();
    this.setState({
      healthApiCheck: body.success,
    });
  }

  render() {
    const { healthApiCheck } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code> src/App.js </code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {healthApiCheck && <p>API is running.</p>}
          {!healthApiCheck && <p>API is not running.</p>}
        </header>
      </div>
    );
  }
}

export default App;
