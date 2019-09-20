import React from 'react'

class Todo extends React.Component{

  state = {
    checked: false
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleClick = () => {
    if(this.state.checked){
      this.props.handleComplete(this.props.title)
    }

  }

  render(){
    const {title} = this.props

    return (
      <div className="ui checked checkbox">
        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck} onClick={this.handleClick}/>
        <label>Completed {title}</label>
      </div>
    )

  }

}
export default Todo;
