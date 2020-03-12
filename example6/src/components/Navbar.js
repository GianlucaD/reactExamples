import React, { Component } from "react";
import { LoginContext } from "../contexts/LoginContext";

class Navbar extends Component {
  //contextType have to be written like this!!!! Dont' use name like authContextType..
  static contextType = LoginContext;

  render() {
    const { login } = this.context;
    if (this.context.isAuthorized) {
      return (
        <nav>
          <ul>
            <li>home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      );
    } else {
      return <button onClick={login}>login</button>;
    }
  }
}

export default Navbar;
