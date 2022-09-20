import { createContext } from "react";

export const CartContext = createContext({
  cartValue: 0,
  setCartValue: () => {},
});
