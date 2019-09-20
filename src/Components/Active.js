import React from 'react'
import Todo from './Todo'

const Active = (props) => {
  const { items } = props


  return(
    <div id="list">
      <h2>My Todos</h2>
      <ul id="tasks">
      {
        items.map(item => {
          return(
            <Todo key={item.id} title={item.title}/>
          )
        })
      }

      </ul>
    </div>

  )
}
export default Active;
