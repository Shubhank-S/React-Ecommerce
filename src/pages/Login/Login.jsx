import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <div className="login_container">
        <h1>LOGIN</h1>
        <div className="login_fields">
          <input type="text" placeholder="Enter your name..." />
          <input type="text" placeholder="Enter your address..." />
          <input type="text" placeholder="Enter your password..." />
        </div>
        <button className="login_button">Submit</button>
        <span className="register_to_login">
          Don't have an account? Please <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
}

export default Login;
