import "./Button.css";

function Button({ name }) {
  return (
    <>
      <button className="button">{name}</button>
    </>
  );
}

export default Button;
