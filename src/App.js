import React from 'react';
import Currenttodo from './Currenttodo'
import Todoform from './Todoform'
import './App.css';

function App() {
  return (
    <div id="main-content">
      <h1>Task Lister</h1>
      <Todoform />

      <Currenttodo />

      </div>
  );
}

export default App;
