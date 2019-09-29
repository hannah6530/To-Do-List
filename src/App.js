import React from 'react';
import Active from './Components/Active';
import Completed from './Components/Completed';
import Todoform from './Components/Todoform';
import './App.css';

class App extends React.Component {

  state = {
    items: [],
    task: '',
    id: 0,
    completedItems: [],
    isCompleted: false
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

  handleComplete = (newTask) => {
    this.setState({
      completedItems: [...this.state.completedItems, newTask],
    })
    // console.log(this.state.items)
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
        items={this.state.items}
        handleComplete={this.handleComplete}
        isCompleted={this.state.isCompleted}
        />
        <Completed
        completedItems={this.state.completedItems}
        />
      </div>
    )
  }
}

export default App;
