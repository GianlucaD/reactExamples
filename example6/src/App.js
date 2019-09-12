import React from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example 1</h1>
        <ClassComponent name="myproperty"/>
        <FunctionalComponent />
      </header>
    </div>
  );
}

export default App;
