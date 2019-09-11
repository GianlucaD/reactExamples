import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/home';
import AboutPage from './pages/about';
import PostsPage from './pages/posts';

function App() {
  return (
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/about"} component={AboutPage} />
        <Route path={"/posts"} component={PostsPage} />
      </Switch>
  );
}

export default App;
