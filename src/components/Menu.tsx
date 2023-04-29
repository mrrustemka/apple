import { Link } from "react-router-dom";
import "../App.scss";

const Menu = () => {
  return (
    <nav className="bg-qw p-3 text-center">
      <Link to="." className="m-4">
        Home
      </Link>
      <Link to="mac" className="m-4">
        Mac
      </Link>
      <Link to="ipad" className="m-4">
        Ipad
      </Link>
      <Link to="iphone" className="m-4">
        Iphone
      </Link>
      <Link to="watch" className="m-4">
        Watch
      </Link>
    </nav>
  );
};

export default Menu;
