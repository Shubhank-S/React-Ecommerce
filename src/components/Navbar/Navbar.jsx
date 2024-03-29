import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import Button from "../../utils/Button/Button";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <section className="navbar_logo">
        <img src={logo} alt="No Logo" />
        <Link to="/" className="navbar_navlinks">
          <p>Ecommerce</p>
        </Link>
      </section>
      <ul className="navbar_links">
        <li onClick={() => setMenu("home")}>
          <NavLink to="/" className="navbar_navlinks">
            Home
          </NavLink>
          {menu === "home" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("mens")}>
          <NavLink to="mens" className="navbar_navlinks">
            Mens
          </NavLink>
          {menu === "mens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("womans")}>
          <NavLink to="womans" className="navbar_navlinks">
            Womans
          </NavLink>
          {menu === "womans" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          <NavLink to="kids" className="navbar_navlinks">
            Kids
          </NavLink>
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <section className="navbar_cart">
        <Link to="/login">
          <Button name="LOGIN" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="No Cart" />
        </Link>
        <div className="navbar_cart_count">0</div>
      </section>
    </header>
  );
}

export default Navbar;
