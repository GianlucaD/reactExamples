import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = props => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const login = () => {
    setIsAuthorized(true);
  };

  return (
    <LoginContext.Provider value={{ isAuthorized, login }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
