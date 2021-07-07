import Button from "../Button";
import "./header.css";

const Header = ({ title, onSort, onAdd }) => {
  return (
    <div className = "head">
      <header className="header">
        <h1>{title}</h1>
        <div className="Buttons">
          <Button text="Sort" onClick={onSort} />
          <Button color="green" text="Add" onClick={onAdd} />
        </div>
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Viewer",
};

export default Header;
