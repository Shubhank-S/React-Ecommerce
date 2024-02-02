import Item from "../../utils/Item/Item";
import new_collections from "../../api/new_collections";
import "./NewCollections.css";

function NewCollections() {
  return (
    <section className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className="newcollections_data">
        {new_collections.map((item, i) => (
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

export default NewCollections;
