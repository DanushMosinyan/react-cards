import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onSort, onAdd }) => {

  return (
    <div>
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
