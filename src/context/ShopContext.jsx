import { createContext } from "react";

export const ShopContext = createContext();

function ShopProvider({ children }) {
  const name = "Shubhank Sharma";
  return (
    <>
      <ShopContext.Provider value={name}>{children}</ShopContext.Provider>;
    </>
  );
}

export default ShopProvider;
