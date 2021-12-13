import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>This is the About page</h1>
      <Link to="/">back to the Landing Page</Link>
    </div>
  );
}

export default AboutPage;
