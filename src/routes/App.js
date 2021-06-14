import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../containers/Home/Home";
import Cursos from "../containers/Cursos/Cursos";
import Rutas from "../containers/Rutas/Rutas";
import Clases from "../containers/Clases/Clases";
import NotFound from "../containers/NotFound/NotFound";
import GlobalStyle from "./GlobalStyle";
//import Theme from "./Theme";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
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
