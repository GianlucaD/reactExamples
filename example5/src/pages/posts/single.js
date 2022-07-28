import React from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
  const params = useParams();
  return (
    <div>
      <h1>single post</h1>
      <p>ID: {params.id}</p>
    </div>
  );
};

export default Single;
