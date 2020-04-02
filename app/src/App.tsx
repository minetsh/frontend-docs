import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { basename } from './common/app';
import Home from './views/home';
import './App.scss';

function App() {
  return (
    <Router basename={basename}>
      <Route path="/*" component={Home} />
    </Router>
  );
}

export default App;
