import React, { Component } from 'react';

export class ToDoListInput extends Component {
  // FUNCTIONS - SCRIPT
  constructor(props) {
    super(props)
    this.addTask = this.addTask.bind(this)
    this.markAsCompleted = this.markAsCompleted.bind(this)


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
  }


  render() {

    return(
      <div>

        <div>
          <input ref={(taskVal) => this.taskVal = taskVal} type="text"/><br/>
          <button onClick={this.addTask}>Add Task</button>
        </div>

        Pending Tasks
        <Pending tasks={this.state.tasks} completedCallback={this.markAsCompleted}/>
        Completed Tasks
        <Completed completedTasks={this.state.completedTasks}/>
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
      return <li key={index+Date.now()}>{task}<input key={index+Date.now()} onClick={(e) => this.checkBox(task)} type="checkbox"/></li>
    }.bind(this));

    return(
      <div>
        {taskItems}
      </div>
    )
  }
}

// ========================================================

export class Completed extends Component {

  render() {
    let completedTasks = this.props.completedTasks
    let displayingTask = completedTasks.map(function(completedTask,index) {
      return <li key={index+Date.now()}>{completedTask}</li>
    })

    return(
      <div>
        {displayingTask}
      </div>
    )
  }
}
