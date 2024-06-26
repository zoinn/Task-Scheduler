import './App.css';
import { MantineProvider, createTheme} from '@mantine/core';

const theme = createTheme({
  // Define your custom theme here if needed
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="task-scheduler">
        <h1>Task Scheduler</h1>
        <div className="tasks">
          <h2>Tasks</h2>
          <button className="button">Add Task</button>
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
