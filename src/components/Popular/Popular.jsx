import Item from "../Item/Item";
import data_product from "../../utils/data";
import "./Popular.css";

function Popular() {
  return (
    <section className="popular">
      <h1>Popular in woman</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
}

export default Popular;
