import React from 'react';

class Todoform  extends React.Component {

  render(){
    const {task, handleChange, handleSubmit} = this.props;
    return(

      <form onSubmit={handleSubmit}>
        <label>Task description:</label>
        <input type="text" name="name" placeholder="description" value={task} onChange={handleChange}/>
        <button>Create New Task</button>
      </form>

    )

  }

}
export default Todoform;
