import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState({});
  const [post, setPost] = useState({});

  const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();
    setPost(json);
    console.log("post", post);
  };

  const getTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    console.log("todo", todo);
  };

  useEffect(() => {
    getTodo();
    getPost();
  }, []);

  return (
    <div className="App">
      <p>Todo Promise: {JSON.stringify(todo)}</p>
      <p>Post async/await: {JSON.stringify(post)}</p>
    </div>
  );
}

export default App;
