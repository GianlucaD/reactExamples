import React, { createContext, useState, FC } from "react";
import Products from "./Products";

interface BasketCTXValues {
  basket: Products[];
  add: (p: Products) => void;
}

export const BasketCTX = createContext<BasketCTXValues>({} as BasketCTXValues);

export const BasketProvider: FC = ({children}) => {
  const [basket, setBasket] = useState<Products[]>([{id: 1, name: "hello"}]);
  return (
    <BasketCTX.Provider
      value={{
        basket: basket,
        add: (p: Products) => setBasket((prev) => [...prev, p]),
      }}
    >
      {children}​​
    </BasketCTX.Provider>
  );
};
