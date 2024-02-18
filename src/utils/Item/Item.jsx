import { Link } from "react-router-dom";
import "./item.css";

function Item({ image, name, new_price, old_price, id }) {
  return (
    <section className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt="No Item" />
      </Link>
      <p>{name}</p>
      <div className="item_prices">
        <div className="item_price_new">${new_price}</div>
        <div className="item_price_old">${old_price}</div>
      </div>
    </section>
  );
}

export default Item;
