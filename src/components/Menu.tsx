import { Link } from "react-router-dom";
import logo from "../images/logo_icon_40.svg";
import headers from "../data/headers";
// import "../App.css";

const Menu = () => {
  return (
    <nav className="bg-black p-3 text-center">
      {headers.map((header) => (
        <Link
          to={header.slug}
          className="m-4 text-white text-decoration-none"
          key={header.id}
        >
          {header.image ? <img src={logo} /> : header.title}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
