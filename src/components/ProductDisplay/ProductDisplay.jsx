import Button from "../../utils/Button/Button";
import "./ProductDisplay.css";

function ProductDisplay({ product, all_product }) {
  return (
    <section className="productdisplay">
      <div className="productdisplay_left">
        <div className="productdisplay_image_list">
          <img src="" alt="No image" />
          <img src="" alt="No image" />
          <img src="" alt="No image" />
          <img src="" alt="No image" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>Select Size</h1>
        <div className="productdisplay_right_allsize">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <Button name="Add To Cart" />
      </div>
    </section>
  );
}

export default ProductDisplay;
