
import React, {​​ createContext, useState, FC, useContext }​​ from 'react'
interface BasketCTXValues {​​
    basket: Products[];
    add: (p: Products) => void; 
}​​
export const BasketCTX = createContext<BasketCTXValues>({​​}​​ as BasketCTXValues);
const useBasket = () => useContext(BasketCTX);
interface Products {​​
    id: number,
    name: string
}​​
export const BasketProvider: FC = ({​​ children }​​) => {​​
    const [basket, setBasket] = useState<Products[]>([]);
    return (
        <BasketCTX.Provider value={
            ​​{​​basket: basket, 
            add: (p: Products) => setBasket(prev => [...prev, p])
            }
        ​}​
        >
            {​​children}​​
        </BasketCTX.Provider>
    )
}​​
