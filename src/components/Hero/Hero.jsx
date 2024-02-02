import handIcon from "../../assets/hand_icon.png";
import arrowImage from "../../assets/arrow.png";
import heroImage from "../../assets/hero_image.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero_left">
        <h3>New Arrival only</h3>
        <span className="hero_hand_image">
          New
          <img src={handIcon} alt="" className="hero_hand_icon" />
        </span>
        <span>collection</span>
        <span>for everyone</span>
        <div className="hero_arrow_button_container">
          <button className="hero_arrow_button">
            <p>Latest Collection</p>
            <img src={arrowImage} alt="" />
          </button>
        </div>
      </div>
      <div className="hero_right">
        <img src={heroImage} alt="No hero Image" className="hero_image" />
      </div>
    </section>
  );
}

export default Hero;
