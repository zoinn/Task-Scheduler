import { useState } from 'react';
import './App.css';
import { MantineProvider, createTheme} from '@mantine/core';

const theme = createTheme({
  // Define your custom theme here if needed
});

function App() {
  const [tasks, setTasks] = useState(['Task 1']);

  function addTask() {
  setTasks((prevTasks) => [...prevTasks, `Task ${prevTasks.length + 1}`]);
  // Add a task
  // add to a list like form?
  // add a new element to page
  };

  function addSubTask() {
  // add subtask to a task
  };

  return (
    <MantineProvider theme={theme}>
      <div className="task-scheduler">
        <h1>Task Scheduler</h1>
        <div className="tasks">
          <h2>Tasks</h2>
          <button className="button" onClick={() => addTask()}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}><button aria-label="buttontask">{task}</button></li>
            ))}
          </ul>
          <div className="subtasks">
            <h2>Sub Tasks</h2>
            <button className="button">Add Sub Task</button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
