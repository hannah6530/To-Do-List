import React from 'react';
import Active from './Components/Active';
import Todoform from './Components/Todoform';
import './App.css';

class App extends React.Component {

  state = {
    items: [],
    task: '',
    id: 0,

  }

  handleInput = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: this.state.id,
      title: this.state.task
    }

    const updatedItems = [...this.state.items, newTask]

    this.setState({
      items: updatedItems,
      task: '',
      id: this.state.id + 1
    })
  }


  render() {

    return (
      <div id="main-content">
        <h1>Task Lister</h1>
        <Todoform
        handleChange={this.handleInput}
        handleSubmit={this.handleSubmit}
        task={this.state.task}
        />
        <Active
        items={this.state.items}/>
      </div>
    )

  }

}

export default App;
