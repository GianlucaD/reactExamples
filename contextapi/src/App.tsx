import React, { useContext } from "react";
import "./App.css";
import { BasketCTX, BasketProvider } from "./context/BasketProvider";
import Products from "./context/Products";

function App() {
  const {basket} = useContext(BasketCTX);
  return (
    <div className="App">
      <h1>Hello in my app</h1>
        <div>
          {basket &&
            basket.map((product: Products) => {
              return <h1>{product.name}</h1>;
            })}
        </div>
    </div>
  );
}

export default App;
