import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';


export default ({ path = '' }) => (
  <Router basename={path}>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);
