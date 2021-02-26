import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = props => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const login = () => {
    setIsAuthorized(true);
  };

  return (
    <BasketContext.Provider value={{ isAuthorized, login }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
