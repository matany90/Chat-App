import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    text: ''
  }

  async componentDidMount() {
    const res = await axios.get('https://chat-app-server-matan.herokuapp.com/');
    this.setState({ text: res.test });
  }

  render() {
    return (
      <div>
      {this.state.text}
      </div>
    );
  }
}

export default App;
