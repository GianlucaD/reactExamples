import React from 'react';
import Users from './components/Users';
import UsersFunc from './components/UsersFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>here are the users</h1>
      <div class="wrapper">
        <div class="box a">
          <h2>Functional Component</h2>
          <UsersFunc />
        </div>
        <div class="box b">
          <h2>Class Component</h2>
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
