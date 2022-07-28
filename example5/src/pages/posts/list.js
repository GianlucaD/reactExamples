import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <h1>Posts list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={/posts/ + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
