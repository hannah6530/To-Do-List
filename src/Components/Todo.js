import React from "react";

class Todo extends React.Component {
  state = {
    checked: false
  };

  handleCheck = () => {
    //allows you to check and uncheck
    this.setState({
      checked: !this.state.checked
    });
  };

  handleClick = () => {
    this.props.handlecompletedList({
      title: this.props.title
    });
  };

  handleDeleteTask = () => {
    this.props.deleteTask(this.props);
  };

  render() {
    const { title } = this.props;
    let current_date = new Date();
    let formatted_date =
      current_date.getMonth() +
      1 +
      "/" +
      current_date.getDate() +
      "/" +
      current_date.getFullYear();

    return (
      
      { this.props.isCompleted?

      <div>

      {title}

      </div>

      :
      
      
      <div className="ui checked checkbox">  
         <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheck}
            onClick={this.handleClick}
          />
        
        <label
          style={{
            textDecorationLine: this.state.checked ? "line-through" : "none",
            textDecorationStyle: "solid",
            textDecorationColor: "red"
          }}
        >
          {title}
        </label>
        <button
          onClick={this.handleDeleteTask}
          style={{
            backgroundColor: "indigo",
            color: "white",
            position: "absolute",
            right: "-50px",
            top: "-5px"
          }}
          className="mini ui button"
        >
          {" "}
          X{" "}
        </button>
        <p
          style={{
            fontFamily: "cursive",
            color: "purple",
            position: "absolute",
            right: "-115px",
            top: "0px"
          }}
        >
          {formatted_date}
        </p>
      </div>
    }

    );
  }
}
export default Todo;
