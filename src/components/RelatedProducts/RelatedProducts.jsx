import data_product from "../../api/new_collections";
import Item from "../../utils/Item/Item";
import "./RelatedProducts.css";

function RelatedProducts() {
  return (
    <section className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct_item">
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

export default RelatedProducts;
