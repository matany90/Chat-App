import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    text: ''
  }

  async componentDidMount() {
    const { data: { test } } = await axios.get('https://chat-app-server-matan.herokuapp.com/');
    this.setState({ text: test });
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
