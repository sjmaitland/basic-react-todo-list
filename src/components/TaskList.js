import React from 'react';
import Task from './Task';
import { useTasks } from './TaskProvider';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className = "container--list">
      <div className = "task--list">
        {
          tasks.map((task, i) => 
            <Task key = { i } { ...task } />
          )
        }
      </div>
    </div>
  )
}
