import Task from "../Task";
import "./tasks.css"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div id ="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
