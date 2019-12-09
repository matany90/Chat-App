import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainScreen from './Screens/MainScreen/MainScreen';
import ChatScreen from './Screens/ChatScreen/ChatScreen';

import './App.css';

const App = () => (
  <Router>
    <Route path="/" exact component={MainScreen} />
    <Route path="/chat" component={ChatScreen} />
  </Router>
)

export default App;
