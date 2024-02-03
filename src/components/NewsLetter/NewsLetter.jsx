import Button from "../../utils/Button/Button";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section className="newsletter">
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newletter</p>
      <div>
        <input type="text" placeholder="Enter your email...." />
        <Button name="Subscribe" />
      </div>
    </section>
  );
}

export default NewsLetter;
