import React from 'react'
import Todo from './Todo'

const Active = (props) => {
  const { items, handlecompletedList} = props


  return(
    <div id="activeList">
      <h2 className="position">Active</h2>
      <ul id="tasks">

          {
            items.map(item => {
              return(
                <Todo key={item.id} handlecompleted={handlecompletedList} title={item.title}/>
              )
            })
          }

      </ul>
    </div>

  )
}
export default Active;
