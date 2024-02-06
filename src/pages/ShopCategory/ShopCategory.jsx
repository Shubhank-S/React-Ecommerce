import useShopContext from "../../hooks/useShopContext";
import DropdownIcon from "../../assets/dropdown_icon.png";
import Item from "../../utils/Item/Item";
import Button from "../../utils/Button/Button";
import "./ShopCategory.css";

function ShopCategory({ category, banner }) {
  const { all_product } = useShopContext();
  // console.log(all_product);
  return (
    <section className="shopcategory">
      <img src={banner} alt="No Banner" className="shopcategory_bannerimage" />
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={DropdownIcon} alt="No Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory_button">
        <Button name="Load More" />
      </div>
    </section>
  );
}

export default ShopCategory;
