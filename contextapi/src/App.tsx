import React, { MouseEvent, useContext } from "react";
import "./App.css";
import { BasketCTX } from "./context/BasketProvider";
import Product from "./context/Product";

function App() {
  const { basket, add } = useContext(BasketCTX);

  const addToBasket = (e: MouseEvent) => {
    const newId = Math.floor(Math.random() * Math.floor(1000));
    add({id: newId, name: "product" + newId});
  }
  return (
    <div className="App">
      <h1>Hello in my app</h1>
      <div>
        {basket &&
          basket.map((product: Product) => {
            return <h1>{product.name}</h1>;
          })}
      </div>
      <button onClick={addToBasket}>add</button>
    </div>
  );
}

export default App;
