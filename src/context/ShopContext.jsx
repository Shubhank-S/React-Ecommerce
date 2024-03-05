import { createContext, useState } from "react";
import all_product from "../api/all_product";

export const ShopContext = createContext();
function GetDefaultValue() {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState(GetDefaultValue());
  // console.log(cartItems);

  const AddToCart = (ItemId) => {
    setCartItems((previousValue) => ({
      ...previousValue,
      [ItemId]: previousValue[ItemId] + 1,
    }));
    console.log(cartItems);
  };

  const RemoveFromCart = (ItemId) => {
    setCartItems((previousValue) => ({
      ...previousValue,
      [ItemId]: previousValue[ItemId] - 1,
    }));
  };

  return (
    <>
      <ShopContext.Provider value={{ all_product, AddToCart, RemoveFromCart }}>
        {children}
      </ShopContext.Provider>
      ;
    </>
  );
}

export default ShopProvider;
