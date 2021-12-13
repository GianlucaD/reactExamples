import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>This is the Landing page</h1>
      <Link to="about">About Page</Link>
    </div>
  );
}

export default LandingPage;
