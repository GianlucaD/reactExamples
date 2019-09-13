import React from 'react';
import MyContextProvider from './contexts/MyContext';
import Navbar from './components/Navbar';

function App() {

  
  return (
    <div className="App">
      <MyContextProvider>
        <Navbar />
        <h1>i'm here in my context</h1>
      </MyContextProvider>
    </div>
  );
}

export default App;
