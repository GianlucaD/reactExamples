import React from 'react';
import LandingPage from './pages/home';
import AboutPage from './pages/about';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage/>} />
      <Route path={"/about"} element={<AboutPage/>} />
    </Routes>
  );
}

export default App;
