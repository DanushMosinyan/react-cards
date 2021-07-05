import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      number: 54,
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at Scool",
      number: 44,
      reminder: true,
    },
    {
      id: 3,
      text: "FoodShopping",
      number: 4,
      reminder: false,
    },
  ]);

  const AddTask = () => {
    var item = {
      text: "",
      number: parseInt(Math.random() * 100),
      reminder: false,
    };
    if (tasks.length == 0) {
      item.id = 0;
    } else item.id = tasks[tasks?.length - 1].id + 1;
    tasks.push(item);
    var newTasks = JSON.parse(JSON.stringify(tasks));
    setTasks(newTasks);
  };

  const sortTasks = () => {
    var newTasks = JSON.parse(
      JSON.stringify(
        tasks.sort(function (a, b) {
          return a.number - b.number;
        })
      )
    );
    for (let index = 0; index < newTasks.length; index++) {
      const element = newTasks[index];
      element.id = index;
    }
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="body">
      <div className="container" scrollbar>
        <Header onAdd={AddTask} onSort={sortTasks} />
        <div className="taskContainer">
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
        <footer>
          footer
        </footer>
      </div>
      <div>instructions</div>
    </div>
  );
}

export default App;
