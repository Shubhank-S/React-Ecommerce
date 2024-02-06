import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import Button from "../../utils/Button/Button";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <header className="navbar">
      <section className="navbar_logo">
        <img src={logo} alt="No Logo" />
        <p>Ecommerce</p>
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
        <Button name="LOGIN" />
        <img src={cart} alt="No Cart" />
        <div className="navbar_cart_count">0</div>
      </section>
    </header>
  );
}

export default Navbar;
