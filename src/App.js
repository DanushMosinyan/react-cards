import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      number: 54,
    },
    {
      number: 44,
    },
    {
      number: 4,
    },
  ]);

  const addTask = () => {
    let newTasks = [...tasks];
    const item = {
      number: parseInt(Math.random() * 100),
    };
    newTasks.push(item);
    setTasks(newTasks);
  };

  const sortTasks = () => {
    let newTasks = [...tasks];
    newTasks = newTasks.sort((a, b) => {
      return a.number - b.number;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
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
        <div>instructions</div>
      </div>
    </div>
  );
}

export default App;
