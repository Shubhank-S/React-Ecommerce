import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <div className="register_container">
        <h1>REGISTER</h1>
        <div className="register_fields">
          <input type="text" placeholder="Enter your name..." />
          <input type="text" placeholder="Enter your address..." />
          <input type="text" placeholder="Enter your password..." />
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
