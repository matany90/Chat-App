import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainScreen from './Screens/MainScreen';
import ChatScreen from './Screens/ChatScreen';

const App = () => (
  <Router>
    <Route path="/" exact component={MainScreen} />
    <Route path="/chat" component={ChatScreen} />
  </Router>
)

export default App;
