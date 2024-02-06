import { createContext } from "react";
import all_product from "../api/all_product";

export const ShopContext = createContext();

function ShopProvider({ children }) {
  const name = "Shubhank Sharma";
  return (
    <>
      <ShopContext.Provider value={{ all_product }}>
        {children}
      </ShopContext.Provider>
      ;
    </>
  );
}

export default ShopProvider;
