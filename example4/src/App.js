import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/about"} component={AboutPage} />
        <Route exact path={"/products/:id"} component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
