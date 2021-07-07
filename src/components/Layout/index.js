import Tasks from "../Tasks";

const Layout = ({ tasks, deleteTask }) => {
  return (
    <div className="body">
      <div className="container">
        <div className="taskContainer">
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
      <div>Instructions</div>
    </div>
  );
};

export default Layout;
