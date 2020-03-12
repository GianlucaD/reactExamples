import React from "react";
import LoginContextProvider from "./contexts/LoginContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Navbar />
        <h1>i'm here in my context</h1>
      </LoginContextProvider>
    </div>
  );
}

export default App;
