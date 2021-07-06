import { FaTimes } from "react-icons/fa";
import "./task.css"

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task)}
        />
      </h3>
      <p>{task.number}</p>
    </div>
  );
};

export default Task;
