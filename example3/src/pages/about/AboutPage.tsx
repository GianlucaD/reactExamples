import React from "react";
import { Link, useParams } from "react-router-dom";

function AboutPage() {
  let { id } = useParams();
  return (
    <div>
      <h1>This is the About page! id is: {id} </h1>
      <Link to="/">back to the Landing Page</Link>
    </div>
  );
}

export default AboutPage;
