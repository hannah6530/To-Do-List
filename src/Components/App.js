import React from 'react';
import Active from './Active'
import Todoform from './Todoform'
import './App.css';

function App() {
  return (
    <div id="main-content">
      <h1>Task Lister</h1>
      <Todoform />

      <Active />

      </div>
  );
}

export default App;
