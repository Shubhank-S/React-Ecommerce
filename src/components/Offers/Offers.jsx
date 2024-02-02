import exclusive_image from "../../assets/exclusive_image.png";
import Button from "../../utils/Button/Button";
import "./Offers.css";

function Offers() {
  return (
    <section className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <h5>ONLY ON BEST SELLERS PRODUCTS</h5>
        <Button name="Check now" />
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="No offer" />
      </div>
    </section>
  );
}

export default Offers;
