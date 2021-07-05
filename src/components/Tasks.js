import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div id ="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

Tasks.propTypes = {}; //ToDo

export default Tasks;
