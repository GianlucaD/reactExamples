import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/home";
import AboutPage from "./pages/about";
import PostsList from "./pages/posts/list";
import Single from "./pages/posts/single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/posts"} element={<PostsList />}>
          <Route exact path=":id" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
