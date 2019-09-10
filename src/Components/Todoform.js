import React from 'react';
import Active from './Active'

const Todoform = () => {

  return(

    <form id="create-task-form">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description" />
      <button>Create New Task</button>
    </form>

  )

}
export default Todoform;
