import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class PostsPage extends Component {
  render() {
    return <Outlet />;
  }
}

export default PostsPage;
