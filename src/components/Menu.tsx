import { Link } from "react-router-dom";
import logo from "../images/logo_icon_40.svg";
import headers from "../data/headers";
// import "../App.css";

const Menu = () => {
  return (
    <nav className="bg-dark p-3 text-center">
      {headers.map((header) => (
        <Link
          to={header.link}
          className="m-4 text-white text-decoration-none"
          key={header.id}
        >
          {header.image ? <img src={logo} /> : header.title}
        </Link>
      ))}
      {/* <Link to="." className="m-4 text-white text-decoration-none">
        <img src={logo} />
      </Link>
      <Link to="mac" className="m-4 text-white text-decoration-none">
        Mac
      </Link>
      <Link to="ipad" className="m-4 text-white text-decoration-none">
        Ipad
      </Link>
      <Link to="iphone" className="m-4 text-white text-decoration-none">
        Iphone
      </Link>
      <Link to="watch" className="m-4 text-white text-decoration-none">
        Watch
      </Link> */}
    </nav>
  );
};

export default Menu;
