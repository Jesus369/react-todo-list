import React, { Component } from 'react';
import {ToDoListInput} from './components/ToDoListInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoListInput/>
      </div>
    );
  }
}

export default App;
