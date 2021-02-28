import React, { createContext, useState, FC } from "react";
import Product from "./Product";

interface BasketCTXValues {
  basket: Product[];
  add: (p: Product) => void;
}

export const BasketCTX = createContext<BasketCTXValues>({} as BasketCTXValues);

export const BasketProvider: FC = ({children}) => {
  const [basket, setBasket] = useState<Product[]>([{id: 1, name: "hello"}]);
  return (
    <BasketCTX.Provider
      value={{
        basket: basket,
        add: (p: Product) => setBasket((prev) => [...prev, p]),
      }}
    >
      {children}​​
    </BasketCTX.Provider>
  );
};
