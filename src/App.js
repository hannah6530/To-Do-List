import React from 'react';
import Active from './Components/Active';
import Todoform from './Components/Todoform';
import './App.css';
import { createStore } from 'redux'


class App extends React.Component {


  render() {

    return (
      <div id="main-content">
        <h1>Task Lister</h1>
        <Todoform />

        <Active />

        </div>
    )

  }

}

export default App;
