import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 function getData() {
   fetch("https://jsonplaceholder.typicode.com/todos/1")
     .then((response) => response.json())
     .then((json) => {
       console.log("response:", json);
       return json;
     });
     
 }

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {JSON.stringify(getData())}
        </a>
      </header>
    </div>
  );
}

export default App;
