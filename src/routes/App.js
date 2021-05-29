import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Cursos from '../containers/Cursos';
import Rutas from '../containers/Rutas';
import Clases from '../containers/Clases';
import NotFound from '../containers/NotFound';
import '../assets/styles/_generals.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cursos' component={Cursos} />
      <Route exact path='/rutas' component={Rutas} />
      <Route exact path='/clases' component={Clases} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
