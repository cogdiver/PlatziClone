import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import '../assets/styles/_gobals.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
