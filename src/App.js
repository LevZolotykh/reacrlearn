import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./Styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState("Text in INPUT");

  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
