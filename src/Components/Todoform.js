import React from 'react';

const Todoform = ({ task, handleChange, handleSubmit }) => {

    return(
      <form onSubmit={handleSubmit}>
        <label style={{fontWeight: 'bold'}}>Task description: </label>
        <input type="text" name="name" placeholder="description" value={task} onChange={handleChange}/>
        <button style={{fontFamily: 'cursive', fontWeight:'bold'}}className="formButton">Create New Task</button>
      </form>
    )

}
export default Todoform;
