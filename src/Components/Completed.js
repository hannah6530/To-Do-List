import React from 'react'
import Todo from './Todo'

const Completed = (props) => {

  const { completedItems, handleDeleteCompleted } = props

  return(
    <div id="completedList">
      <h2 className="position">Completed</h2>
      <ul id="tasks">
      {
        completedItems.map(item => {
          return(
            <Todo key={item.id} title={item.title} deleteTask={handleDeleteCompleted} isCompleted={true}/>
          )
        })
      }
      </ul>
    </div>

  )
}
export default Completed
