import React from 'react';
import { useTasks } from './TaskProvider';

export default function Task({ id, task, complete }) {
  const { setStatusTask } = useTasks();
  const checkTask = e => setStatusTask(id, e.target.checked);

  return (
    <ul>
      <li>
        <input 
          type = "checkbox"
          onChange = { checkTask }
        />
        <span
          className = { complete ? 'task--done' : '' }>
            { task }
          </span>
      </li>
    </ul>
  )
}

