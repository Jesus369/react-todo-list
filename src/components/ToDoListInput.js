import React, { Component } from 'react';

export class ToDoListInput extends Component {
  // FUNCTIONS - SCRIPT
  constructor(props) {
    super(props)
    this.addTask = this.addTask.bind(this)
    this.markAsCompleted = this.markAsCompleted.bind(this)
    this.confirmDeleteButton = this.confirmDeleteButton.bind(this)

    this.state = {
      tasks : [],
      completedTasks : []
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

  markAsCompleted(task) {
    let tasks = this.state.tasks
    let pendingTasks = tasks.filter(function(pendAway){
      return pendAway !== task
    })
    let completedTasks = this.state.completedTasks
    completedTasks.push(task)
    this.setState({
      tasks : pendingTasks,
      completedTasks : completedTasks
    })
    console.log(this.state.completedTasks)
  }

  confirmDeleteButton(completedTask) {
    let completedTasks = this.state.completedTasks
    let deletedTasks = completedTasks.filter(function(e){
      return e !== completedTask
    })
    completedTasks.pop(deletedTasks)
    this.setState({
      completedTasks: deletedTasks
    })
    console.log(completedTasks)
  }

  render() {

    return(
      <div className="styleList">

        <div className="input_div">
          <input className="styleInput" ref={(taskVal) => this.taskVal = taskVal} type="text"/><br/>
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <div className="title">Pending Tasks</div>
        <Pending tasks={this.state.tasks} completedCallback={this.markAsCompleted}/>
        <div className="title">Completed Tasks</div>
        <Completed completedTasks={this.state.completedTasks} deleteTaskButtonCallback={this.confirmDeleteButton}/>
      </div>
    )
  }
}

// ========================================================

export class Pending extends Component {

  constructor(props) {
    super(props)
    this.checkBox = this.checkBox.bind(this)
  }

  checkBox(task) {
    this.props.completedCallback(task)
  }

  render() {

    let tasks = this.props.tasks
    let taskItems = tasks.map(function(task,index) {
      return <li className="styleItem" key={index+Date.now()}>{task}<input key={index+Date.now()} onClick={(e) => this.checkBox(task)} type="checkbox"/></li>
    }.bind(this));

    return(
      <div className="listContainer">
        {taskItems}
      </div>
    )
  }
}

// ========================================================

export class Completed extends Component {

  constructor(props) {
    super(props)
    this.deleteTaskButton = this.deleteTaskButton.bind(this)
  }

  deleteTaskButton(completedTask) {
    this.props.deleteTaskButtonCallback(completedTask)
  }

  render() {
    let completedTasks = this.props.completedTasks

    let displayingTask = completedTasks.map(function(completedTask,index) {
      return <li className="styleItem" key={index+Date.now()}>
              {completedTask}
              <button className="delete_button" onClick={(e) => this.deleteTaskButton(completedTask)}>Delete</button>
              </li>
            }.bind(this))

    return(
      <div className="listContainer">
        {displayingTask}
      </div>
    )
  }
}
