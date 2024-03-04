import Button from "../../utils/Button/Button";
import starIcon from "../../assets/star_icon.png";
import starDullIcon from "../../assets/star_dull_icon.png";
import "./ProductDisplay.css";

function ProductDisplay({ product }) {
  return (
    <section className="productdisplay">
      <div className="productdisplay_left">
        <div className="productdisplay_image_list">
          <img src={product.image} alt="No image" />
          <img src={product.image} alt="No image" />
          <img src={product.image} alt="No image" />
          <img src={product.image} alt="No image" />
        </div>
        <div className="productdisplay_image">
          <img
            src={product.image}
            alt="No image"
            className="productdisplay_main_image"
          />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">
          <img src={starIcon} alt="No star-icon" />
          <img src={starIcon} alt="No star-icon" />
          <img src={starIcon} alt="No star-icon" />
          <img src={starIcon} alt="No star-icon" />
          <img src={starDullIcon} alt="No star-icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay_right_prices">
          <div className="productdisplay_right_old_prices">
            ${product.old_price}
          </div>
          <div className="productdisplay_right_new_prices">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay_right_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          asperiores commodi natus iusto incidunt voluptate in ab ex enim?
          Blanditiis.
        </div>
        <h2>Select Size</h2>
        <div className="productdisplay_right_allsize">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <div className="add_to_cart_container">
          <Button name="Add To Cart" />
        </div>
        <p className="productdisplay_right_category">
          <span>Category :</span>Woman, T-Shirt, Crop Top
        </p>
        <p className="productdisplay_right_category">
          <span>Tags :</span>Modern Latest
        </p>
      </div>
    </section>
  );
}

export default ProductDisplay;
