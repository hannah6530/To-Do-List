import React from 'react'

class Todo extends React.Component{

  render(){
    const {title} = this.props

    return (
      <div className="ui checked checkbox">
        <input type="checkbox" checked=""/>
        <label>Completed</label>
        {title}
      </div>
    )

  }

}
export default Todo;
