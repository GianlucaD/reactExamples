import React from "react";
import LandingPage from "./pages/home/LandingPage";
import AboutPage from "./pages/about/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/about/:id"} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
