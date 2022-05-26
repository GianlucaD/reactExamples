import React from "react";
import LandingPage from "./pages/home/LandingPage";
import AboutPage from "./pages/about/AboutPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/about/:id"} element={<AboutPage />} />
    </Routes>
  );
}

export default App;
