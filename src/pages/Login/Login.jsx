import { Link } from "react-router-dom";
import useInputHandle from "../../hooks/useInputHandle";
import "./Login.css";

function Login() {
  const [setName, setEmail, setPassword] = useInputHandle();
  return (
    <section className="login">
      <div className="login_container">
        <h1>LOGIN</h1>
        <div className="login_fields">
          <input
            type="text"
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your address..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
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
