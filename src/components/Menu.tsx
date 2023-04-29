import { Link } from "react-router-dom";
import logo from "../images/logo_icon_40.svg";
import "../App.css";

const Menu = () => {
  return (
    <nav className="bg-dark p-3 text-center">
      <Link to="." className="m-4 text-white text-decoration-none">
        <img src={logo} />
      </Link>
      <Link to="macs" className="m-4 text-white text-decoration-none">
        Mac
      </Link>
      <Link to="ipads" className="m-4 text-white text-decoration-none">
        Ipad
      </Link>
      <Link to="iphones" className="m-4 text-white text-decoration-none">
        Iphone
      </Link>
      <Link to="watches" className="m-4 text-white text-decoration-none">
        Watch
      </Link>
    </nav>
  );
};

export default Menu;
