import { Link, NavLink } from "react-router-dom";
import "./styles.css";
function Navbar() {
  return (
    <>
      <h3>links hear</h3>
      <h4>Navlink tag is used because link tag not accepted className</h4>
      <ul className="Navbar">
        <li>
          <NavLink to="/" className="link1">
            Home
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink to="/About" className="link1">
            About
          </NavLink>
        </li>
        <br />
      </ul>
      <Link to="/Contact">Contact us</Link>
    </>
  );
}
export default Navbar;
