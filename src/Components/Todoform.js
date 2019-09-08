import React from 'react';
import Active from './Active'

const Todoform = () => {

  return(

    <form id="create-task-form" action="#" method="post">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description" />
      <input type="submit" value="Create New Task" />
    </form>

  )

}
export default Todoform;
