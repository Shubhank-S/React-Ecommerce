import { Link } from "react-router-dom";
import useInputHandle from "../../hooks/useInputHandle";
import "./Register.css";

function Register() {
  const [setName, setEmail, setPassword] = useInputHandle();

  return (
    <section className="register">
      <div className="register_container">
        <h1>REGISTER</h1>
        <div className="register_fields">
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
        <button className="register_button">Submit</button>
        <span className="register_to_login">
          Already have an account? Please <Link to="/login">Login</Link>
        </span>
      </div>
    </section>
  );
}

export default Register;
