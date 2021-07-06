import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([ ]);

  const addTask = () => {
    const newTasks = [...tasks];
    const item = {
      number: parseInt(Math.random() * 100),
    };
    newTasks.push(item);
    setTasks(newTasks);
  };

  const sortTasks = () => {
    const newTasks = [...tasks].sort((a, b) => {
      return a.number - b.number;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(taskToDelete);
    if (index > -1) {
      newTasks.splice(index, 1);
    }

    setTasks(newTasks);
  };

  return (
    <div className="main">
      <Header onAdd={addTask} onSort={sortTasks} />
      <div className="body">
        <div className="container">
          <div className="taskContainer">
            <Tasks tasks={tasks} onDelete={deleteTask} />
          </div>
        </div>
        <div>Instructions</div>
      </div>
    </div>
  );
}

export default App;
