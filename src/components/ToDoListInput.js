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
    tasks.push({
      title : this.taskVal.value
    })
    console.log(tasks)
    this.taskVal.value = ""
  }



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

        <Pending/>
        <Completed/>
      </div>
    )
  }
}

export class Pending extends Component {

  render() {

    var listContainer = {
      marginBottom: "2em"
    }

    var styleItem = {
      backgroundColor: "#5890D4",
      border: ".5px solid black",
      marginTop: "1em",
      padding: ".5em",
      color: "white"
    }

    return(
      <div style={listContainer}>
        Pending Items
        <li style={styleItem}>List Item 1</li>
        <li style={styleItem}>List Item 2</li>
      </div>
    )
  }
}

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
      Completed Tasks
      <li style={styleItem}>Completed Task 1</li>
      </div>
    )
  }
}
