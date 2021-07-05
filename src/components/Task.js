import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  
  return (
    <div className="task">
      <h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.number}</p>
    </div>
  );
};

Task.propTypes = {}; // ToDo

export default Task;
