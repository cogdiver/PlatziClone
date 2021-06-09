import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Cursos from "../containers/Cursos";
import Rutas from "../containers/Rutas";
import Clases from "../containers/Clases";
import NotFound from "../containers/NotFound";
import "../assets/styles/_generals.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/rutas" component={Rutas} />
        <Route exact path="/clases" component={Clases} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
