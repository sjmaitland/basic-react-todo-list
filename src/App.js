import React from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';


function App() {
  return (
    <main>
      <div className = "container">
        <h1 className = "title">Todo List</h1>
        <NewTaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App;