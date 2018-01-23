import React, { Component } from 'react';

export class ToDoListInput extends Component {
  // FUNCTIONS - SCRIPT
  constructor(props) {
    super(props)
    this.addTask = this.addTask.bind(this)

    this.state = {
      tasks : []
    }
  }

  addTask() {
    let tasks = this.state.tasks
    let title = this.taskVal.value
    tasks.push(title)
    this.setState({
      tasks : tasks
    })
    this.taskVal.value = ""
  }

  // ========================================================

  render() {

    // STYLING - CSS
    var styleList = {
      backgroundColor : "#E39917",
      borderRadius: "5px",
      margin: "5em auto 0 auto",
      width: "20%"
    }

    var input_div = {
      margin: "0 auto 0 auto",
      textAlign: "center",
      width: "50%",
    }

    var styleInput = {
      marginTop: "2em",
      fontSize: "1em"
    }

    return(
      <div style={styleList}>

        <div style={input_div}>
          <input ref={(taskVal) => this.taskVal = taskVal} type="text" style={styleInput}/><br/>
          <button onClick={this.addTask}>Add Task</button>
        </div>

        Pending Tasks
        <Pending tasks={this.state.tasks}/>
        Completed Tasks
        <Completed/>
      </div>
    )
  }
}

// ========================================================

export class Pending extends Component {

  render() {

    var listContainer = {
      marginBottom: "2em"
    }

    var styleItem = {
      backgroundColor: "#97BCE8",
      border: "1.5px solid #004AA4",
      marginTop: "1em",
      padding: ".5em",
      color: "white"
    }

    let tasks = this.props.tasks

    function createTask(task,index) {
      return <li style={styleItem} key={index}>{task}<input type="checkbox"/></li>
    }

    let taskItems = tasks.map(createTask);

    return(
      <div style={listContainer}>
        {taskItems}
      </div>
    )
  }
}

// ========================================================

export class Completed extends Component {


  render() {
    var styleItem = {
      backgroundColor: "#5890D4",
      border: ".5px solid black",
      marginTop: "1em",
      padding: ".5em",
      color: "white"
    }
    return(
      <div>
      </div>
    )
  }
}
