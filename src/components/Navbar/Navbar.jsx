import { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
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
          Home {menu === "home" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("mens")}>
          Men {menu === "mens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("womans")}>
          Woman {menu === "womans" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <section className="navbar_cart">
        <button>Login</button>
        <img src={cart} alt="No Cart" />
        <div className="navbar_cart_count">0</div>
      </section>
    </header>
  );
}

export default Navbar;
