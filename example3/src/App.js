import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import AboutPage from './pages/about';


function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/about"} component={AboutPage} />
    </Switch>
  );
}

export default App;
